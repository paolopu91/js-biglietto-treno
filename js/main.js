let kmDaFare = prompt ("Quanti km deve percorrere?");
let etaViaggiatore = prompt ("Quale è la sua età?");
let prezzo = 0.21;

console.log(kmDaFare * prezzo);

console.log(kmDaFare, etaViaggiatore);

if (isNaN(etaViaggiatore) && isNaN(kmDaFare)) {
    alert("Inserire i valori giusti all'interno dei campi")
}

if (etaViaggiatore < 18 ){
    let prezzo20 = prezzo * 0.20
    console.log("il prezzo del biglietto sarà scontato del 20%")
} else if (etaViaggiatore > 65) {
    let prezzo40 = prezzo * 0.40
    console.log("il prezzo del biglietto sarà scontato del 40%")
}

let costoTotale = prezzo * kmDaFare;
costoTotale = costoTotale.toFixed(2)

const liEtà = document.getElementById("etaViaggiatore")
const liKm = document.getElementById("kmDaFare")
const liCosto = document.getElementById("costoTotale")

// eta = (`${etaViaggiatore}`)
// km = (`${kmDaFare}`)
// costo = (`${costoTotale}`)
// etaViaggiatore.innerHTML = "<div>Età del viaggiatore :"+eta+"</div>"
// kmDaFare.innerHTML = "<div>Km che dovrà effettuare :"+km+"</div>"
// costoTotale.innerHTML = "<div>Prezzo del Biglietto :"+costo+"</div>"

                                                    
