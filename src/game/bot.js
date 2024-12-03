class Bot {
    constructor(p5, size, w, h,increment,image) {
        this.w = w
        this.h = h
        this.p5 = p5;
        this.size = size;
        this.x = p5.random(this.size, this.w - this.size);
        this.y = p5.random(this.size, this.h - this.size);
        this.r = p5.random(20, 255);
        this.g = p5.random(0, 255);
        this.b = p5.random(0, 255);
        this.increment = increment
        this.img = image
        //this.scontext = _sc;
    }

    change = () => {
        this.x = this.p5.random(this.size, this.w - this.size);
        this.y = this.p5.random(this.size, this.h - this.size);
        this.r = this.p5.random(20, 255);
        this.g = 100;
        this.b = 100;
        this.increment()
    }

    show = () => {
        this.p5.push();
        this.p5.tint(this.r, this.g, this.b);//fill(this.r,this.b,this.g);
        this.p5.image(this.img,this.x, this.y, this.size, this.size);// 
        // this.p5.fill(this.r, this.g, this.b);
        // this.p5.rect(this.x, this.y, this.size, this.size);
        this.p5.pop();
    }

    collide = () => {
        if (
            (this.p5.mouseX >= this.x && this.p5.mouseX <= this.x + this.size)
            &&
            (this.p5.mouseY >= this.y && this.p5.mouseY <= this.y + this.size)
        ) {
            // var p = document.getElementById("points");
            // po++;
            // p.innerHTML = "Score : " + po;
            console.log("Bot hovered");

            this.change();
            // var soscillator;
            // soscillator = this.scontext.createOscillator();
            // console.log("oscillator");
            // //console.log(soscillator);
            // soscillator.type = 'sine';
            // soscillator.frequency.value = 523;
            // soscillator.connect(this.scontext.destination);
            // var now = this.scontext.currentTime;
            // soscillator.start(0);
            // //console.log("sound");--
            // soscillator.stop(now + 0.5);
        }
    }
}

export default Bot
