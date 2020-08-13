class poly{
  
    constructor(x,y,radius) { 
      var options = {
        isStatic : false,
        'restitution':0.8,
        'friction':1,
        'density':1.0
        
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
      
     
      display () {
        
        push();
        fill("purple");
        imageMode(RADIUS);
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
      
    }
  }