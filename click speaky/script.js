const image = document.getElementById("soundimage");
const sound = document.getElementById("soundeffect");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
});
