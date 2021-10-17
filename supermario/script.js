let navigation = document.getElementById('head-nav');
window.onscroll = function(){
    if(window.pageYOffset > 100){
        navigation.style.background = "rgb(221, 70, 70)";
        navigation.style.boxShadow = " 5px 5px 30px rgb(219, 131, 131)";

    }else {
        navigation.style.background = "transparent";
        navigation.style.boxShadow = "none";
    }
}
function showFunction(){
    let list = document.getElementById('nav-list');
    let clicked = document.getElementById('clicked');
    list.style.display = "block";
    list.style.width="200px";
    clicked.style.visibility = "hidden";
}

function closeNav() {
    let list = document.getElementById('nav-list');
    let clicked = document.getElementById('clicked');
    if(screen.width <= 400 || screen.width <= 768) {
        list.style.display = "none";
    }
    clicked.style.visibility = "visible";
    clicked.style.transitionDelay = ".3s";
    
}