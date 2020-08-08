function newFunction (name, age, country) {
  var name = name || 'oscar'
  var age = age || 32
  var country = country || 'MX'
  console.log(name, age, country)
}

function newFunction2 (name = 'Oscar', age = 32, country = 'MX') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Daniel', 31, 'CO')

let hello = 'Hello'
let world = 'World'
console.log(`${hello} ${world}`)

let lorem = `otra frase que necesita enter en medio
aqui hicimos el enter
`

console.log(lorem)

let person = {
  name: 'Daniel',
  age: 32,
  country: 'CO'
}

// Forma antigua
console.log(person.name, person.age)

// Opción nueva
let { name, age, country } = person
console.log(name, age, country)

let team1 = ['Daniel', 'Oscar', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']

/*
 en el siguiente caso se esta dejando en el nuevo
 arreglando los valores de los anteriores arreglos
 de una forma rápida */
let education = ['David', ...team1, ...team2]

console.log(education)

{
  var globalVar = 'Global var'
}

{
  let globalLet = 'Global let'
}

/* Aqui indicará que global let is undefined */
console.log(globalVar)
console.log(globalLet)

// Esto genera error porque es una constante
const a = 'b'
a = 'c'

let name = 'Daniel'
let age = 32

//Forma antigua
obj = {
  name: name,
  age: age
}

// En la nueva forma no es necesario especificar el nombre de el atributo, 
// ya que lo toma del nombre de la variable
obj2 = {name, age}

console.log(obj2)

const names = [
  {name: 'Daniel', age: 31},
  {name: 'Juan', age:30}
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

let listOfNames2 = names.map( item => console.log(item.name) )

const helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if (true) {
      resolve('Hey se resolvio')
    }else{
      reject('Fallo')
    }
  }) 
}

helloPromise()
.then(resolve => console.log(resolve))
.then(() => console.log('hola'))
.catch(err => console.log(err))

class Calculator {
  constructor () {
    this.valueA = 0
    this.valueB = 0
  }

  sum (valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
console.log(calc.sum(2, 2))

const hello = require('./module')
console.log(hello())

function* helloWorld () {
  if (true) {
    yield 'Hello, '
  }

  if (true) {
    yield 'world'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
