const chars = "abcdefghijklmñnopqrstuvwxyzABCDEFGHIJKLMÑNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length -1))]
const randomString = length => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card");
const letters = card.querySelector(".card-letters");

const handleOnMove = e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    letters.style.setProperty("--x", `${x}px`);
    letters.style.setProperty("--y", `${y}px`);

    letters.innerText = randomString(17000);
};

card.onmousemove = (e) => {
    handleOnMove(e)
};

card.ontouchmove = (e) => {
    handleOnMove(e.touches[0])
};

let counter = 0
function counterAdd() {
    counter++
}

card.addEventListener("click", (e) => {
    e.preventDefault()
    setInterval(IframeConstructor(), 120000)
})

function trol() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=yuCEyyQE2JOacSb0";
}

function IframeConstructor() {
    let test = document.getElementById("test")
    // test.innerHTML = `<iframe src="https://www.youtube.com/embed/koI6xFoRxjg?autoplay=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&controls=0&disablekb=1&playlist=koI6xFoRxjg" width="0" height="0" title="Keyboard Typing Sound Effect (no copyright)" frameborder="0"></iframe>`;
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/koI6xFoRxjg?controls=0&autoplay=1&rel=0&playlist=koI6xFoRxjg");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allowtransparency", "true")
    iframe.style.backgroundColor = "transparent"
    iframe.allowTransparency="true"

    card.appendChild(iframe);
}


//
// let tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";

// let firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// let player;

// function onYoutubeIframeAPIReady() {

// }

// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// let playerElem = "https://www.youtube.com/embed/wJp-BZpVBPA?autoplay=1&playsinline=1&origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fariel%2FOneDrive%2FEscritorio%2Fr%2Findex.html&enablejsapi=1&widgetid=1";

// player = new YT.Player(playerElem, {
//     width: '0px',
//     height: '0px',
//     videoId: "wJp-BZpVBPA",
//     playerVars: {
//         'autoplay': 1,
//         'playsinline': 1,
//         'origin': window.location.href
//     }
// });
// elem.stle.display="none";