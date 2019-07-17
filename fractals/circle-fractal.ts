'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersCircles: number = 5;
const startCoordCircles: [number, number] = [canvas.width / 2, canvas.height / 2];
const circleRadius: number = canvas.width / 2;

let calcNextCenters = (inputCoord: [number, number], inputRadius: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0], inputCoord[1] - inputRadius / 2]);
    output.push([inputCoord[0] + inputRadius / 2, inputCoord[1] + inputRadius / 2]);
    output.push([inputCoord[0] - inputRadius / 2, inputCoord[1] + inputRadius / 2]);
    return output;
}

let drawCircleFractal = (startCoord: [number, number], layers: number, size: number): void => {

    // console.log('Center coordinate:', startCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {
        ctx.beginPath();
        ctx.arc(startCoord[0], startCoord[1], size, 0, Math.PI * 2);
        ctx.stroke();
        calcNextCenters(startCoord, size).forEach((element) => drawCircleFractal(element, layers - 1, size / 2));
    }
}

drawCircleFractal(startCoordCircles, numberOfLayersCircles, circleRadius);