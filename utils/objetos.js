const persona = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 16,
    sexo: 'M',
    jugar: () => 'estoy jugando',
    listaAmigos: [
        'matias',
        'joanna',
        'martin',
        'matias'
    ]
}

const persona2 = {
    nombre: 'Martin',
    apellido: 'perez',
    edad: 17,
    sexo: 'M',
    jugar: () => 'estoy jugando',
    listaAmigos: [
        'matias',
        'joanna',
        'martin',
        'matias'
    ]
}

const persona3 = {
    nombre: 'Maria',
    apellido: 'perez',
    edad: 18,
    sexo: 'F',
    jugar: () => 'estoy jugando',
    listaAmigos: [
        'matias',
        'joanna',
        'martin',
        'matias'
    ]
}

const listaPersonas = [persona, persona2, persona3];


let edadDeLaPersona = persona.edad;
console.log(persona.jugar());

/**
 * mostrar lista de amigos
 */
let listaAmigosPersona = persona.listaAmigos;

for (let varFor = 0; varFor < listaAmigosPersona.length; varFor++) {

    const amigo = listaAmigosPersona[varFor];

    console.log(`amigo de la persona en el índice ${varFor} -->`, amigo);
}


/**
 * funcion para filtrar nombres sin usar filter
 */
const filtrarSexo = (listaPersonas, tipoSexo) => {
    let resultado = [];

    for (let i = 0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].sexo === tipoSexo) {
            resultado.push(listaPersonas[i]);
        }
    }

    return resultado;
}


console.log(`lista de personas filtradas -->`, filtrarSexo(listaPersonas, 'F'));

console.log(listaPersonas.filter( (persona) => persona.sexo === 'F'));

