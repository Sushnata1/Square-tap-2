class Bot {
    constructor(p5,size,w,h) {
        this.p5 = p5
        this.size = size;
        this.x = p5.random(this.size, w - this.size);
        this.y = p5.random(this.size, h - this.size);
        this.r = p5.random(20, 255);
        this.g = p5.random(0, 255);
        this.b = p5.random(0, 255);
        //this.img = img;//image
        //this.scontext = _sc;
    }

    change = () => {
        this.x = p5.random(this.size, w - this.size);
        this.y = p5.random(this.size, h - this.size);
        this.r = p5.random(20, 255);
        this.g = p5.random(20, 255);
        this.b = p5.random(20, 255);
    }

    show = () => {
        this.p5.push();
        //tint(this.r, this.g, this.b);//fill(this.r,this.b,this.g);
        //image(this.img,this.x, this.y, this.size, this.size);// 
        //stroke(255);
        //strokeWeight(4);
        //stroke(this.r,this.g,this.b);
        this.p5.fill(this.r,this.g,this.b);
        this.p5.rect(this.x,this.y,this.size,this.size);
        this.p5.pop();
    }

    collide = () => {
        if ((mouseX >= this.x && mouseX <= this.x + this.size) && (mouseY >= this.y && mouseY <= this.y + this.size)) {
            var p = document.getElementById("points");
            po++;
            p.innerHTML = "Score : " + po;
            this.change();
            var soscillator;
            soscillator = this.scontext.createOscillator();
            console.log("oscillator");
            //console.log(soscillator);
            soscillator.type = 'sine';
            soscillator.frequency.value = 523;
            soscillator.connect(this.scontext.destination);
            var now = this.scontext.currentTime;
            soscillator.start(0);
            //console.log("sound");--
            soscillator.stop(now + 0.5);
        }
    }
}

export default Bot
