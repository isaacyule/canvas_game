const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const start = document.getElementById("start");

const component = (width, height, color, x, y) => {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);

}

const startGame = () => {
  ctx.clearRect(0, 0, 1600, 900);
  component(30, 30, "blue", 100, 100);
}

start.addEventListener("click", startGame);
