// Массивы

// const фывап = [1, 1, 2, 3, 5, 8, 13, true, '34354', function app(){
//     const fan = {
//         num1: 4,
//         num2: '2',
//         num3: true,
//         num4: function app2(num){
//             if(num < 0){
//                 console.log('-')
//             }else{
//                 console.log('+')
//             }
//         }
//     }
//     return fan
// }]
// console.log(фывап[фывап.length - 1]().num4(19))
//
//const cars = ['Мазда', 'Мерседес', 'БМВ', 'Форд']
//console.log(cars)
//cars.push('Рено') // добавить в конец
//cars. unshift('Волга') // добавить в начало
//console.log(cars)
//const firstCar = cars.shift() // удаление первого элемента 
//const lastCar = cars.pop() // удаление последенего элемента
//console.log(cars)
//console.log(firstCar)
//console.log(lastCar)
//console.log(cars.reverse()) 
//console.log(cars)
//const numberCars = cars.indexOf('БМВ')
//cars[numberCars] = 'Порше'
//console.log(cars)
//
// Задача 1
/*
const text = 'Привет, мы изучаем JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)
*/
//
// Задача 2
// const a = {
//     name: 'Dima',
//     budget: 1000000000000000000000000000000000000000000000000n
// }
// const people = [
//     a,
//     {name: 'Oboohitch', budget: 10},
//     {name: 'Niksa', budget: 100000000000000},
// ]

// findIndex работает с элементами и возвращает их индексы 

// const index = people.findIndex(function(person){
//     return person.budget === 10
// })
// console.log(people[index])
// // find работает с элементами и возвращает сами элементы
// const person1 = people.find(function(person1){
//     return person1.budget == 10000
// })
// console.log(person1)

// Упрощенная запись
/*
const person = people.find(person => person.budget === 100)
console.log(person)
*/
// При работе с object, если нет нужного варианта, то параметр возвращает тип undefined
//
// Задача 2.1
/*
let winner1 
let winner2 
let winner3 
for(let person of people){
    if(person.budget === 100){
        winner1 = person
    }else if(person.budget === 10000){
        winner2 = person
    }else{
        winner3 = person
    }
}
console.log(winner1, winner2, winner3)
*/
// map работате, как цикл, возвращает нам новый массив
/*
console.log(cars.includes('БМВ'))
const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)
*/
// Задача 3
// filter работает как if, возвразает нам массив (новый) с теми элементами, которые подходят под условие
/*
const fib = [1, 1, 2, 3, 5, 8, 13]
const pow2 = num => num ** 2
const numFibPow2 = fib.map(pow2)
console.log(numFibPow2)

const delNumbers = num => num > 20
const filteredNumbers = numFibPow2.filter(delNumbers)
console.log(filteredNumbers)
*/
// reduce метод, работающий, как массив, в переменными, одна из которых отвечает за счетчик
/*
const allBudget = people.reduce(function(acc, person){
    if(person.budget > 100){
        acc += person.budget
    }
    return acc
}, 0)
console.log(allBudget)
*/
// Другая запись
/*
const allBudget = people
    .filter(person => person.budget > 100)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
*/