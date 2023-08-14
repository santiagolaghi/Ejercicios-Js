// Ejercicio 1: 

function top10MasAlcoholicas (array){
    let arrayEnteroModificable = array.map ( elemento => elemento )
    arrayEnteroModificable.sort( (a,b) => b.abv - a.abv )
    let porcionArrayMayorGraduacionAlcoholica = arrayEnteroModificable.slice(0,10)
    return porcionArrayMayorGraduacionAlcoholica
}

let resultadoTop10MasAlcoholicas = top10MasAlcoholicas(beers)
console.log("Cervezas mas alcoholicas : " , resultadoTop10MasAlcoholicas)

// Ejercicio 2:

function top10MenosAmargas (array){
    let arrayEnteroModificable = array.map ( elemento => elemento)
    arrayEnteroModificable.sort( (a,b) => a.ibu - b.ibu )
    let porcionArrayMenosAmarga = arrayEnteroModificable.slice(1,11)
    return porcionArrayMenosAmarga
}

let resultadoTop10MenosAmargas = top10MenosAmargas(beers)
console.log( "Cervezas mas Amargas :" , resultadoTop10MenosAmargas)

// Ejercicio 3:

function cervezasPorNivelEtilico(array, valor){
    const cervezasFiltradas = array.filter (array => array.abv <= valor)
    return cervezasFiltradas 
} 
const cervezasFiltradas = cervezasPorNivelEtilico(beers, 9)
console.log("Grado de alcohol : " , cervezasFiltradas)

let arrayMapeadoDeCerverzas = cervezasFiltradas.map(objeto =>{
    return {
    nombre: objeto.name,
    alcohol: objeto.abv,
    amargor: objeto.ibu
    }
})

console.log("Lista de cervezas : " , arrayMapeadoDeCerverzas)

// Ejercicio 4: 

function arrayNombreValor (array, propiedad, boolean){
    let array10cervezas = array.slice(0,10)
    if (boolean === true){
        array10cervezas.sort( (a, b) => a[propiedad] - b[propiedad])
    } else if (boolean === false){
        array10cervezas.sort( (a, b) => b[propiedad] - a[propiedad])
    }
    return array10cervezas
}

let birraNV = arrayNombreValor(beers, "ph", false)

console.log(birraNV)


// Ejercicio 5: 

function renderizarTabla (array, idElementoHTML){
    let cuerpoTabla = document.getElementById(idElementoHTML)
    let infoCervezasTabla = array.map(elementoActual=>{
        return{
            name: elementoActual.name,
            abv: elementoActual.abv,
            ibu: elementoActual.ibu
        }
    })
    let tablaParaHTML = infoCervezasTabla.reduce ((acc, elemAc) => {
        return acc + `<tr>
                        <td>${elemAc.name}</td>
                        <td>${elemAc.abv}</td>
                        <td>${elemAc.ibu}</td>
                    </tr>
                    `
    }, "")
    cuerpoTabla.innerHTML = tablaParaHTML
}

renderizarTabla(beers, "tableBody")