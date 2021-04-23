// ------------------------------------------------------------ CONSEGNA ---------------------------------------------------------------------
/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//----------------------------------------------- SVOLGIMENTO -----------------------------------------------------------------------------


// creo un oggetto studente
var alunno = {
    nome: "Carlo",
    cognome: "Allegri",
    eta: 20
};
/* console.log(studente); */




// stampo tutte le proprietà dell'oggetto ( studente ) con un ciclo for-in
for(var key in studente){
    /* console.log(key); */
}



// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: "Mariuccia",
        cognome: "Bruttina",
        eta: 28
    },
    {
        nome: "Marcellino",
        cognome: "PaneVino",
        eta: 67
    },
    {
        nome: "Igor",
        cognome: "Putin",
        eta: 3
    },
    {
        nome: "Fazzoletto",
        cognome: "DaNasino",
        eta: 56
    }
];


/* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */
for(var studente of studenti ){
    /* console.log('nome: '+ studente.nome + ' cognome: ' + studente.cognome); */
}



/* Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.  
*/
var newName = prompt('Inserire il nome');
var newCognome = prompt('Inserire il cognome');
var newEta = parseInt(prompt('Inserisci la tua età'));

studenti.push({
    nome: newName,
    cognome: newCognome,
    eta: newEta
});
console.log(studenti);


