class rope{
constuctor(body1,body2,offsetX,offsetY){
     this.offsetX = offsetX;
     this.offsetY = offsetY;

     var options = {
      bodyA : body1,
      body2 : body2,
      pointB:{ x:this.offsetX ,y: this.offsetY}
     }
     this.rope = Matter.Constraint.create(options);
     World.add(world,this.rope);
    }

    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = point1.x;
        var Anchor1Y = point1.y;

        var Anchor2X = point2.x + offsetX;
        var Anchor2Y = point2.y + offsetY;

        line(Anchor1Y , anchor1X , Anchor2X , Anchor2Y);

    }
}