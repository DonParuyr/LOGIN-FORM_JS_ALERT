
function mouseOVER2() {
    zoom2 = document.querySelector('.zoom2')
    zoom2.classList.add("opac");
}
function mouseOUT2() {
    zoom2.classList.remove("opac");
}

function mouseOVER1() {
    // zoom1 = document.querySelector('.zoom1');
    // zoom1.classList.add("opac");
    document.querySelector('.zoom1').classList.add("opac");
}
function mouseOUT1() {
    // zoom1.classList.remove("opac");
    document.querySelector('.zoom1').classList.remove("opac");
}

function invertON(){
    document.querySelector('body').classList.add('invert')
}

function invertOFF(){
    document.querySelector('body').classList.remove('invert');
}

