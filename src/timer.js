class Timer {
    constructor(durationInput, startButton, pauseButton,callbacks){
        this.durationInput = durationInput;
        this.startButton   = startButton;
        this.pauseButton   = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        if(callbacks) {
            this.onStart    = callbacks.onStart;
            this.onTick     = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.interval = setInterval(() => {
         this.tick()
        }, 50);
    };

    pause = () => {
      clearInterval(this.interval)
    };
    onDurationChange(){};
    tick = () => {
      if(this.timeRemaining <= 0){
        if(this.onComplete){
            this.onComplete();
        }
        this.pause;
        alert("END OF THE TIMER");
      } else{
        this.timeRemaining = this.timeRemaining - 0.05;
        if(this.onTick){
         this.onTick(this.timeRemaining);
        }
      }
    };
    get timeRemaining(){
        return parseFloat(durationInput.value);
    }
    set timeRemaining(time) {
        durationInput.value = time.toFixed(2);
    }
}

