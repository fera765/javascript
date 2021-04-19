//INICIO

// O metodo copyWithin faz o seguinte ele faz a copia de uma parte do Array,
//  para outro lugar do mesmo Array sem modificar o seu tamanho original...

var array1 = ['a', 'b', 'c', 'd', 'e'];

// copie para o índice 0 o elemento no índice 3
console.log(array1.copyWithin(0, 3, 4));
// saída esperada: Array ["d", "b", "c", "d", "e"]

// copie para o índice 1 todos os elementos do índice 3 até o final
console.log(array1.copyWithin(1, 3));
// saída esperada: Array ["d", "d", "e", "d", "e"]

//FIM

//INICIO

// O metodo abaixo ele retorna um novo Objeto do Array que contem, chave/valor
// para cada valor no Array

var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// saída esperada: Array [0, "a"]

console.log(iterator1.next().value);
// saída esperada: Array [1, "b"]

console.log(iterator1.next().value);
// saída esperada: Array [2, "c"]

//FIM

//INICIO
// O metodo abaixo faz o seguinte ele passa para uma função todos os valores,
// do Array e testa se eles passam pelo teste simples...

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// saida esperada: true

//FIM

//INICIO
// O metodo abaixo faz o seguinte tu modifica o Array com o valor que vc quiser,
// o primeiro paramentro é o valor que vc que adicionar dentro do Array,
// o segundo e terceiro paramentro se trata do inicio/fim da alteração

var array1 = [1, 2, 3, 4];

// preencher com 0 da posição 2 até a posição 4
console.log(array1.fill(0, 2, 4));
// saida esperada: [1, 2, 0, 0]

// preencher com 5 da posição 1
console.log(array1.fill(5, 1));
// saida esperada: [1, 5, 5, 5]

console.log(array1.fill(6));
// saida esperada: [6, 6, 6, 6]
//FIM

//INICIO
//O filter ele cria um novo Array com base na condição que tu passou,
// exemplo abaixo ele está jogando para o novo array somente as palavras,
// que tenham 7 letras ou mais

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// saida esperada: Array ["exuberant", "destruction", "present"]
//FIM

//INICIO
// O find ele retorna o primeiro valor que satisfazer a condição
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// saida esperada: 12
//FIM

//INICIO
// O findIndex ele retorna o primeiro indice do valor que satisfazer a condição
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// saida esperada: 3 nesse caso o valor 130
//FIM

//INICIO
//O método flat() cria uma nova matriz com todos os elementos de sub array 
//concateados nele recursivamente até a profundidade especificada.
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//FIM

//INICIO
//O forEach ele ira executar uma função por cada elemento do Array
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// saida esperada: "a"
// saida esperada: "b"
// saida esperada: "c"
//FIM

//INICIO
//O metodo includes ira verificar sem um valor existe dentro de um Array,
// devolvendo verdadeiro ou falso
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// saida esperada: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// saida esperada: true

console.log(pets.includes('at'));
// saida esperada: false
//FIM

//INICIO
//O método indexOf() retorna o primeiro índice no qual um determinado elemento
// pode ser encontrado na matriz, ou -1 se não estiver presente.

//O primeiro valor é o que tu quer pesquisar, o segundo valor é de qual  lugar
// tu quer começar a buscar

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// saida esperada: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// saida esperada: 4

console.log(beasts.indexOf('giraffe'));
// saida esperada: -1
//FIM

//INICIO
//O método join() une todos os elementos de uma matriz em uma string.

var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// saida esperada: "Fire,Air,Water"

console.log(elements.join(''));
// saida esperada: "FireAirWater"

console.log(elements.join('-'));
// saida esperada: "Fire-Air-Water"

//FIM

//INICIO
//O método keys() retorna um novo Iterador array que contém as 
//o indice para cada valor na matriz.


var array1 = ['a', 'b', 'c'];
var iterator = array1.keys(); 
  
for (let key of iterator) {
  console.log(key); // saida esperada: 0 1 2
}
//FIM

//INICIO
// O metodo lastIndexOf ele ira buscar o valor indice de trás para frente..

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo','Tiger'];

