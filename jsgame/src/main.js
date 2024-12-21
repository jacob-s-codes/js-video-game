import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();
k.setGravity(2000);

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");

const player = k.add([
    k.sprite("bean"),
    k.pos(center()),
    k.area(),
    k.body(),
    k.offscreen(),
])      

k.add([
    k.rect(width(), 300),
    k.pos(0, 800),
    k.area(),
    k.body({ isStatic: true}),
])

let counter = 0;
let counterUI;
if (!player.isOffScreen) {
    counterUI = k.add([k.text("1")])
}

k.loop(1, () => {
    counter+=2;
    counterUI.text = counter;
    const speeds = [300, 500, 800];
    const currentSpeed = speeds[Math.floor(Math.random()*speeds.length)];

    k.add([
        k.rect(50, 50), 
        k.pos(600, 800),
        k.area(),
        k.body(),
        k.outline(),
        k.move(k.vec2(-1,0), currentSpeed),
    ])
})

player.onKeyPress("space", () => { 
    if (player.isGrounded()) {
        player.jump();
    }
});

player.onExitScreen(() => {
    k.add([k.text("You lost")]);
})

