class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction: 0.0,
          restitution: 0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      //this.score = 0;
      World.add(world, this.body);
    }

    display(){
      if (this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(164, 0, 219));
        rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -105 ){
        score++;
      }
    }
    
}