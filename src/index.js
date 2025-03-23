const durationInput = document.querySelector('#duration');
const startButton   = document.querySelector('#start');
const pauseButton   = document.querySelector('#pause');
const circleBorder  = document.querySelector('#circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circleBorder.setAttribute('stroke-dasharray',perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log("TIMER STARTED");
    },
    onTick(timeRemaining) {
        circleBorder.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        console.log("COMPLETED!");
    }
});