class App{
    runApplication(){
        console.log("Hello world");
        let stat1 = this.rollStat();
        console.log(stat1);
        let headerEl1 = document.getElementById('s1');
        headerEl1.innerHTML = stat1;
        let stat2 = this.rollStat();
        console.log(stat2);
        let headerEl2 = document.getElementById('s2');
        headerEl2.innerHTML = stat2;
        let stat3 = this.rollStat();
        console.log(stat3);
        let headerEl3 = document.getElementById('s3');
        headerEl3.innerHTML = stat3;
        let stat4 = this.rollStat();
        console.log(stat4);
        let headerEl4 = document.getElementById('s4');
        headerEl4.innerHTML = stat4;
        let stat5 = this.rollStat();
        console.log(stat5);
        let headerEl5 = document.getElementById('s5');
        headerEl5.innerHTML = stat5;
        let stat6 = this.rollStat();
        console.log(stat6);  
        let headerEl6 = document.getElementById('s6');
        headerEl6.innerHTML = stat6;
    }

    rollDice(){
        return Math.floor(Math.random() * 6+1);
    }

    rollStat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();
        let diceArray = [d1, d2, d3, d4]; 
        diceArray.sort();
        let som = diceArray[1] + diceArray[2] + diceArray[3]
        return som;

    }
}

let app = new App();
app.runApplication();