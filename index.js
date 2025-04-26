const canvas = document.getElementById('fondo_estrellas');
const ctx = canvas.getContext('2d');

function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

ajustarCanvas();
window.addEventListener('resize', ajustarCanvas);

let estrellas = [];

for (let i = 0; i < 300; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    velocity: Math.random() * 0.5 + 0.2,
  });
}

function animar() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (let estrella of estrellas) {
    ctx.beginPath();
    ctx.arc(estrella.x, estrella.y, estrella.radius, 0, Math.PI * 2);
    ctx.fill();

    estrella.y += estrella.velocity;
    if (estrella.y > canvas.height) {
      estrella.y = 0;
      estrella.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animar);
}

animar();
