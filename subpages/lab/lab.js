
//      GLaDOS VO
const glados_concept = document.getElementById("glados_concept");
const glados_vo = document.getElementById("glados_vo");

glados_vo.volume = .3;

glados_concept.addEventListener('click', function() {
    glados_vo.play();
})


//      SONG CHANGE - WHEN RADIO CONCEPT ART IS CLICKED

const song_change = document.getElementById("radio_concept"); 
still_alive = false;

song_change.addEventListener('click', function(){
    if (!still_alive) {
        song.src = "/assets/sounds/still_alive.mp3";
        song.play();
        radio.src = "/assets/images/radio_on.png";
        still_alive = true;
    } else {
        song.src = "/assets/sounds/portal_radio_loop.mp3";
        still_alive = false;
        radio.src = "/assets/images/radio_off.png"
    }


})