//      REDIRECTS

document.querySelectorAll('.cover_art').forEach(function(item) {
    item.addEventListener('click', function () {
        const item_name = item.getAttribute('id');
        console.log(item_name);
        otb_redir(item_name);
    })
})

function otb_redir(item){
    switch (item) {
        case "hl2":
            window.open("https://store.steampowered.com/app/220/HalfLife_2/", "_blank");
            break;

        case "tf2":
            window.open("https://store.steampowered.com/app/440/Team_Fortress_2/", "_blank");
            break;

        case "portal_cover":
            window.open("https://store.steampowered.com/app/400/Portal/", "_blank");
            break;
        default:
            console.log("an error occured");
            break;
    }
}

const orange_box = document.getElementById("orange_box");

orange_box.addEventListener('click', function(){
    window.open("https://store.steampowered.com/sub/469/", "_blank");
})