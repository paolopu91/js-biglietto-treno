const kmDaFare = prompt ("Quanti km deve percorrere?");
const etaViaggiatore = prompt ("Quale è la sua età?");
const prezzoBiglietto = kmDaFare * 0.21

console.log(kmDaFare * 0.21)

console.log(kmDaFare, etaViaggiatore);

if (etaViaggiatore < 18 ){
    console.log("il prezzo del biglietto sarà scontato del 20%")
} else if (etaViaggiatore > 65) {
    console.log("il prezzo del biglietto sarà scontato del 40%")
}
