// variabile globale per la transazione 
var containerHidden = document.getElementById("container-hidden").classList;
document.getElementById("calcola").addEventListener("click", function (e) {
  // var in input dall'utente
  var nome = document.getElementById("input-user-name").value;
  var sconto = document.getElementById("input-user-sconto").value;
  var km = document.getElementById("input-user-km").value;
  //var output biglietto
  var codiceTreno = Math.floor(Math.random() * (100000 - 90000)) + 90000;
  var carrozza = Math.floor(Math.random() * 12) + 1;
  var prezzo = 0.21 * km;
  // controllo sui campi inseriti
  //controllo nome
  var letters = /^[A-Za-z]+$/;
  var boolCheck;
  if(nome.match(letters)){
        boolCheck = true;
  }else{
        boolCheck = false;
  }
  if (boolCheck == false){
        alert('il nome inserito non e valido')
        location.reload();
  }
  // controllo km per evitare che vengano inseriti valori negativi
  if (km < 1){
      alert('inserire i km')
      location.reload();
  }
  //calcolo prezzo
  if (sconto == "min") {
    prezzo -= (20 * prezzo) / 100;
  } else if (sconto == "silver") {
    prezzo -= (40 * prezzo) / 100;
  }
  /// dom manipulation
  containerHidden.add("show");
  document.getElementById("nome-user").innerHTML = nome;
  document.getElementById("sconto-user").innerHTML = sconto;
  document.getElementById("carozza").innerHTML = carrozza;
  document.getElementById("codice").innerHTML = codiceTreno;
  document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + '€';
  e.preventDefault();
});

// funzione per il tasto annulla 
document.getElementById("annulla").addEventListener("click", function () {
  containerHidden.remove("show");
});
