function updateHour(){
    const now = new Date();
    let month = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    month = startTicking(month)
    hours = startTicking(hours);
    seconds = startTicking(seconds);
    minutes = startTicking(minutes)
    
    const monthString = `${month}`;
    const hoursString = `${hours}`;
    const minutesString = `${minutes}`;
    const secondsString = `${seconds}`;
    
    document.getElementById('days').textContent = monthString;
    document.getElementById('Hours').textContent = hoursString;
    document.getElementById('minutes').textContent = minutesString;
    document.getElementById('Seconds').textContent = secondsString;
}
setInterval(updateHour);
    
    let startTicking = (val) => {
        if (val < 10) {
            val = '0' + val;
        }
        return val;
    }
