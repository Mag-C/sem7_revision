


const boutonSavoir = document.querySelectorAll('.boutonS');
const modale = document.querySelector('.modale');
const bg =document.querySelector('.bgnoir');

for (let i = 0; i< boutonSavoir.length; i++){

    boutonSavoir[i].addEventListener('click', openModale);

}

function openModale(){
    
  // console.log(boutonSavoir.length);
  modale.classList.add('visible');
  bg.classList.add('visible');

    modale.addEventListener('click', closeModale);
}

function closeModale(){

    modale.classList.remove('visible');
    bg.classList.remove('visible');

}