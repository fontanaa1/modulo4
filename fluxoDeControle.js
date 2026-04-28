// fluxoDeControle.js
// Altere a variável menu para testar os exercícios

const menu = 20;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionado - Verificar se número é positivo.\n");
        positivo();
        break;

    case 2:
        console.log("Exercício 2 selecionado - Número par ou ímpar.\n");
        parOuImpar();
        break;

    case 3:
        console.log("Exercício 3 selecionado - Boas-vindas por turno.\n");
        boasVindasTurno();
        break;

    case 4:
        console.log("Exercício 4 selecionado - Maior de dois números.\n");
        maiorDeDois();
        break;

    case 5:
        console.log("Exercício 5 selecionado - Uso do operador ternário.\n");
        operadorTernario();
        break;

    case 6:
        console.log("Exercício 6 selecionado - Menu simples com switch.\n");
        menuSimples();
        break;

    case 7:
        console.log("Exercício 7 selecionado - Contador de 1 a 5 com while.\n");
        contadorWhile();
        break;

    case 8:
        console.log("Exercício 8 selecionado - Contagem regressiva com do...while.\n");
        regressivaDoWhile();
        break;

    case 9:
        console.log("Exercício 9 selecionado - Imprimir de 1 a 10 com for.\n");
        forUmADez();
        break;

    case 10:
        console.log("Exercício 10 selecionado - Somar números de 1 a 10.\n");
        somaUmADez();
        break;

    case 11:
        console.log("Exercício 11 selecionado - Imprimir elementos de um array com for.\n");
        arrayComFor();
        break;

    case 12:
        console.log("Exercício 12 selecionado - Usar for...of com array.\n");
        arrayForOf();
        break;

    case 13:
        console.log("Exercício 13 selecionado - Usar for...in com objeto.\n");
        objetoForIn();
        break;

    case 14:
        console.log("Exercício 14 selecionado - Parar contagem com break.\n");
        breakContagem();
        break;

    case 15:
        console.log("Exercício 15 selecionado - Pular número com continue.\n");
        continueContagem();
        break;

    case 16:
        console.log("Exercício 16 selecionado - Classificar nota do aluno.\n");
        classificarNota();
        break;

    case 17:
        console.log("Exercício 17 selecionado - Tabuada de um número.\n");
        tabuada();
        break;

    case 18:
        console.log("Exercício 18 selecionado - Contar elementos numéricos em um array misto.\n");
        contarNumerosArray();
        break;

    case 19:
        console.log("Exercício 19 selecionado - Verificar se uma palavra é um palíndromo.\n");
        palindromo();
        break;

    case 20:
        console.log("Exercício 20 selecionado - Menu interativo com switch e while\n");
        menuInterativo();
        break;

    default:
        console.log("Opção inválida.");
}

// =========================
// FUNÇÕES - Exercícios 1 a 20
// =========================

// 1. Verificar se um número é positivo, negativo ou zero
function positivo() {
    const num = 5;

    if (num > 0) {
        console.log("Número positivo.");
    } else if (num < 0) {
        console.log("Número negativo.");
    } else {
        console.log("Número zero.");
    }
}

// 2. Verificar se um número é par ou ímpar
function parOuImpar() {
    const num = 8;
    if (num % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    } 
}

// 3. Boas-vindas por turno do dia
function boasVindasTurno() {
    const turno = "M";
    if (turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde");
    } else if (turno === "N") {
        console.log("Boa noite");
    } 
}

// 4. Maior de dois números
function maiorDeDois() {
    const a = 10;
    const b = 20;
    if (a > b) {
        console.log("O maior número é: " + a);
    } else {
        console.log("O maior número é: " + b);
    }
}

// 5. Uso do operador ternário
function operadorTernario() {
    const num = -2;

    const resultado = num >= 0 ? "Positivo" : "Negativo";

    console.log(resultado);
}

// 6. Menu simples com switch
function menuSimples() {
    const opcao = 2;
    switch (opcao) {
        case 1:
            console.log("Início");
            break;
        case 2:
            console.log("Sobre");
            break;
        case 3:
            console.log("Sair");
            break;
    }
}

// 7. Contador de 1 a 5 usando while
function contadorWhile() {
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
} 

// 8. Contagem regressiva de 5 a 1 usando do...while
function regressivaDoWhile() {
    let i = 5;

    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

// 9. Imprimir números de 1 a 10 usando for
function forUmADez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// 10. Somar números de 1 a 10 usando for
function somaUmADez() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    } 
    console.log("A soma de 1 a 10 é: " + soma);
}

// 11. Imprimir elementos de um array usando for
function arrayComFor() {
    const frutas = ["Maçã", "Banana", "Uva"];

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

// 12. Usar for...of para iterar sobre um array
function arrayForOf() {
    const nomes = ["Ana", "Pedro", "Lucas"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

// 13. Usar for...in para iterar sobre as propriedades de um objeto
function objetoForIn() {
    const pessoa = {
        nome: "Lorena",
        idade: 17,
        cidade: "Campinas"
    };

    for (let chave in pessoa) {
        console.log(chave + ": " + pessoa[chave]);
    }
}

// 14. Parar a contagem usando break
function breakContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }

        console.log(i);
    }
}

// 15. Pular um número usando continue
function continueContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }

        console.log(i);
    }
}

// 16. Classificar nota do aluno usando if...else
function classificarNota() {
    const nota = 8.5;

    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota < 8) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

// 17. Tabuada de um número usando for
function tabuada() {
    const num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

// 18. Contar elementos numéricos em um array misto
function contarNumerosArray() {
    const lista = [1, "oi", true, 7, 9, "js"];
    let contador = 0;

    for (let item of lista) {
        if (typeof item === "number") {
            contador++;
        }
    }

    console.log("Quantidade:", contador);
}

// 19. Verificar se uma palavra é um palíndromo
function palindromo() {
    const palavra = "arara";
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    if (palavra === invertida) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// 20. Menu interativo com switch e while
function menuInterativo() {
    let opcao = 1;

    while (opcao <= 3) {
        switch (opcao) {
            case 1:
                console.log("Início");
                break;
            case 2:
                console.log("Sobre");
                break;
            case 3:
                console.log("Sair");
                return;
        }

        opcao++;
    }
}