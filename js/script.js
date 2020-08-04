// Chiedo il nome del passeggero
var nomePasseggero = prompt("Come ti chiami?")
// Chiedo i Km da percorrere
var chilometri = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
// Chiedo l'età
var etaPasseggero = parseInt(prompt("Quanti hanni hai?"));
// indico una variabile con lo sconto minorenne
var scontoMinorenne = (chilometri *0.21) *20 / 100;
// indico una variabile con lo sconto terza eta
var scontoTerzaEta = (chilometri *0.21) *60 / 100;
// nella if calcolo il totale del prezzo
if (isNaN(etaPasseggero)) {
  alert("Mi sa che devi metterci un numero")
} else if (etaPasseggero <= 17) {
  var totaleMinorenneConSconto = (chilometri * 0.21) - scontoMinorenne;
  document.getElementById('prezzo').innerHTML = Math.round(totaleMinorenneConSconto * 100) / 100;
} else if (etaPasseggero >= 65) {
  var totaleTerzaEtaConSconto = (chilometri*0.21) - scontoTerzaEta;
  document.getElementById('prezzo').innerHTML = Math.round(totaleTerzaEtaConSconto * 100) / 100;
} else {
  var totaleNoSconto = chilometri * 0.21;
  document.getElementById('prezzo').innerHTML = Math.round(totaleNoSconto * 100) / 100;
}
// Stampo il nome sulla pagina
document.getElementById('nome').innerHTML = nomePasseggero;
