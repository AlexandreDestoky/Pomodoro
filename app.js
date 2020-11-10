//DOM
let minuteurTravail = document.querySelector(".tempsTravail");
let minuteurRepos = document.querySelector(".tempsRepos");
let btnCommencer = document.querySelector(".commencer");
let btnPause = document.querySelector(".pause");
let btnReset = document.querySelector(".reset");
let cycles = document.querySelector("#cycle");

//Temps
let checkInterval = false;
let tempsTravail = 4;
let tempsRepos = 3;
let pause = false;
let nbrCycles = 0;
cycles.innerText = nbrCycles;

minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
  tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
}`;
minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
  tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
}`;

btnCommencer.addEventListener("click", () => {
  if (checkInterval == false) {
    //on change checkInteval pour ne pas pouvoir activer plusieurs fois l'interval
    checkInterval = true;

    //On fait déjà une décrémentation pour ne pas attendre 1sec avant de commencer le timer
    tempsTravail--;
    minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
      tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
    }`;

    let timerTravail = setInterval(() => {
      //on ne fait le décompte que si la pause n'est pas active
      if (pause == false) {
        if (tempsTravail > 0) {
          tempsTravail--;
          minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
            tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
          }`;
        } else if (tempsRepos > 0) {
          tempsRepos--;
          minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
            tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
          }`;
        } else {
          nbrCycles++;
          cycles.innerText = nbrCycles;
          tempsTravail = 7;
          tempsRepos = 6;
          minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
            tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
          }`;
          minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
            tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
          }`;
          console.log("on monte le cycle");
        }
      }
    }, 1000);

    //Reset
    btnReset.addEventListener("click", () => {
      clearInterval(timerTravail);
      checkInterval = false;
      tempsTravail = 4;
      tempsRepos = 5;
      minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
        tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
      }`;
      minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
        tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
      }`;
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
