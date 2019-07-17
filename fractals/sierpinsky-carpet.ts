'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersCarpet: number = 5;
const startCoordCarpet: [number, number] = [canvas.width / 2, canvas.height / 2];
const squareSizeInit: number = canvas.width / 3;

let calcNextCenters = (inputCoord: [number, number], size: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0], inputCoord[1] + size]);
    output.push([inputCoord[0] + size, inputCoord[1] + size]);
    output.push([inputCoord[0] + size, inputCoord[1]]);
    output.push([inputCoord[0] + size, inputCoord[1] - size]);
    output.push([inputCoord[0], inputCoord[1] - size]);
    output.push([inputCoord[0] - size, inputCoord[1] - size]);
    output.push([inputCoord[0] - size, inputCoord[1]]);
    output.push([inputCoord[0] - size, inputCoord[1] + size]);
    return output;
}

let drawSquareFractal = (centerCoord: [number, number], layers: number, size: number): void => {

    // console.log('Center coordinate:', centerCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {
        ctx.beginPath();
        ctx.moveTo(centerCoord[0] - size / 2, centerCoord[1] - size / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] - size / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] + size / 2);
        ctx.lineTo(centerCoord[0] - size / 2, centerCoord[1] + size / 2);
        ctx.closePath();
        ctx.fill();
        calcNextCenters(centerCoord, size).forEach((element) => drawSquareFractal(element, layers - 1, size / 3));
    }
}


drawSquareFractal(startCoordCarpet, numberOfLayersCarpet, squareSizeInit);