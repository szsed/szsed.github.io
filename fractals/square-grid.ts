'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersGrid: number = 4;
const startCoordGrid: [number, number] = [canvas.width / 2, canvas.height / 2];
const squareSize: number = canvas.width / 2;

let calcNextCenters = (inputCoord: [number, number], inputSize: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0] - inputSize / 2, inputCoord[1] - inputSize / 2]);
    output.push([inputCoord[0] + inputSize / 2, inputCoord[1] - inputSize / 2]);
    output.push([inputCoord[0] + inputSize / 2, inputCoord[1] + inputSize / 2]);
    output.push([inputCoord[0] - inputSize / 2, inputCoord[1] + inputSize / 2]);
    return output;
}

let drawGridFractal = (centerCoord: [number, number], layers: number, size: number): void => {

    // console.log('Center coordinate:', centerCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {
        ctx.beginPath();
        ctx.moveTo(centerCoord[0] - size / 2, centerCoord[1] - size / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] - size / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] + size / 2);
        ctx.lineTo(centerCoord[0] - size / 2, centerCoord[1] + size / 2);
        ctx.closePath();
        ctx.lineWidth = layers * 3;
        ctx.stroke();
        calcNextCenters(centerCoord, size).forEach((element) => drawGridFractal(element, layers-1, size / 2));
    }
}


drawGridFractal(startCoordGrid, numberOfLayersGrid, squareSize);