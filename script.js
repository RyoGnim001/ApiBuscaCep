const campo = document.querySelector('#input-cep')
const btn = document.querySelector('.btn-cep')
const saida = document.querySelector('.saida')

//valida o campor se ele esta preenchido ou não
function validarCampos() {
    const cep = campo.value.trim() //A função trim tira os espaços em branco da STRING  
    if(!cep){
        alert('Preencha os Campos Vazios')
        return 
    } return cep
} 

async function buscaCep() {
    const cep = validarCampos()
    if (!cep) return 
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = resposta.json()
    return data
}
async function exibirCep() {
    const resultCep = await buscaCep()
    const dadosCep = Object.entries(resultCep).map( ([chave,valor])=> {
       if (!valor)return 
       return `${chave} : ${valor},`

    }) 

    .filter(item => item !== undefined)

    saida.innerHTML = dadosCep.join('<br>')
}