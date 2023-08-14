let miNombre = "Santiago"

let miApellido = "Laghi"

let miEdad = 22

let miMascota = "Krauss"

let edadMascota = 2

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

let nombreCompleto = miNombre + " " + miApellido

let textoPresentacion = "Buenas! Me llamo " + miNombre + " " + miApellido + ",tengo " + miEdad + ". Vivo con mi perro " + miMascota + ",que es chico, jugueton, plaga y tiene" + edadMascota + "."

let sumaEdades = miEdad + edadMascota

let restaEdades = miEdad - edadMascota

let productoEdades = miEdad * edadMascota

let divisionEdades = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

let alumno = {
    nombre: "Santiago",
    apellido: "Laghi",
    edad: 22,
    tienesueño: true,
    estadocivil: "soltero"
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.estadocivil)
console.log(alumno.ubicacion)

let mascota = {
    nombre: "Krauss",
    edad: 2,
    estaCastrado: false,
    operaciones: 0,
    peso: "25 kilos"
}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.estaCastrado)
console.log(mascota.operaciones)
console.log(mascota.peso)

let frutas = ["Naranja", "Tomate", "Frutilla", "Banana", "Uva"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let edadIngresada = Number(prompt("Ingresa tu edad"))

let soyMayorDeEdad = edadIngresada >= 18

console.log("Soy mayor de edad", soyMayorDeEdad)

let numeros = [7, 15, 28, 54, 77]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = [
    {nombre: "Olga",
    edad: 60,
    Trabaja: false,},

    {nombre: "Lucas",
    edad: 25,
    Trabaja: true,},

    {nombre: "Diego",
    edad: 50,
    Trabaja: false,},

    {nombre: "Roberto",
    edad: 84,
    Trabaja: false,},

    {nombre: "Amalia",
    edad: 79,
    Trabaja: false,}
]

console.log(familia)
console.log(familia[0])
console.log(familia[0].nombre)
console.log(familia[0].edad)
console.log(familia[0].Trabaja)
console.log(familia[1])
console.log(familia[1].nombre)
console.log(familia[1].edad)
console.log(familia[1].Trabaja)
console.log(familia[2])
console.log(familia[2].nombre)
console.log(familia[2].edad)
console.log(familia[2].Trabaja)
console.log(familia[3])
console.log(familia[3].nombre)
console.log(familia[3].edad)
console.log(familia[3].Trabaja)
console.log(familia[4])
console.log(familia[4].nombre)
console.log(familia[4].edad)
console.log(familia[4].Trabaja)

let textoAleatorio = "El " + frutas[1] + "es una fruta aunque todos piensen que es una verdura, hacen bien pero comer " + numeros[3] + "ya excede de lo bueno" + familia[4].nombre

let miEdad2 = Number(prompt("Ingrese mi edad"))
let edadCompa = Number(prompt("Ingrese edad de mi compañero"))
let edadesIguales = miEdad2 == edadCompa
let soyMayor = miEdad2 > edadCompa
let soyMenor = miEdad2 < edadCompa

console.log("Mi edad es igual a la de mi compañero", edadesIguales)
console.log("Mi edad es mayor a la de mi compañero", soyMayor)
console.log("Mi edad es menor a la de mi compañero", soyMenor)

let edadPersona = Number(prompt("Ingrese edad de una persona"))
let alturaPersona = Number(prompt("Ingrese la altura de la persona en centimetros"))
let puedeSubir = edadPersona > 6 && alturaPersona > 120
console.log("Puede subir a la atraccion", puedeSubir)

let tipoDePase = prompt("Ingrese tipo de pase")
let saldoDisponible = Number(prompt("Ingrese saldo disponible"))
let puedePasar = tipoDePase == "LIMITADO" || saldoDisponible > 1000
console.log("La persona puede pasar", puedePasar)