class App

{
    runaApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
       
        this.tekenhuis(g,100,200);
        this.tekenhuis(g,100,300);
        this.tekenhuis(g,100,400);
        this.tekenhuis(g,100,500);
        this.tekenhuis(g,100,600);
        this.tekenhuis(g,400,200);
        this.tekenhuis(g,400,300);
        this.tekenhuis(g,400,400);
        this.tekenhuis(g,400,500);
        this.tekenhuis(g,400,600);

        this.tekenkerstboom(g,95,200);
        this.tekenkerstboom(g,95,300);
        this.tekenkerstboom(g,95,400);
        this.tekenkerstboom(g,95,500);
        this.tekenkerstboom(g,95,600);
        this.tekenkerstboom(g,500,200);
        this.tekenkerstboom(g,500,300);
        this.tekenkerstboom(g,500,400);
        this.tekenkerstboom(g,500,500);
        this.tekenkerstboom(g,500,600);
        this.tekenweg(g,100,200);
        this.tekenrotonde(g,100,200);
        this.tekensneeuwpop(g,100,100);
        this.tekenkerstboom(g,300,370);
        this.tekensneeuwpop(g,100,300);
        this.tekensneeuwpop(g,100,465);
        this.tekentext(g,100,100);
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
    
    tekenweg(g,x,y)
    {
        g.fillStyle = "#807A7A"
        g.fillRect(x+100,y+10,50,450)
        g.fillRect(x+100, y+0, 200,50)
        g.fillRect(x+250,y+10,50,450)
        
        g.fillStyle = "#2F682F"
        g.fillRect(x+150,y+40,100,450)

        g.fillStyle = "#FFFFFF"
        g.fillRect(x+150,y+15,20,10)
        g.fillRect(x+190,y+15,20,10)
        g.fillRect(x+230,y+15,20,10)

        g.fillStyle = "#FFFFFF"
        g.fillRect(x+120,y+20,10,20)
        g.fillRect(x+120,y+70,10,20)
        g.fillRect(x+120,y+120,10,20)
        g.fillRect(x+120,y+170,10,20)
        g.fillRect(x+120,y+220,10,20)
        g.fillRect(x+120,y+270,10,20)
        g.fillRect(x+120,y+320,10,20)
        g.fillRect(x+120,y+370,10,20)

        g.fillStyle = "#FFFFFF"
        g.fillRect(x+270,y+20,10,20)
        g.fillRect(x+270,y+70,10,20)
        g.fillRect(x+270,y+120,10,20)
        g.fillRect(x+270,y+170,10,20)
        g.fillRect(x+270,y+220,10,20)
        g.fillRect(x+270,y+270,10,20)
        g.fillRect(x+270,y+320,10,20)
        g.fillRect(x+270,y+370,10,20)
    }

    tekenrotonde(g,x,y)
    {
        g.fillStyle = "#807A7A"
        g.beginPath();
        g.arc(x+200,y+470,100,0,Math.PI*4);
        g.fill();

        g.fillStyle = "#2F682F"
        g.beginPath();
        g.arc(x+200,y+470,40,0,Math.PI*4);
        g.fill();
    }

    tekensneeuwpop(g,x,y)
    {

        let randomgetal = Math.random();
        console.log(randomgetal);

        g.fillStyle = "#FFFFFF"
        g.beginPath();
        g.arc(x+200,y+210,20,0,Math.PI*4);
        g.fill();
        g.stroke();

        g.fillStyle = "#FFFFFF"
        g.beginPath();
        g.arc(x+200,y+190,15,0,Math.PI*4);
        g.fill();
        g.stroke();

        g.fillStyle = "#000000"
        g.beginPath();
        g.arc(x+195,y+190,2,0,Math.PI*4);
        g.arc(x+205,y+190,2,0,Math.PI*4);
        g.fill();

        if( randomgetal > 0.5)
        {
            g.fillStyle = "#000000"
            g.beginPath();
            g.arc(x+200,y+195,5,3,0,Math.PI*2);
            g.stroke();
        }
        
        if(randomgetal < 0.5)
        {
            g.fillStyle = "#000000"
            g.beginPath();
            g.arc(x+200,y+200,5,0,3.2,4,Math.PI*2);
            g.stroke();
        }

        g.fillStyle = "#000000"
        g.beginPath();
        g.arc(x+200,y+210,2,0,Math.PI*4);
        g.arc(x+200,y+220,2,0,Math.PI*4);
        g.fill();

        g.fillStyle = "#000000"
        g.beginPath();
        g.moveTo(x+165,y+200)
        g.lineTo(x+180,y+205)
        g.moveTo(x+235,y+200)
        g.lineTo(x+220,y+205)
        g.stroke();

    }

    tekentext(g,x,y)
    {
        g.font = "50px Arial";
        g.fillStyle = "#E61E1E"
        g.fillText("Merry Xmas 2023", x+0,y+10);
    }
}

let app = new App();
app.runaApplication();

