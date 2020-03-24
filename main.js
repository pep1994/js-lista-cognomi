// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.

// Scrivi anche la posizione della lista in cui il nuovo utente si trova


var userSurname, listSurnameOrder;

// creo array con la lista dei cognomi
var listSurname = ["Verdi", "Rossi", "Bianchi", "Neri", "Stark", "Lannister", "Martell", "Baratheon"];


// chiedo all'utente il suo cognome
userSurname = prompt("Inserisci il tuo cognome");


// inserisco il cognome dell'utente nella lista cognomi
listSurname.push(userSurname);


// ordino i cognomi della lista in ordine alfabetico
listSurnameOrder = listSurname.sort();


// stampo la lista