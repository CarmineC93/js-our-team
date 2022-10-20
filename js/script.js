
/*[x]MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg"
    },
    {   		
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg" 
    },
    {   			            
        name: "Scott Estrada" ,
        role: "Developer" ,
        pic: "scott-estrada-developer.jpg" 
    },
    {		    
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg" 
    }
];

/*[x]MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto*/ 
/*[]MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
[]BONUS 1:
Trasformare la stringa foto in una immagine effettiva
[]BONUS 2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.
*/

const cols = document.getElementsByClassName(".col");

for(let i=0; i<ourTeam.length; i++){
    const memberTeam = ourTeam[i];
    console.log (memberTeam.name, memberTeam.role, memberTeam.pic);
    cols.innerHTML += `<span> <img src="img/${memberTeam.pic}"> <h3>${memberTeam.name}</h3> <h4>${memberTeam.role}</h4> </span>`
}



