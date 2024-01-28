

const turnOn = document.getElementById('turnOn'); /*Variável ligar*/
const turnOff = document.getElementById('turnOff'); /*Variável desligar*/

const lamp = document.getElementById('lamp'); /*Variável da imagem*/



function lampOn (){
    lamp.src = 'img/ligada.jpg'; /*Muda a imagem -Acessa*/
}

function lampOff (){
    lamp.src = 'img/desligada.jpg'; /*Muda a imagem -Apagada*/
}

function lampBroken (){
    lamp.src = 'img/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn); /*Assim que ouvir o click, acende*/
turnOff.addEventListener('click', lampOff);/*Assim que ouvir o click, apaga*/
lamp.addEventListener('dblclick', lampBroken);

/*lamp.addEventListener('mouseover', lampOn);*/ /*Ao passar o mouse, liga*/
/*lamp.addEventListener('mouseleave', lampOff);*/ /*ao passar o mouse, desliga*/