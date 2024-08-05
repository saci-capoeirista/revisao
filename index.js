const prompt = require('prompt-sync')();
const residencias = require("./residencias");
const listarResidencias = require('./listarResidencias')
const adcionarResidencia = require('./adicionarResidencia')
const removerResidencia = require('./removerResidencia')
const atualizarResidencia = require('./atualizarResidencia')

menu()
function menu() {
console.log(`
1. Listar Residência
2. Adicionar Residência
3. Atualizar Residência
4. Remover Residência
5. Sair
`);
let opcao = prompt('Escolha uma opção: ')
let index;

switch(opcao) {
    case '1':
        if (residencias.length == 0) {
            console.log('Nada encontrado!')
        } else {
            listarResidencias();
            menu();
        }
        break;
    case '2':
        bairro = prompt('Bairro: ');
        rua = prompt('Rua: ');
        numero = prompt('Número: ');
        adcionarResidencia({bairro, rua, numero});
        console.log('Residência adicionada com sucesso!');
        menu();
        break;
    case '3':
        listarResidencias();
        index = parseInt(prompt('Qual você deseja atualizar?: ')) -1
        const novoBairro = prompt('Digite o novo bairro: ')
        const novaRua = prompt('Digite a nova rua: ')
        const novoNumero = prompt('Digite o novo número: ')
        atualizarResidencia(index, {bairro:novoBairro, rua:novaRua, numero:novoNumero});
        console.log('Atualizado com sucesso!!')
        menu()
        break;
    case '4':
        listarResidencias()
        index = parseInt(prompt('Número do contato a remover: ')) - 1;
            removerResidencia(index, prompt);
            console.log('Removido com sucesso!!')
            menu();
            break;
    case '5': 
    console.log('Saindo do programa....')
    break;
}
}