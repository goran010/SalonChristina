const navOverlay = document.querySelector(".navOverlay");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");
const speaker = document.querySelector(".iconSpeaker");
const btnGoUp = document.getElementById("goUp");

window.addEventListener("load", () => {
  navOverlay.style.transition = "transform 0.4s ease";
});

hamburgerIcon.addEventListener("click", () => {
  navOverlay.style.display = "flex";
  setTimeout(() => {
    navOverlay.style.transform = " translateX(0rem)";
  }, 1);
});

closeIcon.addEventListener("click", () => {
  navOverlay.style.transform = " translateX(22rem)";
  setTimeout(() => {
    navOverlay.style.display = "none";
  }, 400);
});

speaker.addEventListener("click", () => {
  let myAudio = document.querySelector("video");
  myAudio.muted = !myAudio.muted;
  myAudio.muted
    ? (speaker.src = "icons/mute.png")
    : (speaker.src = "icons/speaker.png");
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnGoUp.style.display = "block";
  } else {
    btnGoUp.style.display = "none";
  }
};

btnGoUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
