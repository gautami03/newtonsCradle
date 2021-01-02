class Bob {
   
    constructor(x,y,radius) {
      this.image = loadImage("images/paper.png");
      
      var options = {
          
            'restitution':0.8,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
          

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
 
        pop();

       
      }

    
  
}