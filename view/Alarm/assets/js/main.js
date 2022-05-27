const display = document.getElementById('clock');
const setBtn = document.querySelector('.set-alarm');
const alarmListFrame = document.querySelector('#list-alarm');
const audio = new Audio('https://cdn.tainhacchuong24h.com/download.php?name=B%C3%A1o+Th%E1%BB%A9c+iPhone+11-tainhacchuong24h.com&file=uploads/f14000/b%C3%A1o-th%E1%BB%A9c-iphone-11.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
let alarmList = [];
let html = [];


function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    display.innerText = `${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setBtn.addEventListener('click', setAlarm);

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    alarmList.push(alarmTime);
    let timeToAlarm = new Date(alarmTime);
    let hour = timeToAlarm.getHours();
    let minutes = timeToAlarm.getMinutes();
    html.push(`
        <li>
            <h4>${hour}:${minutes}</h4>
        </li>
    `);
    alarmListFrame.innerHTML = html.join('');

    console.log(alarmListFrame + " " + html);
    alarmFunc(alarmList);
}

function alarmFunc() {

    if (alarmList.length > 0) {
        const current = new Date();
        const timeToAlarm = new Date(alarmList[0]);
        console.log(1);

        if (timeToAlarm > current) {
            let timeout = timeToAlarm.getTime() - current.getTime();
            console.log(alarmList);
            alarmTimeout = setTimeout(() => audio.play(), timeout);
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        console.log(alarmList);
        clearTimeout(alarmTimeout);
    }
}



setInterval(updateTime, 1000);

setInterval(() => {
    alarmFunc();
    alarmList.shift();

}, 1000);