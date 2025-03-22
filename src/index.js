class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.interval = setInterval(() => {
         this.tick()
        }, 1000);
    };

    pause = () => {
      clearInterval(this.interval)
    };
    onDurationChange(){};
    tick(){
      if(this.timeRemaining <= 0){
        this.pause;
        alert("END OF THE TIMER");
      } else{
        this.timeRemaining = this.timeRemaining - 1;
      }
    };
    get timeRemaining(){
        return parseInt(durationInput.value);
    }
    set timeRemaining(time) {
        durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);