console.log("java ok wakka");

// dichiarazione delle variabili
let KmPercorso = parseInt(prompt("quanti kilometri farai?"));
let Eta = parseInt(prompt("qual'è la tua età?"));
let PrezzoViaggio;

console.log(KmPercorso);

PrezzoViaggio = KmPercorso * 0.21;

console.log(PrezzoViaggio);

if ((KmPercorso == NaN) | (Eta == NaN)) {
  console.log(" ricarica e inserisci valori numerici ");
} else {
  if (Eta < 18) {
    PrezzoViaggio = PrezzoViaggio - (PrezzoViaggio * 20) / 100;
  } else if (Eta >= 65) {
    PrezzoViaggio = PrezzoViaggio - (PrezzoViaggio * 40) / 100;
  }
}
console.log(PrezzoViaggio);

PrezzoViaggio = PrezzoViaggio.toFixed(2);

console.log(PrezzoViaggio);

document.getElementById("message-to-read").innerHTML = PrezzoViaggio;
