

class App{
    runApplication()
    {
        let title = document.getElementById("newstitle");
        let randomgetal = Math.random();
        console.log(randomgetal);

        if (randomgetal == 0)
        {
            console.log("het getal is 0")
            title.style.backgroundColor = "#42c829";
        }

        else if (randomgetal < 0.2)
        {
            console.log("Het getal is kleiner dan 0.2")
            title.style.backgroundColor = "#c82f29"
        }
        
        else if (randomgetal >= 0.2 && randomgetal <= 0.6 )
        {
            console.log("het getal zitten tussen 0.2 en 0.6");
            title.style.backgroundColor = "#2c29c8"
        }

        else if (randomgetal => 0.6)
        {
            console.log("Het getal is groter dan 0.6");
            title.style.backgroundColor = "#be29c8"
        }
    }
}

let app = new App();
app.runApplication();


// je kan het oproepen door het id van de html tag op te roepen 