class App

{
    runaApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let x = 400;
        let y = 20;
        this.tekenkerstboom(g,x,y);
       
    }

    tekenhuis(g,x,y)
    {
       
        let randomgetal = Math.random();
        console.log(randomgetal);

        g.beginPath();
        g.fillStyle = "Red";
        g.moveTo(x+280,y+100);
        g.lineTo(x+680,y+200);
        g.lineTo(x+580,y+400);
        g.lineTo(x+180,y+300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray";
        g.moveTo(x+180,y+300);
        g.lineTo(x+180,y+500);
        g.lineTo(x+580,y+600);
        g.lineTo(x+580,y+400);
        g.lineTo(x+180,y+300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillstyle = "gray"
        g.moveTo(x+580,y+400);
        g.lineTo(x+680,y+200);
        g.lineTo(x+780,y+300);
        g.lineTo(x+580,y+400);
        g.lineTo(x+580,y+600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillstyle = "gray";
        g.moveTo(x+580,y+600);
        g.lineTo(x+780,y+500);
        g.lineTo(x+780,y+300);
        g.lineTo(x+580,y+400);
        g.closePath();
        g.stroke();
        g.fill()
    
        if (randomgetal > 0.5)
        {
        
     
            g.beginPath();
            g.fillStyle = "#fffdb0";
            g.moveTo(x+205,465);
            g.lineTo(x+530,550);
            g.lineTo(x+530,450);
            g.lineTo(x+205,370);
            g.lineTo(x+205,450);
            g.closePath();
            g.stroke();
            g.fill()
        }

        if (randomgetal < 0.5)
        {
        
     
            g.beginPath();
            g.fillStyle = "#000000";
            g.moveTo(x+205,465);
            g.lineTo(x+530,550);
            g.lineTo(x+530,450);
            g.lineTo(x+205,370);
            g.lineTo(x+205,450);
            g.closePath();
            g.stroke();
            g.fill()
        }
    }

    tekenkerstboom(g,x,y)
    {   
        g.fillStyle = "#32bc45"; 
        g.beginPath();
        g.moveTo(x,y);
        g.lineTo(x-200,y+400);
        g.lineTo(x+200,y+400);
        g.closePath();
        g.stroke();
        g.fill()

        g.fillStyle = "#7c5904"
        g.beginPath();
        g.moveTo(x-50,y+400);
        g.lineTo(x-50,y+500);
        g.lineTo(x+50,y+500);
        g.lineTo(x+50,y+400);
        g.closePath();
        g.stroke();
        g.fill()
    }   
    

}

let app = new App();
app.runaApplication();

