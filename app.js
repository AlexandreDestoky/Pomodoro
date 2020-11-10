//DOM
let minuteurTravail = document.querySelector(".tempsTravail"); //AffichageTravail
let minuteurRepos = document.querySelector(".tempsRepos"); //AffichagePause
let btnCommencer = document.querySelector(".commencer"); //btnGo
let btnPause = document.querySelector(".pause");
let btnReset = document.querySelector(".reset");
let cycles = document.querySelector("#cycle");
//Temps
// let mTravail = 0;
// let sTravail = 12;
// let mRepos = 0;
// let sRepos = 12;
let tempsTravail = 1800;
let tempsRepos = 300;
let pause = false;
let nbrCycles = 0;
cycles.innerText = nbrCycles;

minuteurTravail.innerText = `${Math.trunc(tempsTravail / 60)}:${
  tempsTravail % 60 < 10 ? `0${tempsTravail % 60}` : tempsTravail % 60
}`;
minuteurRepos.innerText = `${Math.trunc(tempsRepos / 60)}:${
  tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
}`;

// btnCommencer.addEventListener("click", () => {
//   let timerTravail = setInterval(decompteTravail, 1000);
// });

// let decompteTravail = () => {
//   if (mTravail == 0 && sTravail == 0) {
//     let timerRepos = setInterval(decompteRepos, 1000);
//     clearInterval(timerTravail);
//   } else {
//     sTravail--;
//     if (sTravail < 0) {
//       sTravail = 59;
//       mTravail--;
//     }

//     if (sTravail < 10) {
//       tempsTravail.innerText = mTravail + ":0" + sTravail;
//     } else {
//       tempsTravail.innerText = mTravail + ":" + sTravail;
//     }
//   }
// };

// let decompteRepos = () => {
//   if (mRepos == 0 && sRepos == 0) {
//     let timerTravail = setInterval(decompteTravail, 1000);
//     clearInterval(timerRepos);
//   } else {
//     sRepos--;
//     if (sRepos < 0) {
//       sRepos = 59;
//       mRepos--;
//     }

//     if (sRepos < 10) {
//       tempsRepos.innerText = mRepos + ":0" + sRepos;
//     } else {
//       tempsRepos.innerText = mRepos + ":" + sRepos;
//     }
//   }
// }
