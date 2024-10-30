import React from 'react';
import { useRef } from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

import Bot from './bot';
import Bomb from './bomb';


export default ({increment,gameOver}) => {

    const canvasRef = useRef(null);

    const level = JSON.parse(localStorage.getItem("level"))
    const { size, number: count, delay } = level;
    var parentWidth, parentHeight;

    var bots, bombs;

    var pointerImg, botImg, bombImg;

    function sketch(p5) {

        p5.preload = () => {
            pointerImg = p5.loadImage('./pointer.svg');
            botImg = p5.loadImage(`./kali.jpeg`);
            bombImg = p5.loadImage(`./bomb.jpg`);
        }

        p5.setup = () => {
            parentWidth = canvasRef.current.parentElement.offsetWidth;
            parentHeight = canvasRef.current.parentElement.offsetHeight;
            p5.createCanvas(parentWidth, parentHeight);
            p5.background(0);
            bots = createBots(p5,count);
            console.log({bots});
            bombs = createBombs(p5,count);
            console.log({bombs});
            p5.frameRate(10)
        }

        p5.draw = () => {
            p5.clear();
            p5.background(0);
            p5.push();
            p5.rectMode(p5.CENTER);
            p5.pop();
            for (let b of bots) {
                b.collide();
                b.show();
            }
            for (let b of bombs) {
                b.collide();
                b.show();
            }
            showPointer();
        };

        const showPointer = () => {
            p5.push();
            p5.image(pointerImg, p5.mouseX - size / 2, p5.mouseY - size / 2, size, size);
            p5.pop();
        }

        const createBots = (p5,count) => {
            var bots = [];
            for (let i = 0; i < count; i++) {
                bots.push(new Bot(p5,size,parentWidth,parentHeight,increment,botImg));
              }
            return bots            
        }

        const createBombs = (p5,count) => {
            var bombs = [];
            for (let i = 0; i < count; i++) {
                bombs.push(new Bomb(p5,size,parentWidth,parentHeight,gameOver,bombImg));
              }
            return bombs            
        }

        // p5.windowResized = () => {//buggy
        //     parentWidth = canvasRef.current.parentElement.offsetWidth;
        //     parentHeight = canvasRef.current.parentElement.offsetHeight;
        //     p5.resizeCanvas(parentWidth, parentHeight);
        // };

    }

    return (
        <div ref={canvasRef} style={{ width: '100%', height: '70vh' }} >
            <ReactP5Wrapper sketch={sketch} />
        </div>
    )
}
