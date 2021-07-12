// 1 Функции
// ф-ии задают внутри себ собсвенный контекст
// Function Declaration - можно получить доступ к ней до инициализации
/*
function greet(name){
    console.log('Привет - ' + name)
}
greet('Лена')
*/
// Function Expression - нельзя получить доступ к ней до инициализации
/*
const greet2 = function greet2(name){
    console.log('Пока, ' + name)
}
greet2('Лена')
*/
//console.log(typeof greet) // показывает тип (function)
//console.dir(greet) // показывает полное состояние параметр (в данном случае показывает, что function это прототип от род.класса Object)
//
// 2 Анонимные ф-ии
// setInterval - метод, в котором отображается ф-ия и интервал работы ее
/*
let counter = 0
const interval = setInterval(function(){
    if(counter === 5){
        clearInterval(interval)
    }else{
        console.log(++counter)
    }
}, 1000)
*/
// 3 Стрелочные ф-ии
/*
const arrow = (Name) => {
    console.log('привет, ' + Name)
}
arrow('Даниил')
// Упращеная запись
const arrow2 = Name => console.log('и ' + Name)
arrow2('dimasik')
*/
// 4 Параметры по умолчанию
/*
const sum = (a = 1, b = a * 2) => console.log(a + b)
sum(5, 5)
*/
// остаточные параметры ... для работы со всеми числами, которые передаются в ф-ию?
/*
function sumAll(...all){
    let result = 0
    for(let num of all){
        result += num
    }
    return result
}
const res = sumAll(1,2,2,3,3,3)
console.log(res)
*/
// 5 Замыкание
/*
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Daniil')
const res1 = logWithLastName(prompt())
const res2 = logWithLastName(prompt())
console.log(res1)
console.log(res2)
*/
