
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