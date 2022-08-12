/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

const enemyImage = new Image();
enemyImage.src = 'enemies/enemy1.png';
let gameFrame = 0;

class Enemy {  
    constructor() {
        this.x= Math.random() * canvas.width;
        this.y= Math.random() * canvas.height;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width= this.spriteWidth / 2.5;
        this.height= this.spriteHeight / 2.5;
        this.frame = 2;
        this.flapSpeed = Math.floor(Math.random()* 3 +1)
    }
    update() {
        this.x += this.speed;
        this.y+= this.speed;
        // sprite animation
        if(gameFrame % this.flapSpeed === 0){
            this.frame = this.frame > 4 ? 0 : this.frame + 1
        }
    }
    draw() {
        ctx.drawImage(enemyImage,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,
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