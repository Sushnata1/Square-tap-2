class OscillatorWrapper {
    constructor(context,waveType,waveValue) {
        this.context = context;
        this.oscillator = context.createOscillator();
        console.log({"osc":this.oscillator});
        this.oscillator.type = waveType;
        this.oscillator.frequency.value = waveValue;
        this.oscillator.connect(context.destination);
    }
    play(time) {       
        var now = this.context.currentTime;
        this.oscillator.start(0);
        this.oscillator.stop(now+time);
    }

}
export default OscillatorWrapper;