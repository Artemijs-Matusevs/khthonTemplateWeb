Rotated = new Boolean(false);

function rotateBackground(){
    document.getElementById("banner-image").style.transform = 'rotate(180deg)';

    document.getElementById("indexNav").style.opacity = "1";
    document.getElementById("indexNav").style.pointerEvents = "all";

    document.getElementById("menuButton").style.transform = 'rotate(180deg) scale(1.2)';
    document.getElementById("menuButton2").style.transform = 'rotate(180deg) scale(1.2)';


    setTimeout(switchMenuButtons, 500);

    document.getElementById("banner-info").style.opacity = "0";
}

function rotateBackgroundBack(){
    document.getElementById("banner-image").style.transform = 'rotate(0deg)';

    document.getElementById("indexNav").style.opacity = "0";
    document.getElementById("indexNav").style.pointerEvents = "none";

    setTimeout(switchMenuButtons2, 500);

    document.getElementById("banner-info").style.opacity = "1";

    document.getElementById("menuButton").style.transform = 'rotate(0deg)';
    document.getElementById("menuButton2").style.transform = 'rotate(0deg)';
}


function switchMenuButtons(){
    document.getElementById("menuButton").style.display = "none";
    document.getElementById("menuButton2").style.display = "block";
}

function switchMenuButtons2(){
    document.getElementById("menuButton").style.display = "block";
    document.getElementById("menuButton2").style.display = "none";
}