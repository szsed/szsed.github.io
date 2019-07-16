'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersSquares: number = 4;
const startCoordSquares: [number, number] = [canvas.width / 2, canvas.height / 2];
const squareSize: number = canvas.width / 2;

let calcNextCenters = (inputCoord: [number, number], distance: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0], inputCoord[1] + distance]);
    output.push([inputCoord[0] + distance, inputCoord[1]]);
    output.push([inputCoord[0], inputCoord[1] - distance]);
    output.push([inputCoord[0] - distance, inputCoord[1]]);
    return output;
}

let drawSquareFractal = (centerCoord: [number, number], layers: number, size: number): void => {

    console.log('Center coordinate:', centerCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {
        ctx.moveTo(centerCoord[0] - size / 2, centerCoord[1] - size / 2);
        ctx.beginPath();
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] - size / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] + size / 2);
        ctx.lineTo(centerCoord[0] - size / 2, centerCoord[1] + size / 2);
        ctx.closePath();
        ctx.stroke();
        calcNextCenters(centerCoord, size / 3).forEach((element) => drawSquareFractal(element, layers-1, size/3));
    }
}


drawSquareFractal(startCoordSquares, numberOfLayersSquares, squareSize);