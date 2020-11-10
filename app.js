//DOM
let minuteurTravail = document.querySelector(".tempsTravail");
let minuteurRepos = document.querySelector(".tempsRepos");
let btnCommencer = document.querySelector(".commencer");
let btnPause = document.querySelector(".pause");
let btnReset = document.querySelector(".reset");
let cycles = document.querySelector("#cycle");

//Temps
let checkInterval = false;
let tempsTravail = 1500;
let tempsRepos = 300;
let pause = false;
let nbrCycles = 0;
cycles.innerText = nbrCycles;

//FONCTIONs DE FORMATAGE
let formatageTravail = () => {
  minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
    tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
  }`;
};

let formatageRepos = () => {
  minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
    tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
  }`;
};

//On appelle les fct de formatage au début pour avoir du contenu présent au début du lancement de l'app
formatageTravail();
formatageRepos();

//Lancement de l'APP
btnCommencer.addEventListener("click", () => {
  if (checkInterval == false) {
    //on change checkInteval pour ne pas pouvoir activer plusieurs fois l'interval
    checkInterval = true;

    //On fait déjà une décrémentation pour ne pas attendre 1sec avant de commencer le timer
    tempsTravail--;
    formatageTravail();

    let timerTravail = setInterval(() => {
      //on ne fait le décompte que si la pause n'est pas active
      if (pause == false) {
        if (tempsTravail > 0) {
          tempsTravail--;
          formatageTravail();
        } else if (tempsRepos > 0) {
          tempsRepos--;
          formatageRepos();
        } else {
          nbrCycles++;
          cycles.innerText = nbrCycles;
          tempsTravail = 1500;
          tempsRepos = 300;
          formatageTravail();
          formatageRepos();
          console.log("on monte le cycle");
        }
      }
    }, 1000);

    //Reset
    btnReset.addEventListener("click", () => {
      clearInterval(timerTravail);
      checkInterval = false;
      tempsTravail = 1500;
      tempsRepos = 300;
      formatageTravail();
      formatageRepos();
      cycles.innerText = 0;
    });
  } else {
    return;
  }
});

//Play/Pause
btnPause.addEventListener("click", () => {
  pause = !pause;
  btnPause.innerText = pause ? "Play" : "Pause";
});
