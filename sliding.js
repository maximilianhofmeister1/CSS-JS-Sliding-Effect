//Storage of all elements with the class 'sliding'
var reveals = document.querySelectorAll('.sliding');
//EventListener for scroll
window.addEventListener('scroll', reveal);
//Function reveal to let the elements slide when scroll
function reveal() {
    for (var i=0; i<reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;
        if(revealtop<windowheight*1+(revealpoint/100)) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}