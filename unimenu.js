//      UNIVERSAL MENU

document.querySelectorAll('.uni_item').forEach(function(item) {
    item.addEventListener('click', function () {
        const item_name = item.getAttribute('id');
        console.log(item_name);
        uni_redir(item_name);
    })
})

function uni_redir(item){
    switch (item) {
        case "testc_redir":
        case "ap_logo":
            window.location.href = "/index.html";
            break;

        case "rs_redir":
            window.location.href="/subpages/lab/lab.html";
            break;

        case "tob_redir":
            window.location.href="/subpages/tob/tob.html";
            break;
        default:
            console.log("an error occured");
            break;
    }
}

//      RADIO
const song = document.getElementById("radio_song")
const radio = document.getElementById("radio")

song.volume = 0.1;


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
