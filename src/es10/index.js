let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

let array2 = [1, 2, 3, 4, 5]

console.log(array2.flatMap(value => [value, value * 2]))

let hello = ' hello world '
console.log(hello.trimStart())
console.log(hello.trimEnd())

try {
  
} catch {
  error
}

let entries = [['name', 'Daniel'], ['age', 38]]

console.log(Object.fromEntries(entries))

let mysimbol = 'Mi descripcion'
let symbol = Symbol(mysimbol)
console.log(symbol.description)
