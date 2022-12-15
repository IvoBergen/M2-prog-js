class App

{
    runaApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
       
        this.tekenhuis(g,100,100);
        this.tekenhuis(g,100,200);
        this.tekenhuis(g,100,300);
        this.tekenhuis(g,100,400);
        this.tekenhuis(g,100,500);
        this.tekenhuis(g,400,100);
        this.tekenhuis(g,400,200);
        this.tekenhuis(g,400,300);
        this.tekenhuis(g,400,400);
        this.tekenhuis(g,400,500);

        this.tekenkerstboom(g,95,100);
        this.tekenkerstboom(g,95,200);
        this.tekenkerstboom(g,95,300);
        this.tekenkerstboom(g,95,400);
        this.tekenkerstboom(g,95,500);
        this.tekenkerstboom(g,500,100);
        this.tekenkerstboom(g,500,200);
        this.tekenkerstboom(g,500,300);
        this.tekenkerstboom(g,500,400);
        this.tekenkerstboom(g,500,500);
    }

    tekenhuis(g,x,y)
    {
       
        let randomgetal = Math.random();
        console.log(randomgetal);

        g.beginPath();
        g.fillStyle = "Red";
        g.moveTo(x+28,y+10);
        g.lineTo(x+68,y+20);
        g.lineTo(x+58,y+40);
        g.lineTo(x+18,y+30);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray";
        g.moveTo(x+18,y+30);
        g.lineTo(x+18,y+50);
        g.lineTo(x+58,y+60);
        g.lineTo(x+58,y+40);
        g.lineTo(x+18,y+30);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillstyle = "gray"
        g.moveTo(x+58,y+40);
        g.lineTo(x+68,y+20);
        g.lineTo(x+78,y+30);
        g.lineTo(x+58,y+40);
        g.lineTo(x+58,y+60);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillstyle = "gray";
        g.moveTo(x+58,y+60);
        g.lineTo(x+78,y+50);
        g.lineTo(x+78,y+30);
        g.lineTo(x+58,y+40);
        g.closePath();
        g.stroke();
        g.fill()
    
        if (randomgetal > 0.5)
        {
        
     
            g.beginPath();
            g.fillStyle = "#fffdb0";
            g.moveTo(x+53,y+55);
            g.lineTo(x+53,y+45);
            g.lineTo(x+21,y+37);
            g.lineTo(x+21,y+45);
            g.closePath();
            g.stroke();
            g.fill()
        }

        if (randomgetal < 0.5)
        {
        
     
            g.beginPath();
            g.fillStyle = "#000000";
            g.moveTo(x+53,y+55);
            g.lineTo(x+53,y+45);
            g.lineTo(x+21,y+37);
            g.lineTo(x+21,y+45);
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
        g.lineTo(x-20,y+40);
        g.lineTo(x+20,y+40);
        g.closePath();
        g.stroke();
        g.fill()

        g.fillStyle = "#7c5904"
        g.beginPath();
        g.moveTo(x-5,y+40);
        g.lineTo(x-5,y+50);
        g.lineTo(x+5,y+50);
        g.lineTo(x+5,y+40);
        g.closePath();
        g.stroke();
        g.fill()

        g.fillStyle = "#FF00E6"
        g.beginPath();
        g.arc(x+-6,y+31,2,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.fillStyle = "#006DFF"
        g.beginPath();
        g.arc(x+10,y+30,2,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.fillStyle = "#F31520"
        g.beginPath();
        g.arc(x+-5,y+15,2,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.fillStyle = "#EEEA0B"
        g.beginPath();
        g.moveTo(x-13,y+25);
        g.lineTo(x-15,y+30);
        g.lineTo(x+10,y+20);
        g.lineTo(x+8,y+15);
        g.closePath();
        g.stroke();
        g.fill()

        g.fillStyle = "#FFFC00"
        g.beginPath();
        g.arc(x+0,y+2,5,0,Math.PI*4);
        g.stroke();
        g.fill();
        g.closePath();


    }   
    

}

let app = new App();
app.runaApplication();

