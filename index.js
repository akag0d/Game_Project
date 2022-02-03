const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const bulletController = new BulletController(canvas);
const player = new Player(
  canvas.width / 2.2,
  canvas.height / 1.3,
  bulletController
);

const enemies = [
  new Enemy(50, 20, "green", 40),
  new Enemy(150, 20, "red", 40),
  new Enemy(250, 20, "blue", 40),
  new Enemy(350, 20, "pink", 40),
  new Enemy(450, 20, "gold", 40),
  new Enemy(50, 100, "green", 30),
  new Enemy(150, 100, "red", 30),
  new Enemy(250, 100, "blue", 30),
  new Enemy(350, 100, "pink", 30),
  new Enemy(450, 100, "gold", 30),
  new Enemy(50, 180, "green", 20),
  new Enemy(150, 180, "red", 20),
  new Enemy(250, 180, "blue", 20),
  new Enemy(350, 180, "pink", 20),
  new Enemy(450, 180, "gold", 20),
];

function gameLoop() {
  setCommonStyle();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  player.draw(ctx);
  enemies.forEach((enemy) => {
    if (bulletController.collideWith(enemy)) {
      if (enemy.health <= 0) {
        const index = enemies.indexOf(enemy);
        enemies.splice(index, 1);
      }
    } else {
      enemy.draw(ctx);
    }
  });
}

function setCommonStyle() {
  ctx.shadowColor = "#d53";
  ctx.shadowBlur = 20;
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 5;
}
setInterval(gameLoop, 1000 / 60);