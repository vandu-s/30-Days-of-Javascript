const newYear = '1 jan 2021';

const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const miniteElement = document.getElementById('mins');
const secondElement = document.getElementById('seconds');


function time() {
    const currentDate = new Date();
    const newYearDate = new Date(newYear);
    const currentTime = currentDate.getTime();
    // console.log(currentTime);
    const targetTime = newYearDate.getTime();
    // console.log(targetTime);
    const newTime = targetTime - currentTime;
    // console.log(newTime);
    const totalSecond = Math.floor(newTime / 1000);
    // console.log(totalSecond);
    const days = Math.floor(totalSecond / 3600 / 24);
    // console.log(days);
    const hours = Math.floor(totalSecond / 3600) % 24;
    // console.log(hours);
    const Minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
    // console.log(days, hours, Minutes, seconds)
    dayElement.textContent = days;
    hourElement.textContent = formatTime(hours);
    miniteElement.textContent = formatTime(Minutes);
    secondElement.textContent = formatTime(seconds);


}
// time();

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
setInterval(time, 1000);