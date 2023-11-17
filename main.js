const chars = "abcdefghijklmñnopqrstuvwxyzABCDEFGHIJKLMÑNOPQRSTUVWXYZ0123456789"

const randomChar = () => chars[Math.floor(Math.random() * (chars.length -1))]
const randomString = length => Array.from(Array(length)).map(randomChar).join("")

const source = "./assets/audio/keyboard.mp3"
const audio = new Audio()

const card = document.querySelector(".card")
const letters = card.querySelector(".card-letters")

const handleOnMove = e => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    letters.style.setProperty("--x", `${x}px`)
    letters.style.setProperty("--y", `${y}px`)

    letters.innerText = randomString(17000)
}

card.onmousemove = (e) => {
    handleOnMove(e)
}

card.ontouchmove = (e) => {
    handleOnMove(e.touches[0])
}

audio.src = source
audio.autoplay = true
let play = false

audio.addEventListener("canplay", function() {

    card.setAttribute("onmouseover", "startKeyboardSound(true)")
    card.setAttribute("onmouseout", "startKeyboardSound(false)")
}, true)

function startKeyboardSound(hover) {
    console.log(hover)
    if(hover == true) {
            console.log(`Play, ${hover}`)
            audio.play()
            setInterval(() => {
                console.log(`Audio is ended?: ${audio.ended}`)
                if(audio.ended == true) {
                    audio.currentTime = 0
                    audio.play()
                }
            }, 1)
    } else if(hover == false) {
        audio.currentTime = 0
        audio.pause()        
        console.log(`Stop, ${hover}`) 
    }
}