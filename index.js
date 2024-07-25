const display = document.getElementById("display");
let timer = null; //  null means no  value.
let starttime = 0;
let elapasedtime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime = Date.now() - elapasedtime;
        timer = setInterval(update,10);
        isrunning = true;

    }
   
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapasedtime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer);
     timer = null; //  null means no  value.
        starttime = 0;
    elapasedtime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}


function update(){
    
    const currenttime = Date.now();
    elapasedtime = currenttime - starttime;

    let hours =  Math.floor(elapasedtime / (1000 * 60 * 60 )); // to convert milisec to houre we use 1000*60*60.

    let minutes =  Math.floor(elapasedtime / (1000*60) % 60);
    let sec = Math.floor(elapasedtime / 1000 % 60 );
    let milisec = Math.floor(elapasedtime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes= String(minutes).padStart(2,0);
    sec = String(sec).padStart(2,0);
    milisec = String(milisec).padStart(2,0);
    

    display.textContent = `${hours}:${minutes}:${sec}:${milisec}`;

}

