/*
function teste(){
    console.log('teste')
}

teste()

*/

// pra testar se tava funcionando mesmo rs
const divexemplo = document.getElementById('exemplo');
ReactDOM.render(<h1>Teste</h1>,divexemplo)
// por enquanto não é possível usar o JSX (tags html no javascript)
// para isso iremos inserir o babel

// function component 

/*

    *************** muito importante: nomear a const puxando o elemento do html antes de qualquer coisa
    const nomeDaDivNoHtml = document.getElementById('exemplo1')

    function NomeDaFunçao(){

        var nome = 'chrisMaracujá'

        return(
            <div>
                <p>Texto qualquer texto qualquer meu nome é: {nome}</p>
            </div>
        )
    }
    
    ReactDOM.render(<NomeDaFunçao/>,'nomeDaDivNoHtml')


    em <NomeDaFunçao /> USAR SEMPRE A PRIMEIRA LETRA COMO MAIUSCULA 
    PascalCase no nome das funções sempre!!!!!!!
*/