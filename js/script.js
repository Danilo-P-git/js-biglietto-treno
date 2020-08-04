var chilometri = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
var etaPasseggero = parseInt(prompt("Quanti hanni hai?"));
var scontoMinorenne = parseInt((chilometri *0.21) *20 / 100);

if (isNaN(etaPasseggero)) {
  alert("Mi sa che devi metterci un numero")
} else if (etaPasseggero < 18) {
  var totaleMinorenneConSconto = (chilometri * 0.21) - scontoMinorenne;
  console.log(totaleMinorenneConSconto);
}
