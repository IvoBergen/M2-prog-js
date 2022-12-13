class App

{
    scream()
    {
        console.log("Mario!!");
    }

    laugh()
    {
        let laughing = "BWAHAHA!";
        return laughing;
    }

    telOp(a,b)
    {
        console.log(a*b);
        this.function();
    }

    function()
    {
        console.log("Je voert een functie uit!");
    }
}

let app = new App();
app.scream();
console.log(app.laugh());
app.telOp(4,6);