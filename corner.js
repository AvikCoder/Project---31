class Corner {
    constructor(x,y,width,heigth){
        var op = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,heigth,op);
        this.width = width;
        this.heigth = heigth;
        World.add(world,this.body)
    }
    show(){
        var pos = this.body.position;
        fill(255,20,20);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.heigth);
    }
}