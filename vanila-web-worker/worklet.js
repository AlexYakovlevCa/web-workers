
registerPaint('myGradient', class {
    paint(ctx, size, properties) {
        console.log(size,ctx,properties)
      var gradient = ctx.createLinearGradient(0, 0, 0, size.height / 3);
  
      gradient.addColorStop(0, "black");
      gradient.addColorStop(0.7, "rgb(210, 210, 210)");
      gradient.addColorStop(0.8, "rgb(230, 230, 230)");
      gradient.addColorStop(1, "white");
  
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size.width, size.height / 3);
    }
    
  });