class Bomb {
    constructor(p5,size,w,h,gameOver) {
        this.p5 = p5
        this.n = size;
        this.x = p5.random(this.n, w - this.n);
        this.y = p5.random(this.n, h - this.n);
        this.gameOver = gameOver;
        //this.img = img//image
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
        if (
            (this.p5.mouseX >= this.x && this.p5.mouseX <= this.x + this.n)
            &&
            (this.p5.mouseY >= this.y && this.p5.mouseY <= this.y + this.n)) {
            this.p5.noLoop();
            this.gameOver();
        }
    }

}

export default Bomb