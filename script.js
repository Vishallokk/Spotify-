
let playedButton = document.getElementById("std2");
let gif = document.getElementById("gif")
 
let myProgressBar = document.getElementById("myProgressBar")
let audioElement = new Audio("./Audio5.mp3");

playedButton.addEventListener("click", () => {
    let playedIcon = playedButton.querySelector('i');

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playedIcon.classList.remove("fa-circle-play");
        playedIcon.classList.add("fa-circle-pause");
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        playedIcon.classList.remove("fa-circle-pause");
        playedIcon.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate",() =>{
    progress = parseint((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',() => {
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

