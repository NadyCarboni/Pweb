const Typewriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt='';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// type methode 

Typewriter.prototype.type = function() {
    // current index of word
    const current = this.wordIndex % this.words.length;

    // get full text of current world
    const fullTxt = this.words[current]
   

    //cheking if deleting
    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //add
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

   // insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}<span>`

    //inicial type speed
    let typeSpeed = 200;
    if (this.isDeleting) {
        typeSpeed /= 2;   
    } 
    // if world is complete 

    if(!this.isDeleting && this.txt === fullTxt) {
       // make a pause
        typeSpeed = this.wait; 
        // set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
}

// init on DOM Load

document.addEventListener('DOMContentLoaded', init);

//init app

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typewriter
    new Typewriter(txtElement, words, wait);
}

// // scrow suave

// window.scroll({
//     top:0,
//     behavior: "smooth"
// });

// window.scrollTo({
//     top:0,
//     behavior: "smooth"
// });

// Adicionar classe active nos links da navbar
const navbar = document.getElementById('Navbar');
const navbarLinks = document.getElementsByClassName('navLink');

navbar.addEventListener('click', function(e, target){
    if (e.target.className === 'navLink' ){       
    e.target.classList += " active";

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("click", function() {
          var ativo = document.getElementsByClassName("active");
          ativo[0].className = ativo[0].className.replace(" active", "");
          
        });
      }
}
    
} );





// movimento
let circle = document.getElementById('bolinha');
let circle1 = document.getElementById('bolinha-2');
let circle2 = document.getElementById('bolinha-3');

const onMouseMove = (e) =>{
    console.log('a')
  circle.style.transform = 'translate(' + ((e.pageX  * 0.005) + 80 ) + '%,'+  ((e.pageY * 0.005 ) + 40)+ '%)';
  circle1.style.transform = 'translate(' + ((e.pageX  * 0.005) - 400 ) + '%,'+  ((e.pageY * 0.005 ) - 110)+ '%)';
  circle2.style.transform = 'translate(' + ((e.pageX  * 0.005) - 400) + '%,'+  ((e.pageY * 0.005 ) + 250 )+ '%)';

}

document.addEventListener('mousemove', onMouseMove);

// iniciar aos
AOS.init();

// esconder navbar
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset < 100) {
   navbar.style.transform = 'translateY(0px)';}
    else {
        navbar.style.transform = 'translateY(-70px)';
    }
  
}
;






