const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];
//Utilizza forEach per stampare i nomi degli studenti.
studenti.forEach((studente) => {
  console.log(studente.nome);
});

//Utilizza find per trovare uno studente con un voto superiore a 90.
const studenteVotoAlto = studenti.find((studente) => studente.voto > 90);
console.log(studenteVotoAlto);

//Utilizza reduce per calcolare la media dei voti degli studenti.
const mediaVoti =
  studenti.reduce((acc, studente) => acc + studente.voto, 0) / studenti.length;
console.log(mediaVoti);

//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
const nomeMaiuscolo = studenti.map((studente) => studente.nome.toUpperCase());
console.log(nomeMaiuscolo);

//Utilizza filter per trovare gli studenti con voti superiori a 85.
const studentiVotoMaggiore85 = studenti.filter(
  (studente) => studente.voto > 85
);
console.log(studentiVotoMaggiore85);

/*In questo esercizio dato un array di studenti:
  Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];*/
