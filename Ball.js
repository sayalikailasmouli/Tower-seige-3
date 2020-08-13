class ball{

    constructor(x,y,r){
      var options={
       resitution:0.3,
       isStatic:false,
       friction:0.5,
       density:0.3
      }
      
      this.r=r
      this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    }

    fly(){
        this.SlingShot.bodyA=null
      }   
  
     display(){
     var position = this.body.position
     push()
     translate(position.x,position.y);
     fill(0, 255, 255);
     strokeWeight(5);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
    pop()
     }
  
  }
  
