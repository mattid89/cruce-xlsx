const retornaSoloDos = function retornaSoloDos() {
    return 2;
}

const retornaSolo3 = function() {
    return 3;
}

const sumar = (numero1, numero2, numero3 = 0) => {
    return numero1 + numero2 + numero3;
}

const sumarBis = (numero1, numero2) => numero1 + numero2;

module.exports = {
    retornaSoloDos,
    retornaSolo3,
    sumar,
    sumarBis
}