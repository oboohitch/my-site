// Строки
/*
const name = 'Daniil'
const age = 19
function GetAge(){
    return age
}
const output = 'Привет, меня зовут ' + name + ' и мне ' + age + ' лет.'
const output = `Привет меня зовут ${name} и мне ${GetAge()} лет.`
const output = `Привет меня зовут ${name} и мне ${age < 20 ? 'меньше 20' : 'мне больше 20'} лет.`
console.log(output)
*/
// *объяснение значения ``*
/*const output = `
    <div>This is div</div>
    <p>This is p</p>
`
console.log(output)
*/
//
//const Name = 'Oboohitch'
//console.log(Name.length) // длина
//console.log(Name.toUpperCase()) // верхний регистр
//console.log(Name.toLowerCase()) // нижний регистр
//console.log(Name.charAt(2)) // возвращает элемент под указанным номером
//console.log(Name.indexOf()) // если не нашел содержимое скобок, то выдает -1
//console.log(Name.startsWith('Oboo')) 
/* имеет значение true and false, 
в зависимости от результата проверки
(хорошо применяется в связке с методом "toLowerCase()")
*/
//console.log(Name.endsWith())
//console.log(Name.repeat(3)) // повторение стоки заданное количество раз
//const password = '    password    '
//console.log(password.trim()) // удаляет все пробелы в стоке (trimLeft(), trimRight())
//
// Слудующая конструкция показывает особенность синтаксиса при работе со строками
/*
function logPerson(s, name, age){
    if(age < 0){
        age = 'Еще не родился'
    }
    else{
        age = personAge
    }
    return `${ s[0] }${ name }${ s[1] }${ age }`
}

const personName = 'Daniil'
const personName2 = 'Dima'
const personAge = 20
const personAge2 = -19

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}`
console.log(output)
console.log(output2)
*/
