const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timeleft = 1500;

function updatetimer(){
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft % 60;
    let formattime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    timerE1.innerHTML = formattime;
}

function starttimer(){
interval = setInterval(()=>{
    timeleft--; 
    updatetimer();
    if(timeleft===0){
        clearInterval(interval);
        alert("time is up");
        timeleft = 1500;
        updatetimer();
    }
},1000);
}

function stoptimer(){
    clearInterval(interval);
}

function resettimer(){
    clearInterval(interval);
    timeleft = 1500;
    updatetimer();
}
startE1.addEventListener("click",starttimer);
stopE1.addEventListener("click", stoptimer);
resetE1.addEventListener("click", resettimer);