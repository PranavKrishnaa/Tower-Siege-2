class Block{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 3){
        image(this.image,this.body.position.x, this.body.position.y,40,40);
    }
    else{
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,40,40);
    }
 }
}
