// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.

// Scrivi anche la posizione della lista in cui il nuovo utente si trova


var userSurname, listSurnameOrder, itemListSurnameOrder, backContent, position;

// creo array con la lista dei cognomi
var listSurname = ["Blackwood", "Tully", "Targaryen", "Tyrell", "Stark", "Lannister", "Martell", "Baratheon", "Greyjoy", "Bolton"];


// chiedo all'utente il suo cognome
userSurname = prompt("Inserisci il tuo cognome");


// inserisco il cognome dell'utente nella lista cognomi
listSurname.push(userSurname);


// ordino i cognomi della lista in ordine alfabetico
listSurnameOrder = listSurname.sort();


// stampo la lista dei cognomi in ordine alfabetico attraverso il ciclo
var i = 0;

while (i < listSurnameOrder.length) {

  itemListSurnameOrder = listSurnameOrder[i];

  backContent = document.getElementById('surname-list').innerHTML;

  document.getElementById('surname-list').innerHTML = backContent + "<li>" + itemListSurnameOrder + "</li>";
  console.log(backContent + itemListSurnameOrder);

  i++;
}


// assegnazione variabile per la posizione del cognome utente all'interno della lista
position = listSurnameOrder.indexOf(userSurname) + 1;


// scrivo la posizione del cognome dell'utente all'interno della lista
document.getElementById('list-position').innerHTML = "<h1 id='title'>" + "Il tuo cognome ora fa parte di una delle famiglie più importanti di Game of Thrones. Più precisamente è alla posizione gerarchica n° " + position + "." + "</h1>";