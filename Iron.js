class Iron {
    constructor(x,y){
        var options = {
            'restitution':0.2,
            'friction':10,
            'density':0.8
        }
    
      this.body = Bodies.circle(x,y,15,options);
      World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill("red");
        ellipse(0, 0, this.width );
        pop();
    }

}