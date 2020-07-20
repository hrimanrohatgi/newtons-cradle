   class Bob{
 constructor(x,y){
var options ={
restituition:0.6,
isStatic:true,
friction:0.2,
density:1.2
}
this.body = Bodies.circle(x,y,10,options)
this.Width = 20;
this.Height = 20;
World.add(world,this.body)
 }   
 display(){
  var pos = this.body.position;
push();
translate(pos.x,pos.y);
ellipse(0,0,this.Width,this.Height);
pop();   
 }
};
