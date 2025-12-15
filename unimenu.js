//      RADIO
const song = document.getElementById("radio_song")
const radio = document.getElementById("radio")

song.volume = 0.1;

radio.addEventListener('click', function(){
    if (song.paused){
        song.play();
        radio.src = "/assets/images/radio_on.png";
    } else {
        song.pause();
        radio.src = "/assets/images/radio_off.png";
    }
})
