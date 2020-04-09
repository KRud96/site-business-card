const menuEdu = document.querySelector(".menu__education");
const menuContacts = document.querySelector(".menu__contacts");
const menuProject = document.querySelector(".menu__learn-project");
const menuOther = document.querySelector(".menu__other");

const template = document.body.children[2];
const popupRusEdu = template.content.children[0];
const popupEngEdu = template.content.children[1];
const popupContact = template.content.children[2];
const popupContactEng = template.content.children[3];
const popupProjects = template.content.children[4];
const popupProjectsEng = template.content.children[5];

const menuAndPopup = document.querySelector(".menu-and-popup");
const language = document.getElementById("language");
const russian = language.options[0];
const english = language.options[1];

let firstClick = true;

menuAndPopup.appendChild(popupRusEdu);
menuAndPopup.appendChild(popupEngEdu);
menuAndPopup.appendChild(popupContact);
menuAndPopup.appendChild(popupContactEng);
menuAndPopup.appendChild(popupProjects);
menuAndPopup.appendChild(popupProjectsEng);


function openPopup(element){
    if(firstClick == false){
        //closePopup();
    }

    if(element == 1){
        if(russian.selected == true){   
            popupRusEdu.classList.remove('hidden');
            popupEngEdu.classList.add('hidden');
        }else if(english.selected == true){
            popupEngEdu.classList.remove('hidden');
            popupRusEdu.classList.add('hidden');
        }
       
    }else if(element == 2){
        if(russian.selected == true){
            popupContact.classList.remove('hidden');
            popupContactEng.classList.add('hidden');
        }else if(english.selected == true){
            popupContactEng.classList.remove('hidden');
            popupContact.classList.add('hidden');
        }
    }else if(element == 3){
        if(russian.selected == true){
            popupProjects.classList.remove('hidden');
            popupProjectsEng.classList.add('hidden');
        }else if(english.selected == true){
            popupProjectsEng.classList.remove('hidden');
            popupProjects.classList.add('hidden');
        }
    }else if(element == 4){
        closePopup();
    }
    firstClick = false;
}
function closePopup(){
    popupRusEdu.classList.add('hidden');
    popupEngEdu.classList.add('hidden');
    popupContact.classList.add('hidden');
    popupContactEng.classList.add('hidden');
    popupProjects.classList.add('hidden');
    popupProjectsEng.classList.add('hidden');
}

menuEdu.addEventListener('mouseover', ()=>{
    openPopup(1)
});
menuContacts.addEventListener('mouseover', ()=>{
    openPopup(2)
});
menuProject.addEventListener('mouseover', ()=>{
    openPopup(3)
});
menuOther.addEventListener('mouseover', ()=>{
    openPopup(4)
});
language.addEventListener("change", closePopup);

closePopup();
