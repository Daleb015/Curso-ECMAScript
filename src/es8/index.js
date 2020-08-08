const data = {
  frontend: 'Jhair',
  backend: 'Daniel',
  design: 'Juan'
}

const entries = Object.entries(data)
console.log(entries)

const values = Object.values(data)
console.log(values)

const string = 'hello'
console.log(string.padStart(10, 'hi'))
console.log(string.padEnd(12, '-----'))

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()