console.log(animals.lastIndexOf('Dodo'));
// saida esperada: 3

console.log(animals.lastIndexOf('Tiger'));
// saida esperada: 1
//FIM

//INICIO
// O metodo map ele criar uma nova matriz com o resultado de uma função etc
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// saida esperada: Array [2, 8, 18, 32]
//FIM

//INICIO
// O método pop() remove o último elemento de uma matriz e retorna 
// esse elemento. Este método altera o comprimento da matriz.


var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// saida esperada: "tomato"

console.log(plants);
// saida esperada: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// saida esperada: Array ["broccoli", "cauliflower", "cabbage"]
//FIM

//INICIO
//O método push() adiciona um ou mais elementos ao final de uma matriz 
//e retorna o novo comprimento da matriz.

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// saida esperada: 4

console.log(animals);
// saida esperada: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// saida esperada: Array ["pigs", "goats", "sheep", "cows", "chickens"]

//FIM

//INICIO
//O método de reducer() aplica uma função contra um acumulador e 
//cada valor da matriz (da esquerda para a direita) para reduzi-la a um 
//único valor.

//O Segundo parametro se trata de um valor a ser adicionado para o calculo

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// saida esperada: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// saida esperada: 15

///FIM

//INICIO
//O método reduceRight() aplica uma função contra um acumulador e 
//cada valor da matriz (da direita para a esquerda) tem que reduzi-la 
//a um único valor.

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// saida esperada: Array [4, 5, 2, 3, 0, 1]

//FIM


//INICIO
// O metodo revert() ele faz a innversão do Array

var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// saida esperada: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// saida esperada: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// saida esperada: Array ['three', 'two', 'one']
//FIM

//INICIO
//O método shift() remove o primeiro elemento de uma matriz e retorna 
//esse elemento. Este método altera o comprimento da matriz.

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// saida esperada: Array [2, 3]

console.log(firstElement);
// saida esperada: 1
//FIM

//INICIO
//O método slice() retorna uma cópia rasa de uma parte de uma matriz 
//em um novo objeto de matriz selecionado do início ao fim (final 
//não incluído). A matriz original não será modificada.
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// saida esperada: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// saida esperada: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// saida esperada: Array ["bison", "camel", "duck", "elephant"]
//FIM

//INICIO
//O método de alguns() testa se algum elemento na matriz 
//passa no teste implementado pela função fornecida.

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// saida esperada: true

//FIM


//INICIO
//O método de sort() classifica os elementos de uma matriz 
//no lugar e retorna a matriz. O tipo não é necessariamente estável. 
//A ordem de classificação padrão está de acordo com os pontos de código do 
//String Unicode.

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// saida esperada: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// saida esperada: Array [1, 100000, 21, 30, 4]

//FIM

//INICIO
//O método de slice() altera o conteúdo de uma matriz removendo 
//elementos existentes e/ou adicionando novos elementos.
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// saida esperada: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// saida esperada: Array ['Jan', 'Feb', 'March', 'April', 'May']

//FIM

//INICIO
//O método toLocaleString() retorna uma string representando os 
//elementos da matriz. Os elementos são convertidos em Strings 
//usando seus métodos toLocaleString e essas Strings são separadas 
//por uma string específica do local (como uma címula ").").

var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', {timeZone: "UTC"});

console.log(localeString);
// saida esperada: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
//FIM

//INICIO
//O método toSource() retorna uma sequência representando o código-fonte do array.
var alpha = new Array('a', 'b', 'c');

alpha.toSource();
//returns ['a', 'b', 'c']
//FIM

//INICIO
//O método toString() retorna uma sequência representando a
// matriz especificada e seus elementos.

var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
//FIM

//INICIO
//O método unshift() adiciona um ou mais elementos 
//ao início de uma matriz e retorna o novo comprimento da matriz.


var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
//FIM

//INICIO
//O método values() retorna um novo objeto Array Iterator que 
//contém os valores de cada índice na matriz.


const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value); // expected output: "a" "b" "c"
}
//FIM