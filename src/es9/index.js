const obj = {
  name: 'Daniel',
  age: 31,
  country: 'CO'
}

let { name, ...all } = obj
console.log(name, all)

const obj1 = {
  ...obj,
  country: 'ES'
}

console.log(obj1)

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Ya finalizó'))
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-06-05')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
