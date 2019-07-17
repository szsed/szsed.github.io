'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersHex: number = 5;
const startCoordHex: [number, number] = [canvas.width / 2, canvas.height / 2];
const hexSize: number = canvas.width / 2;

let calcNextCenters = (inputCoord: [number, number], inputLayerSize: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0] + inputLayerSize * 2 / 3, inputCoord[1]]);
    output.push([inputCoord[0] + inputLayerSize * 1 / 3, inputCoord[1] + inputLayerSize * 3 ** 0.5 / 3]);
    output.push([inputCoord[0] - inputLayerSize * 1 / 3, inputCoord[1] + inputLayerSize * 3 ** 0.5 / 3]);
    output.push([inputCoord[0] - inputLayerSize * 2 / 3, inputCoord[1]]);
    output.push([inputCoord[0] - inputLayerSize * 1 / 3, inputCoord[1] - inputLayerSize * 3 ** 0.5 / 3]);
    output.push([inputCoord[0] + inputLayerSize * 1 / 3, inputCoord[1] - inputLayerSize * 3 ** 0.5 / 3]);
    return output;
}

let drawHexFractal = (centerCoord: [number, number], layers: number, size: number): void => {

    // console.log('Center coordinate:', centerCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {

        ctx.beginPath();
        ctx.moveTo(centerCoord[0] - size / 2, centerCoord[1] - size * 3 ** 0.5 / 2);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] - size * 3 ** 0.5 / 2);
        ctx.lineTo(centerCoord[0] + size, centerCoord[1]);
        ctx.lineTo(centerCoord[0] + size / 2, centerCoord[1] + size * 3 ** 0.5 / 2);
        ctx.lineTo(centerCoord[0] - size / 2, centerCoord[1] + size * 3 ** 0.5 / 2);
        ctx.lineTo(centerCoord[0] - size, centerCoord[1]);
        ctx.closePath();
        ctx.stroke();
        calcNextCenters(centerCoord, size).forEach((element) => drawHexFractal(element, layers - 1, size / 3));
    }
}


drawHexFractal(startCoordHex, numberOfLayersHex, hexSize);