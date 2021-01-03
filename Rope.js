class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY=offsetY;
        
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = {x:offsetX,y:offsetY};
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = {x:this.chain.bodyB.position.x+this.pointB.x,y:this.chain.bodyB.position.y+this.pointB.y}

        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
    }

}