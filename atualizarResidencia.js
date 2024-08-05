const residencias = require("./residencias");

function atualizarResidencia(index, novoBairro, novaRua, novoNumero) {
    residencias[index] = novoBairro
    residencias[index] = novaRua
    residencias[index] = novoNumero
}
module.exports = atualizarResidencia;