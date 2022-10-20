//[*]ARRAY with OBJ TEAM members
//creare array team : nome ruolo foto
//[*]STAMPARE IN CONSOLE
//ciclo for per percorrere array
// ciclo for in per percorrere l'interno di ogni oggetto
//stampare in console
//[*]STAMPARE nel DOM
// stampare stesse info nel dom .innerHTML
// img stamparare come scritta
// Bonus 1: stampare l img come IMG (link)
//Bonus 2: stampare info nelle card

//prelevo dal dom
const sectionRow = document.querySelector(".row");
console.log(sectionRow);

const teamArray = [
  {
    //1. WAYNE
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    //2. ANGELA
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    //3. WALTER
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    //4. ANGELA
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    //5.SCOTT
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    //6. BARBARA
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];
console.log(teamArray);

//Stampare in console
for (let i = 0; i < teamArray.length; i++) {
  const teamMember = teamArray[i];
  // console.log(teamMember);
  for (let key in teamMember) {
    console.log(key, teamMember[key]);
  }
  //stampare nel DOM
    // sectionRow.innerHTML += `nome: ${teamMember.nome}   ruolo: ${teamMember.ruolo}
    // foto:  <img src="img/${teamMember.foto}" alt="">`;

  //stampare Card nel DOM
  createCard(teamMember.foto, teamMember.nome, teamMember.ruolo)
}







/**
 * Description Creare ColDiv con all'interno una CARD (img + title)
 * @param {object data} foto dell'object nell'array
 * @param {object data} nome dell'object nell'array
 * @param {object data} ruolo dell'object nell'array
 * @returns creation of the div 
 */
function createCard(foto, nome, ruolo) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    sectionRow.append(colDiv);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    colDiv.append(cardDiv);
    cardDiv.innerHTML += `<img src="img/${foto}" alt="">`;
    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("card-title");
    cardTitleDiv.classList.add("text-center");
    cardTitleDiv.classList.add("mt-2");
    cardDiv.append(cardTitleDiv);
    cardTitleDiv.innerHTML = `<h4>${nome} </h4> <span>${ruolo}</span>    `;
}
