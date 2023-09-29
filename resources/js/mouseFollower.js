const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

ball.style.transformOrigin = "50% 50%";

window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function updatePosition() {
    // Adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, 1);

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    ball.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    requestAnimationFrame(updatePosition);
}

requestAnimationFrame(updatePosition);


document.querySelector('.button').onmousemove = function (e) {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
}
