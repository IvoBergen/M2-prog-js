class App

{
    runaApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let randomgetal = Math.random();
        console.log(randomgetal);
        g.beginPath()
        g.fillStyle = "Red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillstyle = "gray"
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillstyle = "gray";
        g.moveTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()
        
        if (randomgetal > 0.5)
        {
            
         
        g.beginPath();
        g.fillStyle = "#fffdb0";
        g.moveTo(225,465);
        g.lineTo(550,550);
        g.lineTo(550,450);
        g.lineTo(225,370);
        g.lineTo(225,450);
        g.closePath();
        g.stroke();
        g.fill()
        }

        if (randomgetal < 0.5)
        {
            
         
        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(225,465);
        g.lineTo(550,550);
        g.lineTo(550,450);
        g.lineTo(225,370);
        g.lineTo(225,450);
        g.closePath();
        g.stroke();
        g.fill()
        }
        
        console.log(canvas);
    }
}

let app = new App();
app.runaApplication();