import "../src/css/style.css";

const navigation = document.querySelector("header");
const SCROLLED_CLASS = "scrolled";

const video = document.querySelector(".js-video"),
  button = document.querySelector(".js-button"),
  volumeBtn = document.querySelector(".js-volume");

const handleWindowScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 100) {
    navigation.classList.add(SCROLLED_CLASS);
    video.pause();
  } else {
    navigation.classList.remove(SCROLLED_CLASS);
    video.play();
  }
};

window.addEventListener("scroll", handleWindowScroll);

video.muted = true;

const handleVideoClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const handleVolumeClick = () => {
  if (video.muted) {
    video.muted = false;
    volumeBtn.innerHTML = "🔊";
  } else {
    video.muted = true;
    volumeBtn.innerHTML = "🔇";
  }
};

volumeBtn.addEventListener("click", handleVolumeClick);
