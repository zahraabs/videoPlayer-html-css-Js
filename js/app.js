let player = document.querySelector(".myplayer");
let video = player.querySelector("#myVideo");
let controls = player.querySelector(".myplayer__controls");

let play = controls.querySelector(".play");
let rewind = controls.querySelector(".rewind");
let forward = controls.querySelector(".forward");
let currentTime = controls.querySelector(".currentTime");
let videoTime = controls.querySelector(".videoTime");

play.addEventListener("click", playOrPause);
rewind.addEventListener("click", back5Sec);
forward.addEventListener("click", go5Sec);

video.addEventListener("timeupdate", updateVideoDetails);

function playOrPause() {
    videoTime.textContent = getTime(video.duration)
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

    togglePlayIcon();
}

function togglePlayIcon() {
    let icon = play.querySelector("i");

    icon.classList.toggle("ion-play");
    icon.classList.toggle("ion-pause");
}

function back5Sec() {
    video.currentTime -= 5;
}
function go5Sec() {
    video.currentTime += 5;
}

function updateVideoDetails() {
    currentTime.textContent = getTime(video.currentTime)
}

function getTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let formatedTime = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    return formatedTime;
}