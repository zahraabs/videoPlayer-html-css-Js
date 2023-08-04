let player = document.querySelector(".myplayer");
let video = player.querySelector("#myVideo");
let controls = player.querySelector(".myplayer__controls");
let play = controls.querySelector(".play");

play.addEventListener("click" , playOrPause);

function playOrPause() {
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