// 1. Tipos de Variáveis Básicas

// Crie variáveis de tipos básicos (string, number, boolean, array, object) e defina valores. 
// Use anotações de tipos do TypeScript. Para o tipo object crie um tipo (type)
// para preencher o valor segundo o modelo do type criado.

const studentName: string = "Arthur";
const age: number = 18;
const enabled: boolean = true;
const grades: number[] = [8, 9, 7.5, 10];

type User = {
  id: number,
  email: string
}

const account: User = { id: 1, email: "email@gmail.com" }


// 2. Função Simples

// Crie uma função que receba dois números como parâmetros, some-os e retorne o resultado.
// Objetivo: Trabalhar com funções e tipos de parâmetros em TypeScript.

function sum(x: number, y: number): number {
  return x + y
}

console.log("Exercicio 2:", sum(1, 2))

// 3. Função com Tipos de Retorno e Argumentos Opcionais

// Crie uma função que receba uma string e um número opcional. 
// Se o número for fornecido, repita a string o número de vezes; caso contrário, 
// retorne a string sozinha.
// Objetivo: Entender como trabalhar com parâmetros opcionais em funções.

function repeatString(name: string, times?: number): string {
  if (times) {
    return name.repeat(times)
  };
  return name
}

console.log("Exercicio 3:", repeatString("Arthur", 3))

// 4. Objetos com Tipos

// Defina um tipo para um objeto que represente um livro, com as propriedades titulo, autor e ano. 
// Crie um objeto desse tipo e imprima as informações.
// Objetivo: Trabalhar com tipos de objetos no TypeScript.

interface Book {
  titulo: string,
  autor: string,
  ano: number
}

const book: Book = { titulo: "Revolução dos bichos", autor: "George Orwell", ano: 1945 }

console.log("Exercicio 4:", "Titulo:", book.titulo, "Autor:", book.autor, "Ano:", book.ano)

// 5. Manipulando Arrays com Map e Filter

// Crie um array de números e use o método map para multiplicar cada número por 2. 
// Em seguida, use o método filter para filtrar apenas os números que são maiores que 5.
// Objetivo: Praticar métodos de arrays como map e filter com tipos definidos.

const numbers: number[] = [1, 2, 3, 4, 5]

const doubledNumbers: number[] = numbers.map(number => number * 2)

const moreThanFive: number[] = doubledNumbers.filter(number => number > 5)

console.log("Exercicio 5:", moreThanFive)

// 6. Tipos Avançados: union e alias

// Crie um tipo que possa ser tanto uma string quanto um número (usando union). 
// Depois, crie uma função que receba um argumento do tipo criado e retorne uma mensagem baseada no tipo.

// Dica: usar if e typeof

// Objetivo: Entender o uso de tipos union e alias.

type StringOrNumber = string | number

function verifyType(message: StringOrNumber): string {
  if (typeof message == "string") {
    return `A seguinte mensagem era um texto: ${message}`
  } else {
    return `A seguinte mensagem era um numero: ${message}`
  }
}

console.log("Exercicio 6:", verifyType("teste"))

// 7. Verificar Paridade de um Número

// Crie uma função que recebe um número como parâmetro e verifica se ele é par ou ímpar. 
// Retorne uma string indicando o resultado.

// Objetivo: Praticar operadores condicionais e tipos numéricos.

function evenOrOdd(number: number): string {
  if (number % 2 == 0) {
    return `O número ${number} é par`
  } else {
    return `O número ${number} é impar`
  }
}

console.log("Exercicio 7:", evenOrOdd(3))

// 8. Converter String para Número

// Crie uma função que recebe uma string representando um número e a converte para o tipo number. Em caso de erro, retorne uma mensagem indicando falha na conversão.

// Dica: usar isNaN

// Objetivo: Trabalhar com conversões de tipos e tratamento de erros.

function converter(number: string): string | number {
  try {
    const converted: number = Number(number);
    if (isNaN(converted)) {
      throw new Error("Falha na conversão!");
    }
    return converted;
  } catch (error) {
    return (error as Error).message;
  }
}

console.log("Exercicio 8:", converter("123"));
console.log("Exercicio 8:", converter("abc")); 

// 9. Verificar se uma Palavra é um Palíndromo

// Crie uma função que verifica se uma palavra é um palíndromo (ou seja, se ela pode ser lida da mesma forma de trás para frente).

// Objetivo: Trabalhar com strings e controle de fluxo.

function checkPalindromo(word: string): string {
  const reverseArray: string[] = word.split("").reverse()
  if (reverseArray.join("") == word) {
    return "É um palíndromo!"
  } else {
    return "Não é um palíndromo"
  }
}

console.log("Exercicio 9:", checkPalindromo("ovo"))

// 10. Filtrar Números Pares de um Array

// Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números pares.

// Dica: usar operador % (module operator)

// Objetivo: Trabalhar com arrays e filtrar valores específicos.

const lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

function evenNumbers(list: number[]) {
  const result = list.filter(number => number % 2 == 0)
  return result
}

console.log("Exercicio 10:", evenNumbers(lista))

// 11. Desestruturar um Objeto

// Crie um objeto representando uma pessoa, com propriedades nome, idade e cidade. Em seguida, use a desestruturação para acessar essas propriedades e imprima os valores no console.

// Objetivo: Trabalhar com desestruturação de objetos.

interface Person {
  nome: string,
  idade: number,
  cidade: string,
}

const person: Person = {
  nome: "Arthur",
  idade: 18,
  cidade: "Joinville"
}

const { nome, idade, cidade } = person

console.log("Exercicio 11:", nome, idade, cidade)

// 12. Merge de objetos

// Crie um objeto mesclando os dois objetos criados nos exercicios 4 e 11.

// Dica: usar spread operator

// Objetivo: aprender a mergear objetos

const bookAndPerson = { ...book, ...person }

console.log("Exercicio 12:", bookAndPerson)