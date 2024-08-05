    const residencias = require("./residencias");

function listarResidencias() {
    residencias.forEach((residencia, index) => {
     console.log(`${index+1}. Bairro: ${residencia.bairro}, Rua: ${residencia.rua} numero: ${residencia.numero}`)
        })
}

module.exports = listarResidencias;