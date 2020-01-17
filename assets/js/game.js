function pGame() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","gameCanvas");
    canvas.setAttribute("width",width);
    canvas.setAttribute("height",height);
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    let state = {
        position: {
            x: width/2,
            y: height/2
        },
        movement: {
            x:0,
            y:0
        },
        rotation:0,
        pressedKeys: {
            left: false,
            right: false,
            up: false,
            down: false,
            space: false
        }
    }
    let keyMap = {
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }
    function keydown(event) {
        let key = keyMap[event.keyCode]
        state.pressedKeys[key] = true;
    }
    function keyup(event) {
        let key = keyMap[event.keyCode]
        state.pressedKeys[key] = false;
    }
    window.addEventListener("keydown",keydown,false);
    window.addEventListener("keyup",keyup,false);

    function update(progress) {
        let p = progress/16;
        updateRotation(p);
        updateMovement(p);
        updatePosition(p);
        updateShooting(p);
    }
    function updateRotation(p) { 
        if (state.pressedKeys.left) {
            state.rotation -= p*5;
        } else if (state.pressedKeys.right) {
            state.rotation += p*5;
        }
    }
    function updateMovement(p) {
        let dV = {
            x: p*0.3*Math.cos((state.rotation-90)*(Math.PI/180)),
            y: p*0.3*Math.sin((state.rotation-90)*(Math.PI/180))
        }
        if (state.pressedKeys.up) {
            state.movement.x += dV.x;
            state.movement.y += dV.y;
        } else if (state.pressedKeys.down) {
            state.movement.x -= dV.x;
            state.movement.y -= dV.y;
        }
        if (state.movement.x > 5) {
            state.movement.x = 5;
        } else if (state.movement.x < -5) {
            state.movement.x = -5;
        }
        if (state.movement.y > 5) {
            state.movement.y = 5;
        } else if (state.movement.y < -5) {
            state.movement.y = -5;
        }
    }
    function updatePosition(p) {
        state.position.x += state.movement.x;
        state.position.y += state.movement.y;
        if (state.position.x > width) {
            state.position.x -= width;
        } else if (state.position.x < 0) {
            state.position.x += width;
        }
        if (state.position.y > height) {
            state.position.y -= height;
        } else if (state.position.y < 0) {
            state.position.y += height;
        }
    }
    function updateShooting(p) {
        if (state.pressedKeys.space) {
            state.shooting
        }
    }
    // function shoot() {
    //     ctx.beginPath();
    //     ctx.arc(state.position.x,state.position.y,3,0,Math.PI*2,true);
    //     ctx.fill();
    //     ctx.moveTo(state.position.x+10,state.position.y+10);
    //     ctx.beginPath();
    //     ctx.arc(state.position.x+10,state.position.y+10,3,0,Math.PI*2,true);
    //     ctx.fill();
    // }
    function draw() {
        ctx.clearRect(0,0,width,height);
        ctx.save();
        ctx.translate(state.position.x, state.position.y);
        ctx.rotate((Math.PI/180) * state.rotation);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath ();
        ctx.moveTo(0, 0);
        ctx.lineTo(10, 10);
        ctx.lineTo(0, -20);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
    function loop(timestamp) {
        let progress = timestamp - lastRender;
        update(progress);
        draw();
        // shoot();
        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }
    let lastRender = 0;
    window.requestAnimationFrame(loop);
}