var vorName = document.getElementById("vorname");
var nachName = document.getElementById("nachname");
var land = document.getElementById("land");

function ausgabe() {
    console.log(vorName.value, nachName.value + " from " + land.value);
}