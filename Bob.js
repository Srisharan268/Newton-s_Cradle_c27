class Bob{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':0,
            'density':0.9,
        }

        
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;

        World.add(world,this.body);
    
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(255);
        circle(0,0,this.radius*2);
        pop();
    }
}