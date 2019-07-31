const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const cw = canvas.width
const ch = canvas.height

const wall = 225
const aiSize = 50

let aiX = 225
let aiY = 225

const centerX = cw/2
const centerY = ch/2

const aiXcenter = aiSize/2
const aiYcenter = aiSize/2

let dirNumber

let xSpeed = 0
let ySpeed = 0

function table(){
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, ch, cw)
    ctx.fillStyle="gray"
    ctx.fillRect(cw/2-aiSize/2, 0, aiSize, ch)
    ctx.fillRect(0,ch/2-aiSize/2,cw, aiSize )
}

function aiPosition(){
    ctx.fillStyle ="red"
    ctx.fillRect(aiX,aiY, aiSize, aiSize)
}

function decision(){
    let dirSelector = Math.random()

    if(aiX + aiXcenter == centerX && aiY + aiYcenter == centerY){
        dirNumber = 0
        if(dirSelector < .25){
            dirNumber = 1
        }
        else if(dirSelector >= .25 && dirSelector < .50){
            dirNumber = 2
        }
        else if(dirSelector >= .50 && dirSelector < .75){
            dirNumber = 3
        }
        else if(dirSelector >= .75){
            dirNumber = 4
        }
    }
}

function move(){
    
    if(dirNumber == 1){
        aiX += xSpeed
        if(aiX + aiXcenter == centerX && aiY + aiYcenter == centerY){
            xSpeed = 5
        }
    }

    else if(dirNumber == 2){
        aiX += xSpeed
        if(aiX + aiXcenter == centerX && aiY + aiYcenter == centerY){
            xSpeed = -5
        }
    }

    else if(dirNumber == 3){
        aiY += ySpeed
        if(aiX + aiXcenter == centerX && aiY + aiYcenter == centerY){
            ySpeed = 5
        }
    }
    
    else if(dirNumber == 4){
        aiY += ySpeed
        if(aiX + aiXcenter == centerX && aiY + aiYcenter == centerY){
            ySpeed = -5
        }
    }
}

function bounce(){
    if (aiX + aiSize >= cw){
        xSpeed = -xSpeed
    }
    else if (aiY + aiSize >= ch){
        ySpeed = -ySpeed
    }

    else if (aiX <= 0){
        xSpeed = -xSpeed
    }

    else if (aiY <= 0){
        ySpeed = -ySpeed
    }
}


function test(){
    table()
    aiPosition()
    decision()
    move()
    bounce()
}
setInterval(test, 1000/60)
