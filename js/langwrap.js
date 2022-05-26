
const langEl = document.querySelector('.lang-wrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('#title');
const descrEl = document.querySelector('#description');
const nameEl = document.querySelector('#nameLabel');
const emailEl = document.querySelector('#emailLabel');
const numberEl = document.querySelector('#numberLabel');
const genderEl = document.querySelector('.gender');
const gendermEl = document.querySelector('.genderMale');
const genderfEl = document.querySelector('.genderFemale');
const courtposEl = document.querySelector('.courtPos');
const posEl = document.querySelector('.pos');
const pointguardEl = document.querySelector('.pointGuard');
const guardEl = document.querySelector('.guard');
const smallforwardEl = document.querySelector('.smallForward');
const powerforwardEl = document.querySelector('.powerForward');
const centerEl = document.querySelector('.center');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        nameEl.textContent = data[attr].nameLabel;
        emailEl.textContent = data[attr].emailLabel;
        numberEl.textContent = data[attr].numberLabel;
        genderEl.textContent = data[attr].gender;
        gendermEl.textContent = data[attr].genderMale;
        genderfEl.textContent = data[attr].genderFemale;
        courtposEl.textContent = data[attr].courtPos;
        posEl.textContent = data[attr].pos;
        pointguardEl.textContent = data[attr].pointGuard;
        guardEl.textContent = data[attr].guard;
        smallforwardEl.textContent = data[attr].smallForward;
        powerforwardEl.textContent = data[attr].powerForward;
        centerEl.textContent = data[attr].center;
    });
});


var data = {
    "english": {
        "title": "Basketball Player Survey Form",
        "description": "Thank you for taking the time to help us.",
        "nameLabel": "Name",
        "emailLabel":"Email",
        "numberLabel": "Age",
        "gender": "What is your gender?",
        "genderMale": "Male",
        "genderFemale": "Female",
        "courtPos": "What is your position on the court?",
        "pos": "Select current position",
        "pointGuard": "Point Guard",
        "guard": "Guard",
        "smallForward": "Small Forward",
        "powerForward": "Power Forward",
        "center": "Center"
    },
    "spanish": {
        "title": "Encuesta jugadores de basket",
        "description": "Gracias por tomarte el tiempo de ayudarnos.",
        "nameLabel": "Nombre",
        "emailLabel": "Email",
        "numberLabel": "Edad",
        "gender": "Género",
        "genderMale": "Masculino",
        "genderFemale": "Femenino",
        "courtPos": "En qué posición juegas?",
        "pos": "Selecciona tú posición",
        "pointGuard": "Base",
        "guard": "Escolta",
        "smallForward": "Alero",
        "powerForward": "Ala-Pivot",
        "center": "Pivot"
    }
}