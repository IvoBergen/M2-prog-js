class App

{
    runaApplication()
    {
        let dino1 = new Dino("trex", true, 5,);
        console.log(dino1)
        let dino2 = new Dino("Raptor",true,10,);
        console.log(dino2)
        let dino3 = new Dino("ankylosaurus",false,7,);
        console.log(dino3)
        let plant = new Plant("gras")
        
        dino3.eetPlant(plant)
        dino1.eetDino(dino3)
        
    }


}
class Dino
{   
    constructor(naam,vleeseter,leeftijd,)
    {
    this.naam = naam;
    this.vleeseter = vleeseter;
    this.leeftijd = leeftijd;
    this.leeft =  true;
    this.honger = true;
    }

    eetDino(dino)
    {
        console.log(this.naam + " eet de dino " + dino.naam)
        dino.leeft = false;
    }

    eetPlant(plant)
    {
        console.log(this.naam + " eet de plant: " + plant.naam)
        
    }
    
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}



let app = new App();
app.runaApplication();