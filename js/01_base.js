// Step 1 Переменные и типы
// можно создавать переменные через var и let (преимущественно)
// const firstName = 'Den' // string
// const age = 19 // number
// const isPrograme = true // boolean 

// const _private = 'private'
// const $someValue = 'some value'

// const withNum5 = '5'

// Step 2 Мутирование
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age);
// const lastName = prompt('Введите фамилию: ')
// alert(lastName)

// Step 3 Операторы вычисления
// let currentYear = 2021
// const birthYear = 2001

// const age = currentYear - birthYear

// const a = 5
// const b = 10

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(currentYear)
// console.log(currentYear++)
// console.log(currentYear)

// Step 4 Типы данных
// const isPrograme = true
// const name = 'Daniil'
// const number = 19
// let x
// console.log(typeof isPrograme)
// console.log(typeof name)
// console.log(typeof number)
// console.log(typeof x)

// Step 5 Приоретет операций
// const age = 19
// const birthYear = 2001
// const currentYear = 2021
// < > <= >=
// const isFullAge = currentYear - birthYear >= age // 20 >= 19
// console.log(isFullAge)

// Step 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, panding

// if(courseStatus === 'ready'){
//    console.log('Курс уже готов');
// } else if(courseStatus === 'pending'){
//    console.log('Курс еще в разработке');
// } else{
//    console.log('Курс не получился')
// }

// const isReady = true

// if (isReady){
//    console.log('Курс уже готов')
// } else{
//    console.log('Курс не готов')
// }

// Тернарное выражение 
// const isReady = true
// isReady ? console.log('Курс уже готов') : ('Курс не готов')

// const num1 = 42
// const num2 = '42'

// console.log(num1 === num2)

// Step 7 Булевая логика
// && и
// || или
// !  не (применяется несколько раз !!true or !!false ...)

// Step 8 Функции

// function calculateAge(year){
//    return 2021 - year
// }

// const myAge = calculateAge(2001)
// console.log(myAge)
// console.log(calculateAge(2001))
// console.log(calculateAge(1955))
// console.log(calculateAge(2002))

// function logInfoAbout(name, year){
//    const age = calculateAge(year)

//    if (age > 0){
//        console.log('Человек по имени ' + name + ', ему сейчас ' + age + ' лет.')
//    } else{
//        console.log('Вообще-то это уже будущее!!!')
//    }
// }
// logInfoAbout('Dimasik', 2001)
// logInfoAbout('Daniluk', 2001)
// logInfoAbout('Daniluk', 2022)

// Step 9 Массивы 
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Масда', 'Мерседес', 'Форд')
// console.log(cars)

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])

// cars[2] = 'Lada'
// console.log(cars)

// cars[3] = 'Форд'
// console.log(cars)

// Step 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let i = 0; i < cars.length; i++){
//    const car = cars[i]
//    console.log(car)
// }

// for (let car of cars){
//    console.log(car)
// }

// Step 11 Объекты 
// const person = {
//    firstName: 'Daniil',
//    lastName: 'Oboohitch',
//    year: 2001,
//    languages: ['Ru', 'En', 'De'],
//    hasWife: false,
//    greet: function() {
//        console.log('greet from person')
//    }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.greet()
// person.isProgrammer = true
// console.log(person)
