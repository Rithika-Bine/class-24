class Bird{
    constructor(x,y){
        var options={
            restitution:0.1
          }
          this.body=Bodies.rectangle(x,y,70,70,options);
          this.width=70;
          this.height=70;
          World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        stroke("green");
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}

