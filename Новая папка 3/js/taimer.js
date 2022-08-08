

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');






const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`); 



function updateCounter() {

    const currentTime = new Date();
    const diff =  nextYear - currentTime;
    
    
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    
    const secondsLeft = Math.floor(diff / 1000) % 60;
    
    
    
    
    days.innerText = daysLeft; 
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft; 
    
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft; 
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft; 
}

updateCounter();



setInterval(updateCounter, 1000);






// Taimer Too............................................................................................


const daysToo = document.querySelector('#daysToo');
const hoursToo = document.querySelector('#hoursToo');
const minutesToo = document.querySelector('#minutesToo');
const secondsToo = document.querySelector('#secondsToo');






const currentYearToo = new Date().getFullYear();
const nextYearToo = new Date(`January 01 ${currentYearToo + 1} 00:00:00`); 



function updateCounterToo() {

    const currentTimeToo = new Date();
    const diffToo =  nextYearToo - currentTimeToo;
    
    
    const daysLeftToo = Math.floor(diffToo / 1000 / 60 / 60 / 24);
    
    const hoursLeftToo = Math.floor(diffToo / 1000 / 60 / 60) % 24;
    
    const minutesLeftToo = Math.floor(diffToo / 1000 / 60) % 60;
    
    const secondsLeftToo = Math.floor(diffToo / 1000) % 60;
    
    
    
    
    daysToo.innerText = daysLeftToo; 
    hoursToo.innerText = hoursLeftToo < 10 ? '0' + hoursLeftToo : hoursLeftToo; 
    
    minutesToo.innerText = minutesLeftToo < 10 ? '0' + minutesLeftToo : minutesLeftToo; 
    secondsToo.innerText = secondsLeftToo < 10 ? '0' + secondsLeftToo : secondsLeftToo; 
}

updateCounterToo();



setInterval(updateCounterToo, 1000);







