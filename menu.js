//Altere a variável 'menu' para testar o switch case.
const menu = 1;

switch (menu){
    case 1:
    console.log("Exercicio 1 selecionado. Executando...\n");
    ternario();
    break;

    case 2:
    console.log("Exercicio 2 selecionado. Executando...\n");
    forin();
    break;

    case 3:
    console.log("Exercicio 3 selecionado. Executando...\n");
    forof();
    break;
}

function ternario(){
    const temp = 25;

    const clima = temp < 0
    ? "Congelante"
    : temp < 15
    ? "Frio"
    : temp < 30
    ? "Agradável"
    : "Quente";

    console.log(clima);
}

function forin(){

    const usuario ={
        nome: "Lucas",
        idade: 28,
        cargo: "Desenvolvedor"
    };

    for (let chave in usuario){
        console.log(`${chave}: ${usuario[chave]}`);
    }
}

function forof(){
    const tecnologias = ["JavaScript", "React", "Node.js"];

    for (let tech of tecnologias){
        console.log(`Estudando: ${tech}`);
    }
}