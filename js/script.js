var nomePasseggero = prompt("Come ti chiami?")

var chilometri = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
var etaPasseggero = parseInt(prompt("Quanti hanni hai?"));
var scontoMinorenne = parseInt((chilometri *0.21) *20 / 100);
var scontoTerzaEta = parseInt((chilometri *0.21) *60 / 100);
if (isNaN(etaPasseggero)) {
  alert("Mi sa che devi metterci un numero")
} else if (etaPasseggero <= 17) {
  var totaleMinorenneConSconto = (chilometri * 0.21) - scontoMinorenne;
  document.getElementById('prezzo').innerHTML = totaleMinorenneConSconto;
} else if (etaPasseggero >= 65) {
  var totaleTerzaEtaConSconto = (chilometri*0.21) - scontoTerzaEta;
  document.getElementById('prezzo').innerHTML = totaleTerzaEtaConSconto;
} else {
  var totaleNoSconto = chilometri * 0.21;
  document.getElementById('prezzo').innerHTML = totaleNoSconto;
}
document.getElementById('prezzo').innerHTML = prezzoPasseggero;
