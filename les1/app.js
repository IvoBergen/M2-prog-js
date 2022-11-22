class App

{
    runaApplication()
    {
        console.log("Hello World");
        let appnaam = "3d stoelendans game";
        let versienummer = 0.2;
        let versiedatum = 22;
        let autheur = "ivo";
        let copyright = "hans games"
        let distibuteur = "epic game"
        let darkmode = true;
        console.log(appnaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distibuteur);
        console.log(darkmode);
    }
}

let app = new App();
app.runaApplication();