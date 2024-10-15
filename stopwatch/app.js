let timer = document.querySelector('.timer')
let stopBtn = document.getElementById("stopBtn")
let startBtn = document.getElementById("startBtn")
let resetBtn = document.getElementById("resetBtn")


let ms = 0;
let sec = 0
let mins = 0

let timerId = null;

startBtn.addEventListener('click',()=>{
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timerId)
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timerId)
    timer.innerHTML = `00 : 00 : 00`
    ms = sec = mins = 0
})

function startTimer(){
    ms++;
    if(ms==100){
        ms = 0
        sec++
        if(sec==60){
            sec=0
            mins++
        }
    }

    let msstring = ms<10 ? `0${ms}` : ms;
    let secstring = sec<10 ? `0${sec}` : sec;
    let minstring = mins<10 ? `0${mins}` : mins;

    timer.innerHTML = `${msstring} : ${secstring} : ${minstring}`
}