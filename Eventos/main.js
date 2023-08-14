//Ejercicio 1 

let cuadradoJS = document.getElementById("cuadrado")
let botonJS = document.getElementById("boton")

botonJS.addEventListener("click", cambiarColor)

function cambiarColor (){
    if (cuadradoJS.style.backgroundColor == ""){
        cuadradoJS.style.backgroundColor = "lightblue"
        cuadradoJS.textContent = "Celeste"
    } else if (cuadradoJS.style.backgroundColor == "lightblue"){
        cuadradoJS.style.backgroundColor = "red"
        cuadradoJS.textContent = "Rojo"
    } else if (cuadradoJS.style.backgroundColor == "red"){
        cuadradoJS.style.backgroundColor = "grey"
        cuadradoJS.textContent = "Gris"
    } else if (cuadradoJS.style.backgroundColor == "grey"){
        cuadradoJS.style.backgroundColor = "lightblue"
        cuadradoJS.textContent = "Celeste"
    }
}

//Ejercicio 2

let cuadrado2 = document.getElementById("cuadrado2")
let textoCuadradoJS = document.getElementById("textoCuadrado")
let botonResetJS = document.getElementById("botonReset")

textoCuadradoJS.addEventListener("keydown", transmitirTexto)

function transmitirTexto (){
    cuadrado2.textContent = textoCuadradoJS.value
    return transmitirTexto
}

botonResetJS.addEventListener("click", borrarTexto)

function borrarTexto (){
    cuadrado2.textContent = ""
    textoCuadradoJS.value = ""
    return borrarTexto
}

//Ejercicio 3

let pesoJS = document.getElementById("peso")
let alturaJS = document.getElementById("altura")
let botonIMCJS = document.getElementById("botonIMC")
let resultadoIMCJS = document.getElementById("resultadoIMC")

botonIMCJS.addEventListener("click", calcular)

function calcular (){
    let calculoIMC = pesoJS.value / (alturaJS.value ** 2)
    resultadoIMCJS.value = calculoIMC
    return calcular
}

//Ejercicio 4 

let pesoArg = document.getElementById('pesoArg');
let dolarUS = document.getElementById('dolarUS')
let dolares = 1
let pesosArgentinos = 470



pesoArg.addEventListener('keyup', calculoDivisaPesoDolar)

dolarUS.addEventListener('keyup', calculoDivisasDeDolaraPeso)

function calculoDivisasDeDolaraPeso (){

    pesoArg.value=dolarUS.value*pesosArgentinos
}

function calculoDivisaPesoDolar(){

    dolarUS.value=pesoArg.value/pesosArgentinos
}
