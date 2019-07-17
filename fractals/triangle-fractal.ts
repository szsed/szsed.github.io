'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersTriangles: number = 6;
const startCoordTriangles: [number, number] = [canvas.width / 2, canvas.height / 2];
const triangleSize: number = canvas.width;
