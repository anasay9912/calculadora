//Este es mi primer js

var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hola Calculadora 2';

var valorAnterio = 0;
var accion;
var display = document.querySelector('input');

function miFuncionDividir(){
    valorAnterio = display.value;
    accion = '/';
    display.value = '';
};

function miFuncionSuma(){
    valorAnterio = display.value;
    accion = '+';
    display.value = '';
};

function miFuncionResta(){
    valorAnterio = display.value;
    accion = '-';
    display.value = '';
}

function miFuncionMultiplicar(){
    valorAnterio = display.value;
    accion = '*';
    display.value = '';
}

function miFuncionIgual(){
    if(accion === '/') {
        var resultado = parseInt(valorAnterio) / parseInt(display.value);
        display.value = resultado;
    }
    if(accion === '+') {
        var resultado = parseInt(valorAnterio) + parseInt(display.value);
        display.value = resultado;
    }
    if(accion === '-') {
        var resultado = parseInt(valorAnterio) - parseInt(display.value)
        display.value = resultado;
    }
    
    if(accion === '*') {
        var resultado = parseInt(valorAnterio) * parseInt(display.value)
        display.value = resultado;
    }

};

function miFuncion(num){
            var valorDisplayActual = display.value;
        display.value = valorDisplayActual + num;
    
};
