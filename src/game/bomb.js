import { sounds } from "../constants";
class Bomb {
    constructor(p5,size,w,h,gameOver,image) {
        this.p5 = p5
        this.n = size;
        this.x = p5.random(this.n, w - this.n);
        this.y = p5.random(this.n, h - this.n);
        this.gameOver = gameOver;
        this.img = image
    }

    show = () => {
        this.p5.push();
        this.p5.image(this.img,this.x, this.y, this.n, this.n);
        // this.p5.fill(255);
        // this.p5.rect(this.x,this.y,this.n,this.n);
        this.p5.pop();
    }

    collide = () => {
        if (
            (this.p5.mouseX >= this.x && this.p5.mouseX <= this.x + this.n)
            &&
            (this.p5.mouseY >= this.y && this.p5.mouseY <= this.y + this.n)) {
            sounds.bad.play();
            this.p5.noLoop();
            this.gameOver();
        }
    }

}

export default Bomb