document.querySelector("#play").onclick = play;
document.querySelector("#pause").onclick = pause;
document.querySelector("#stop").onclick = stop;
document.querySelector("#volune").oninput = videoVolume;

let video;
let disply;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
//!!!
video.ontimeUpdate = progressUpdate;

function play() {video.play()}
function pause() {video.paue()}
function stop() {video.pause();video.currentTime = 0}
function videoVolume() { let v = this.value;
video.volume = v / 100;}
function progressUpdate(){
    let d = video.duration;
    let c = video.currentTime;
    progress.value = (100*c)/d
    document.querySelector('#out').innerHTML = video.currentTime;}