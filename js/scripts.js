
const boutonsModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++){

    boutonsModale[i].addEventListener('click', openModale);
    
    
}

function openModale(){

    
    const image = document.createElement('p');


    image.addEventListener("click", closeModale);

}

function closeModale(event){

    modale.removeChild(event.target);
    modale.classList.remove('visible');

}