/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {  
    constructor() {
        this.image = new Image();
        this.image.src = '../enemies/enemy2.png';
         this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width= this.spriteWidth / 2.5;
        this.height= this.spriteHeight / 2.5;
        this.x= Math.random() * (canvas.width - this.width);
        this.y= Math.random() * (canvas.height - this.height);
        this.frame = 2;
        this.flapSpeed = Math.floor(Math.random()* 3 + 1)
    }
    update() {
        this.x += Math.random() * 5 - 2.5;
        this.y+= Math.random() * 5 - 2.5;
        // sprite animation
        if(gameFrame % this.flapSpeed === 0){
            this.frame = this.frame > 4 ? 0 : this.frame + 1
        }
    }
    draw() {
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height)
    }
}

 for (let index = 0; index < numberOfEnemies; index++) {
    enemiesArray.push(new Enemy())    
 }
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemiesArray.forEach((enemy)=>{
        enemy.update();
        enemy.draw();
    })
    gameFrame++
    requestAnimationFrame(animate);

}
animate();