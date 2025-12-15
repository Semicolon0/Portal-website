//      CAKE

const cake = document.getElementById("cake")

cake.addEventListener('click', function() {
    document.getElementById("body1_text_under").innerHTML = "That was a test. There is no cake. Yet."
    cake.style.animation ="cake_is_a_lie 0.2s"
    cake.addEventListener('animationend', function() {
        cake.remove();
    })
})

//      PORTAL
const lab_portal = document.getElementById("lab_portal")

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            lab_portal.style.animation ="lab_portal_grow .5s forwards";
        } else {
            lab_portal.style.animation = "lab_portal_shrink .2s forwards"
        }
    })
}, {threshold: 0.1});

observer.observe(lab_portal)
