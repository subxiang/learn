/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = main;

function main() {
    var ctx = document.getElementById('canvas').getContext('2d');
    
    drawGrid(ctx);
    drawAxis(ctx);
    drawMark(ctx);
    fillGradient(ctx);
    drawImg(ctx);
}

function drawGrid(ctx) {
    var MAX_X = 800;
    var MAX_Y = 600;
    
    ctx.beginPath();
    
    for (var x = 0.5; x < MAX_X; x += 10) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, MAX_Y);
    }
    
    for (var y = 0.5; y < MAX_Y; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(MAX_X, y);
    }
    
    ctx.strokeStyle = '#eee';
    ctx.stroke();
}

function drawAxis(ctx) {
    ctx.beginPath();
    
    ctx.moveTo(0, 40);
    ctx.lineTo(240, 40);
    ctx.moveTo(260, 40);
    ctx.lineTo(500, 40);
    ctx.moveTo(495, 35);
    ctx.lineTo(500, 40);
    ctx.lineTo(495, 45);
    
    ctx.moveTo(60, 0);
    ctx.lineTo(60, 153);
    ctx.moveTo(60, 173);
    ctx.lineTo(60, 375);
    ctx.moveTo(55, 370);
    ctx.lineTo(60, 375);
    ctx.lineTo(65, 370);
    
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

function drawMark(ctx) {
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('x', 248, 43);
    ctx.fillText('y', 58, 165);
    
    ctx.textBaseline = 'top';
    ctx.fillText('(0, 0)', 8, 5);
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText('(500, 375)', 492, 370);
    
    ctx.fillRect(0, 0, 3, 3);
    ctx.fillRect(492, 372, 3, 3);
}

function fillGradient(ctx) {
    var gradient = ctx.createLinearGradient(100, 0, 400, 0);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(1, 'white');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(100, 100, 300, 255);
}

function drawImg(ctx) {
    var img = new Image();
    img.src = 'euro.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 800, 100, 0, 400, 800, 100);
    };
}