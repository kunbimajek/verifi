function openSnav() {
    document.getElementById("vSidenav").style.width = "45%";
    document.getElementById("main").style.marginLeft = "45%";
    document.getElementsByClassName("bg").style.display="none"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeSnav() {
    document.getElementById("vSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementsByClassName("bg").style.display="block"
    document.body.style.backgroundColor = "transparent";
}

function openNav() {
    document.getElementById("vNav").style.display = "block";
}

function closeNav() {
    document.getElementById("vNav").style.display = "none";
}