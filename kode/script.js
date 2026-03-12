const iframe = document.getElementById("scplayer");
const widget = SC.Widget(iframe);

const btn = document.getElementById("playBtn");
const vinyl = document.querySelector(".vinyl");

let playing = false;

btn.onclick = function(){

    if(!playing){
        widget.play();
        vinyl.classList.add("playing");
        btn.textContent = "||";
        playing = true;
    } else {
        widget.pause();
        vinyl.classList.remove("playing");
        btn.textContent = "▶";
        playing = false;
    }

}