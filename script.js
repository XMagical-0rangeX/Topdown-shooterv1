//topdown shooter

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//global variables
let player = {
    x: 350,
    y: 550,
    w: 50,
    h: 50,
    xSpeed: 0,
    ySpeed: 0,
    speed: 5,
}
let move = {
    R: true,
    L: true,
    U: true,
    D: true,
}
let enemy = {
    x: 350,
    y: 150,
    w: 50,
    h: 50,
    xSpeed: 0,
    ySpeed: 0,
    speed: 5,
}
let goob = {
    x: 50, //(Math.random()*50)+50,
    y: 50//(Math.random()*50)+50,
}
let mouseX,mouseY,stopit = false, treal = false, rig = true,lef = true,dow = true,upp = true, num = 0;

//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {
    if (!stopit){
    //lodgic
    ctx.clearRect(0, 0, cnv.width, cnv.height); //draw filled square
    ctx.fillStyle = "grey";
    ctx.fillRect(300, 400, 50, 200);
    ctx.fillRect(400, 400, 50, 200);

    ctx.fillRect(300, 300, 150, 50);

    ctx.fillRect(0, 550, 300, 500);
    ctx.fillRect(400, 550, 800, 50);
    ctx.fillRect(0, 0, 800, 50);
    ctx.fillRect(0, 0, 50, 600);
    ctx.fillRect(750, 0, 50, 600);

    if (player.x >= 350 && player.x <= 400 && player.y >= 400 ||
         player.x >= 250 && player.x <= 350 && player.y >=400 ||
         player.x >= 250 && player.x < 450 && player.y < 350 && player.y >= 300){
        move.R = false;
    } else {
        move.R = true;
    }
    if (player.x >= 400 && player.x <= 450 && player.y >= 400 ||
        player.x >= 300 && player.x <= 350 && player.y >=400||
        player.x >= 300 && player.x <= 450 && player.y < 350 && player.y >= 300){
       move.L = false;
   } else {
       move.L = true;
   }
   if (player.x >= 400 && player.x < 450 && player.y >=350 ||
    player.x >= 300 && player.x < 350 && player.y >=350 || player.y == 550 ||
     player.x < 350 && player.y === 500 || player.x > 400 && player.y == 500||
     player.y < 350 && player.y >= 250 && player.x >= 300 && player.x <=400){
        move.D = false;
    } else {
        move.D = true;
    }
    if (player.y <= 350 && player.y >= 350 && player.x >= 300 && player.x <=400){
        move.U = false;
    } else {
        move.U = true;
    }
    //move by xspeed and yspeed
    player.x += player.xSpeed;
    player.y += player.ySpeed;

    //EMEMY?
    

    if (player.x == goob.x && player.y == goob.y) {
        //goob.x = Math.random()*700+50;
        //goob.y = Math.random()*500+50;
        
       goob.x = Math.floor(Math.random()*14)*50 +50;
       goob.y = Math.floor(Math.random()*10)*50 +50;
       num++;
    }
    if (goob.x >= 300 && goob.x <= 400 && goob.y >= 300){
        goob.x = Math.floor(Math.random()*14)*50 +50;
       goob.y = Math.floor(Math.random()*10)*50 +50;
    }



    if ( enemy.x >= 300 && enemy.x <= 400 && enemy.y >= 250){
        dow = false;
    } else {
        dow = true;
    } 
    if ( enemy.x === 250 && enemy.y >= 250){
        rig = false;
    } else {
        rig = true;
    }
    if ( enemy.x === 450 && enemy.y >= 250){
        lef = false;
    } else {
        lef = true;
    }
    //GOOB
    ctx.fillStyle = "purple";
    ctx.fillRect(goob.x,goob.y,50,50);

    ctx.font = "25px Comic Sans Ms";
    ctx.fillStyle = "white";
    ctx.fillText(num, 25,35,100);


    ctx.fillStyle = "orange";
    ctx.fillRect(player.x, player.y, player.w, player.h);

    ctx.fillStyle = "green";
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);

}
    if (player.y == enemy.y && player.x == enemy.x ){
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,cnv.width,cnv.height);
        ctx.font = "42px Comic Sans Ms";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over", 200,250,400);
        stopit = true;
        player.x = 350;
        enemy.x =350;
        player.y = 550;
        enemy.y = 150;
        ctx.fillStyle = "white";
        ctx.fillRect(500,300,200,200);
        ctx.fillStyle = "black";
        ctx.fillText("Try again?", 500,400);
    }
    if (treal){
        ctx.fillStyle = "teal";
        ctx.fillRect(0,0,50,50);
    }
    
    requestAnimationFrame(loop);
}

// document event stuff
document.addEventListener("keydown", keydo);
document.addEventListener("mousedown", mousedownH);
document.addEventListener("mousemove", mousemoveHandler);


function mousemoveHandler(event) {
    //update mousex and mousey
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

let jumblia = Math.random();

function keydo(event){
    let go = false;
    //STEP MOVEMENT
    if(!event.repeat) {
        //step movement
        if (event.code == "ArrowRight" && player.x < 700 && move.R ) {
        player.x += 50;
        jumblia = Math.random();
            go = true;
        } else if (event.code == "ArrowLeft"  && player.x > 50 && move.L) {
        player.x += -50;
        jumblia = Math.random();
        go = true;

        } else if (event.code == "ArrowUp" && player.y > 50 && move.U) {
        player.y += -50;
        jumblia = Math.random();
        go = true;

        } else if (event.code == "ArrowDown" && move.D) {
        player.y += 50;
        jumblia = Math.random();
        go = true;

        }
        if (go){
    if (jumblia < 0.25 && enemy.x < 700 && rig){
        enemy.x += 50;
    } else if (jumblia < 0.50 && enemy.x > 50 && lef){
        enemy.x -= 50;
    } else if (jumblia < 0.75 && enemy.y < 500 && dow){
        enemy.y += 50;
    } else if (enemy.y > 50 && upp){
        enemy.y -= 50;

    }
    go = false}
    
}
    
}

function mousedownH (){
    //treal = true;
   
    if (stopit) {
        if (mouseX >= 500 && mouseX <= 700 && mouseY >= 300 && mouseY <= 500){
            stopit = false;
        } 
    }
} 





