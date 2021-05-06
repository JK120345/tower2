class shoot{
   constructor(bodyA,pointB){
       var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.05,
           length:1

       }
       this.slng= Constraint.create(options);
       this.pointB=pointB;
       World.add(world,this.slng);
    }
attach(body){
this.slng.bodyA=body;
}
fly(){
    this.slng.bodyA=null;
}
   display(){
       if(this.slng.bodyA){
           var pointA =this.slng.bodyA.position;
           var pointB =this.pointB;

           strokeWeight(4);
           stroke("turquoise");
           line(pointA.x,pointA.y,pointB.x,pointB.y);

       }
   }
}