// const age = confirm("Are you 18 or older?")


// if(age){
//     const audio = new Audio("audio/car-engine-roaring-376881.mp3");
//     audio.play()
// }else{
//     window.open("https://www.google.com/");
// }



function showHiddenMenu() {
    const links = document.getElementById('links');
    if(links.classList.contains("show")){
        links.classList.remove("show")
    }else{
        links.classList.add("show")
    }
}
