class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
      //  this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
   
   show(){
       // image(this.sling1,200,20);
         strokeWeight(7);
                line(this.sling.bodyA.position.x , this.sling.bodyA.position.y, this.sling.bodyB.position.x , this.sling.bodyB.position.y);
               
    }
    
}