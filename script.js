// script.js

document.addEventListener('DOMContentLoaded', function() {
    const countdownForm = document.getElementById('countdown-form');
    const countdownDisplay = document.getElementById('countdown');
    const daysDisplay = document.getElementById('days');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    let countdownInterval;

    function updateCountdown(targetDate) {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysDisplay.textContent = days;
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerHTML = 'Countdown has ended!';
        }
    }

    countdownForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const occasion = document.getElementById('occasion').value;
        const date = document.getElementById('date').value;
        const targetDate = new Date(date).getTime();

        if (isNaN(targetDate)) {
            alert('Please enter a valid date.');
            return;
        }

        countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
    });
});
