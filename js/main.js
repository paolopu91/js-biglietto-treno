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
    prezzo -= prezzo20
    console.log("il prezzo del biglietto sarà scontato del 20%")
} else if (etaViaggiatore > 65) {
    let prezzo40 = prezzo * 0.40
    prezzo -= prezzo40
    console.log("il prezzo del biglietto sarà scontato del 40%")
}

let costoTotale = prezzo * kmDaFare;
costoTotale = costoTotale.toFixed(2)

const spanNomeUtente = document.getElementById("nome-utente")
const spanKmViaggio = document.getElementById("km-travel")
const spanPrezzoViaggio = document.getElementById("prezzo-totale")

spanNomeUtente.innerHTML = `<strong class="text-red">${etaViaggiatore} <span> età viaggiatore</span> </strong><br>`
spanKmViaggio.innerHTML = `<strong class="text-blu">${kmDaFare} <span> km da fare</span> </strong><br>` 
spanPrezzoViaggio.innerHTML = `<strong class="text-green">${costoTotale}<span>€ totale biglietto</span></strong>`


// eta = (`${etaViaggiatore}`)
// km = (`${kmDaFare}`)
// costo = (`${costoTotale}`)

// var eta = document.getElementById("etaViaggiatore")
// var km = document.getElementById("kmDaFare")
// var price = document.getElementById("costoTotale")

// etaViaggiatore.innerHTML = "<div>Età del viaggiatore :"+eta+"</div>"
// kmDaFare.innerHTML = "<div>Km che dovrà effettuare :"+km+"</div>"
// costoTotale.innerHTML = "<div>Prezzo del Biglietto :"+costo+"</div>"

                                                    
