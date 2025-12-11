//      RADIO
song = document.getElementById("radio_song")
radio = document.getElementById("radio")

radio.addEventListener('click', function(){
    if (song.paused){
        song.play();
    } else {
        song.pause();
    }
})