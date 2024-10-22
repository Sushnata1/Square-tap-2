class Bomb {
    constructor(p5,size,w,h) {
        this.p5 = p5
        this.n = size;
        this.x = p5.random(this.n, w - this.n);
        this.y = p5.random(this.n, h - this.n);
        //this.img = img//image
    }

    change = () => {
        this.x = p5.random(this.n, w - this.n);
        this.y = p5.random(this.n, h - this.n);
    }

    show = () => {
        this.p5.push();
        //image(this.img,this.x, this.y, this.n, this.n);// 
        //this.p5.stroke(255);
        //this.p5.strokeWeight(4);
        //this.p5.stroke(this.r,this.g,this.b);
        this.p5.fill(255);
        this.p5.rect(this.x,this.y,this.n,this.n);
        this.p5.pop();
    }

    collide = () => {
        if ((mouseX >= this.x && mouseX <= this.x + this.n) && (mouseY >= this.y && mouseY <= this.y + this.n)) {
            noLoop();
            var p = document.getElementById("points");
            p.innerHTML = "Game Over | Score : " + po;
            /*
            // not working :<
            --
            var soscillator;
            soscillator = scontext.createOscillator();
            soscillator.type = 'sine';
            soscillator.frequency.value = 523;
            soscillator.connect(scontext.destination);
            var now = scontext.currentTime;
            soscillator.start(0);
            soscillator.stop(now + 1);
            //delete soscillator;
            /*--*/
            this.gameover();
            window.open("gameover.html", "_self");
        }
    }

    gameover = () => {
        var end_time = new Date(Date.now());
        var start_time = Date.parse(localStorage.getItem("start_time"));
        var time_taken = end_time - start_time;
        var level = JSON.parse(localStorage.getItem("level"))["name"];
        var history = JSON.parse(localStorage.getItem("history")) ?? [];
        var s = {
            score : po,
            level : level,
            time_taken : time_taken+" ms",
            recorded_at : end_time.toString(),
        };
        history.push(s);
        history = Array.from(new Set(history));//remove duplicates
        localStorage.setItem("history",JSON.stringify(history));
    }
}

export default Bomb