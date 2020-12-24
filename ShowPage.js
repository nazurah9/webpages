function ShowPage() {
    setTimeout(LoadPage, 5000); //PLEASE DO NOT CHANGE THIS! YOU HAVE TO PLAY THE GAME TO UNLOCK THE SECRET! DON'T BE A CHEATER I'M WATCHING YOU!!!!
}

function LoadPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderText").style.display = "none";
    document.getElementById("loaded").style.display = "block";
    document.getElementById("secretButton").style.display = "block";
}
