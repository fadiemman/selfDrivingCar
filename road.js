class Road {
    constructor(x, width, laneCounter=3) {
        this.x = x;
        this.width = width;
        this.laneCounter = laneCounter;


        this.left = x - width / 2;
        this.right = y + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.laneCounter; i++) {

        }

        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.strokeStyle();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.strokeStyle();
    }

}

