import kaplay from "kaplay"; 
import "kaplay/global"; // uncomment if you want to use without the k. prefix 
const k = kaplay(); k.setGravity(2000); 
k.loadRoot("./"); // A good idea for Itch.io publishing later 
k.loadSprite("bean", "sprites/bean.png");

const player = k.add([
    k.sprite("bean"), 
    k.pos(center()), 
    k.area(), 
    k.body(), 
    k.offscreen(),
])

const rect = k.add([
    k.rect(800, 800),
    k.pos(300, 800),
    k.area(),
    k.body({ isStatic: true}),
])

onKeyPress("space", () => {
    if (player.isGrounded()) {
        player.jump();
    }
});

onKeyPress("left", () => {
    player.move(100,0);
});
