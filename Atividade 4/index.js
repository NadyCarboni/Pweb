AOS.init();
console.warn('Trabalho feito por Nádia Mirka Carboni');

// movimento
// let shadow = document.querySelector('.moon-shadow');
// let markShadow = document.querySelector('.moon-button-marks');


// const onMouseMove = (e) =>{
//     shadow.style.transform = 'translate(' + ((e.pageX  * 0.) - 50 ) + '%,'+ '-50%)';
//     markShadow.style.transform = 'translate(' + ((e.pageX  * 0.1) - 50 ) + '%,'+ '-50%)';
 
   
 
// }

// document.addEventListener('mousemove', onMouseMove);

var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}