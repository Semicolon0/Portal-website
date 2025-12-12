//      RADIO
const song = document.getElementById("radio_song")
const radio = document.getElementById("radio")

song.volume = 0.05;


//      SONG CHANGE bruges måske senere
/*
const song_change = document.getElementById("song_change"); //måske ændre navnet på id, hvis det ikke passer
still_alive = false;

song_change.addEventListener('click', function(){
    if (!still_alive) {
        song.src = "/assets/sounds/still_alive.mp3";
        still_alive = true
    } else {
        song.src = "/assets/sounds/portal_radio_loop.mp3";
        still_alive = false
    }
    radio.src = "/assets/images/radio_off.png"

})
*/

radio.addEventListener('click', function(){
    if (song.paused){
        song.play();
        radio.src = "/assets/images/radio_on.png";
    } else {
        song.pause();
        radio.src = "/assets/images/radio_off.png";
    }
})


//      CAKE
const cake = document.getElementById("cake")

cake.addEventListener('click', function() {
    cake.style.animation ="cake_is_not_real 0.2s"
    cake.addEventListener('animationend', function() {
        cake.remove();
    })
})
