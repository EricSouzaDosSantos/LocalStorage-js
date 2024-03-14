

function Salvar() {

    const corDoCarro = document.getElementById('Cor').value
    const modeloDoCarro = document.getElementById('modelo').value
    const MarcaDoCarro = document.getElementById('Marca').value
    const ChassiDoCarro = Math.floor(Math.random(10000) + 2)
    const AnoDoCarro = document.getElementById('Ano').value


    let carro = { cor: corDoCarro, modelo: modeloDoCarro, marca: MarcaDoCarro, chassi: ChassiDoCarro, ano: AnoDoCarro};
    window.localStorage.setItem('carro', JSON.stringify(carro));

    JSON.parse(window.localStorage.getItem('carro'));

    document.getElementById('modeloC').innerHTML=carro.modelo;
    document.getElementById('corC').innerHTML=carro.cor;
    document.getElementById('marcaC').innerHTML=carro.marca;
    document.getElementById('chassiC').innerHTML=carro.chassi;
    document.getElementById('anoC').innerHTML=carro.ano;


}


