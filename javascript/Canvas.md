# Canvas

    <canvas id='ctx'/>

    used for rendering images, shapes, texts ... fast rerender, running on gpu
    used for games, image editors, timeline

    width and height need to be specified

        const canvas = window.getElementById('ctx');
        canvas.height = 500;
        canvas.width = 600;

        const ctx = canvas.getContext('2d');

    context is used for rendering

    u can call methods like:
        - ctx.fillRect(x, y, width, height)
        - ctx.drawImage(img, ...);

        - ctx.translate();  // move the center of canvas
        - ctx.scale();      // scale the canvas
        - ctx.rotate();     // rotate the canvas

        - ctx.save();        // will save the current state of configuration
        - ctx.restore();    // returns to the previous saved state

        - ctx.beginPath();
        - ctx.moveTo();
        - ctx.
