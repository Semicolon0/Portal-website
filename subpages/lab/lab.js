
//      GLaDOS VO
const glados_concept = document.getElementById("glados_concept");
const glados_vo = document.getElementById("glados_vo");

glados_vo.volume = .3;

glados_concept.addEventListener('click', function() {
    glados_vo.play();
})

//      PORTAL REDIRECT
const portal = document.getElementById("portal_redir");

portal.addEventListener('click', function(){
    window.location.href = "/index.html";
})


//      SONG CHANGE - WHEN RADIO CONCEPT ART IS CLICKED

const song_change = document.getElementById("radio_concept"); 
still_alive = false;


//      RADIO CHANGE
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