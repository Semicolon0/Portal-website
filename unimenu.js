// Determine the base path based on this script's location - GEN AI BRUGT (Claude Opus 4.5)
const scripts = document.getElementsByTagName('script');
const currentScript = Array.from(scripts).find(s => s.src.includes('unimenu.js'));
const basePath = currentScript ? currentScript.src.replace('unimenu.js', '') : '';


//      RADIO
const song = document.getElementById("radio_song")
const radio = document.getElementById("radio")

song.volume = 0.1;

radio.addEventListener('click', function(){
    if (song.paused){
        song.play();
        radio.src = basePath + "assets/images/radio_on.png";
    } else {
        song.pause();
        radio.src = basePath + "assets/images/radio_off.png";
    }
})
