//Exercício: Calcular o índice de massa corporal de uma pessoa (IMC), dizer o ano que nasceu com base 

//nos seguintes dados:

// Nome: Paulo Silva, idade: 39 anos, peso: 90kg, altura 1,85m

const nome = 'Paulo';
const sobrenome = 'Silva';
const idade = 39;
const peso = 90;
const altura = 1.85;

let imc;
let anoNascimento;
imc = (peso)/(altura*altura);
anoNascimento = (2021 - idade);

console.log(nome,'tem',idade,'anos',',','pesa',peso,'kg','tem',altura,'m de altura e seu imc é de',imc);

console.log(nome+ ' tem '+idade+' anos, pesa '+ peso+' kg tem '+ altura+' m de altura e seu imc é de '+ imc);

//Template Strings: são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
// Usa-se o Template Strings entre crase.

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${altura}m de altura e seu imc é de ${imc}`);

console.log(`${nome}, nasceu em ${anoNascimento}.`);

