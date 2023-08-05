let player = document.querySelector(".myplayer");
let video = player.querySelector("#myVideo");
let controls = player.querySelector(".myplayer__controls");

let play = controls.querySelector(".play");
let rewind = controls.querySelector(".rewind");
let forward = controls.querySelector(".forward");
let currentTime = controls.querySelector(".currentTime");
let videoTime = controls.querySelector(".videoTime");
let timeBar = controls.querySelector(".controls__progressbar-current");
let volume = controls.querySelector(".volume .ion-volume-high");
let volumeProgressBar = controls.querySelector(".volume .volume__progress");

let volumeProgressBarInput = volumeProgressBar.querySelector("input");

play.addEventListener("click", playOrPause);
rewind.addEventListener("click", back5Sec);
forward.addEventListener("click", go5Sec);
timeBar.addEventListener("input", changeTime);
volume.addEventListener("click", showVolumeIcon);
volumeProgressBarInput.addEventListener("input", changeVolume);

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

        let length = (video.currentTime / video.duration) * 100;
        timeBar.style.background = ` linear-gradient(90deg , rgba(230,126,34,1) ${length}%, #e1e1e1 0%)`;
        timeBar.value = length;
}

function changeTime() {
    video.currentTime = (this.value / 100) * video.duration;
}

function showVolumeIcon() {
    volumeProgressBar.classList.toggle("active")
}

function changeVolume() {
    video.volume = this.value / 100;
    this.style.background = `linear-gradient(90deg, rgba(230, 126, 34, 1) ${this.value}%, #e1e1e1 50%)`
}

function getTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let formatedTime = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    return formatedTime;
}