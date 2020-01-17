function clickjs() {
    var canvas = document.getElementById("canvas3");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var centerX = -100;
    var centerY = -100;
    var radX = radY = [10,15,20,25];
    var color = ["rgba(255, 255, 255,"];
    var randomangle = [];
    var randomspeed = [];
    var countX = 0;
  
    for (var i = 0; i < 4; i++) {
      randomspeed.push(Math.random() * (0.1 - 0.05) + 0.05);
      randomangle.push(Math.random() * (100 - 1) + 1);
    }
  
    render();
  
    function render() {
      ctx.clearRect(0, 0, width, height);
  
      for (var i = 0; i < 4; i++) {
  
        var x = (radX[i] + countX * (Math.floor(Math.random() * 3))) * Math.cos(randomangle[i]);
        var y = (radY[i] + countX * (Math.floor(Math.random() * 3))) * Math.sin(randomangle[i]);
        randomangle[i] += randomspeed[i];
        alpha = 1 - countX / 53;
  
        ctx.beginPath();
        ctx.arc(centerX + x, centerY + y, 5 + countX / 2, 0, Math.PI * 2, false);
        ctx.shadowBlur = 15;
        ctx.shadowColor = color[i] + alpha + ")";
        ctx.fillStyle = color[i] + alpha + ")";
        ctx.fill();
  
        function mousemove(e) {
          centerX = e.clientX;
          centerY = e.clientY;
        }
        document.onmousemove = mousemove;
  
      }
  
      requestAnimationFrame(render);
    }
};