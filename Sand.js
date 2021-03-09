class Sand {
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':0.1
        }
    
      this.body = Bodies.circle(x,y,1,options);
      World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill("white");
        ellipse(0, 0, this.width );
        pop();
    }

}