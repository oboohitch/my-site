// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof 'f00');
// console.log(typeof true);
// console.log(typeof Math);
// console.log(typeof Symbol('id'));
// console.log(typeof null);
// console.log(typeof alert);

// модальные окна
// let age = prompt('Сколько тебе лет?', [100]) //  записывает значение введеное пользователем
// alert(`тебе ${age} лет!`) // выводит окно с информацией 
// let isBoss = confirm('ты тут главный?') // записывает булевое значение
// alert(isBoss ? 'this is cool' : 'do not cry')

// let value = true
// alert(typeof value)
// value = String(value)
// alert(typeof value)
// alert(value)

// let value = '123'
// alert(typeof value)
// value = Number(value)
// alert(typeof value)
// alert(value)
// undefined -> NaN, null -> 0, true / false -> 1 / 0, string -> 0/число/NaN

// let value = 1
// alert(typeof value)
// value = Boolean(value)
// alert(typeof value)
// alert(value)
// 1 -> true, 0 -> false, '' -> false, !'' -> true, undefined & null & NaN -> false

// alert(+true)
// alert(+'')
// alert(+undefined) // бинарный + это преобразование в число 

// let a = 1, b = 2;
// alert(a++)
// alert(++a)
// b = 1 + (a *= 2)
// alert(b)

// alert("" + 1 + 0)
// alert("" - 1 + 0)
// alert(true + false)
// alert(6 / "3")
// alert("2" * "3")
// alert(4 + 5 + "px")
// alert("$" + 4 + 5)
// alert("4" - 2)
// alert("4px" - 2)
// alert(7 / 0)
// alert("  -9  " + 5)
// alert("  -9  " - 5)
// alert(null + 1)
// alert(undefined + 1)
// alert(" \t \n" - 2)

// let num1 = prompt('number?', [1])
// let num2 = prompt('number?', [2])
// alert(+num1 + +num2)

// let result = (2 != 1)
// alert(result)

// alert('a' < 'b')
// alert('cat' > 'dog')
// alert('eat' > 'eating')

// alert('001' == 1)
// alert('hello' == 1)

// alert(false == 0)
// alert(true == 1)

// alert(false == 0) // true 
// alert(false === 0) // false т.к. === сравнивает не только операнды, но и их тип
// alert('0' != 0) // false
// alert(true != 1) // false
// alert(true !== '1') // true

// alert(undefined === null) // false
// alert(undefined == null) // true - равны друг другу и не равны остальным
// при < > >= <= : undefined - NaN, null - 0
// alert(null > 0) // false
// alert(null == 0) // false -> null == undefined -> undefined != 0
// alert(null >= 0) // true
// alert(undefined > 0) // false -> undefined = NaN 
// alert(undefined < 0) // false -> undefined = NaN
// alert(undefined == 0) // false -> undefined = null = undefined.

// let age = prompt("how old are you?", [3])
// let message = (age < 3) ? 'hi, baby' :
//     (age < 25) ? 'hello' :
//     (age < 100) ? 'goodmorning' :
//     'wow';
// alert(message)

// let _name = prompt('Какое "официальное" название у JavaScript', )
// if(_name == 'ECMAScript'){
//     alert(true)
// } else{
//     alert(false)
// }

// let number = prompt('введите число', [0])
// if(number == 0){
//     alert(0)
// } else if(number > 0){
//     alert(1)
// } else{
//     alert(-1)
// }

// let result = (4 + 5 < 10) ? true : false
// alert(result)

// let login = prompt('введите должность', ['сотрудник'])
// let message = (login == 'сотрудник') ? 'привет' :
//     (login == 'директор') ? 'здравствуйте' :
//     (login == 'гость') ? 'добро пожаловать' :
//     (login == '') ? 'нет логина':
//     'пожалуйста авторизируйтесь'
// alert(message)

// let x
// true || (x = 1)
// alert(x) // x = undefined -> x = 1 не выполняется
// false || (x = 1)
// alert(x) // x = 1

// let x = 1;
// (x > 0) && alert('greater then zero');
// эквивалентно 
// let x = 1 
// if(x > 0){
//     alert('greater then zero')
// }

// alert('non-empty string') // message
// alert(!!'non-empty string') // true
// эвивалентно 
// alert(Boolean('non-empty string')) // true

// let age = prompt('how old are you', [0])
// if(!(age >= 14 && age <= 90)){
//     alert(true)
// } else{
//     alert(false)
// }


// let currentUser = prompt('кто там?', '')

// if(currentUser == null || currentUser == ''){
//     alert('отменено')
// } else if(currentUser == 'админ'){
//     let password = prompt('пароль', '')

//     if(password == null || password == ''){
//         alert('отменено')
//     } else if(password == 'я главный'){
//         alert('здравствуйте')
//     } else{
//         alert('неверный пароль')
//     }
//     } else{
//     alert('я вас не знаю')
// }

// оператор определено -> помогает найти первое не определенное 
// let height = 0
// alert(height || 100) // 100
// alert(height ?? 100) // 0

// let i = 3
// while(i){
//     alert(i)
//     i--
// }

// let sum = 0;
// while(true){
//     let value = +prompt('введите число', '')
//     if(!value) break;
//     sum += value
// }
// alert(sum)

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue
//     alert(i)
// }

// let sum = 0;
// outer:
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         let input = +prompt(`значение на координатах ${i} ${j}`, '')
//         if(!input) break outer;
//         sum += input
//     }
// }
// alert(sum)
// alert('the end')

// for(let i = 0; i <= 10; i++){
//     if(i % 2 != 0 || i == 0) continue
//     alert(i)
// }

// let num = 0;
// do{
//     num = prompt('введите число больше 100', [0])
// }while(num <= 100 && num)

// let number = +prompt('введите число', '')
// nextNumber:
// for(let i = 2; i <= number; i++){ // 2 3 4 5 6 7 8 9 10
//     for(let j = 2; j < i; j++){
//         if(i % j == 0) continue nextNumber;
//     }
//     alert(i)
// }

// let browser = prompt('введите браузер', '')
// if(browser === 'Edge'){
//     alert('you have got the Edge')
// } else if(browser === 'Google'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera'){
//         alert('okey we suppor there browsers too')
// } else{
//     alert('we hope that this page looks ok')
// }

// const number = +prompt('введите число от 0 до 3', '')
// switch(number){
//     case 0:
//         alert('zero')
//         break;
//     case 1:
//         alert('one')
//         break;
//     case 2:
//     case 3:
//         alert('two or three')
//         break;
// }

// let userName = 'D'
// function showMessage(){
//     userName = 'A'
// }
// alert(userName)
// showMessage()
// alert(userName)

// let userName = 'den'
// function showMessage(){
//     let userName = 'dim'
//     let message = 'hello, ' + userName
//     alert(message)
// }
// alert(userName)
// showMessage()
// alert(userName)

// function showMessage(from, text = 'Allo'){
//     from = '*' + from + '*'
//     alert(from + ' : ' + text)
// }
// let _name = 'Den'
// showMessage(_name, 'hi, Dim')
// alert(_name)

// function checkAge(age){
//     if(age > 18){
//         return true
//     } else{
//         return confirm('а родители разрешили?') // ok - true / cancel - false
//     }
// }
// let age = prompt('how old are you?', [18])
// if(checkAge(age)){
//     alert('доступ открыт')
// } else{
//     alert('доступ закрыт')
// }

// function doNothing(){
//     return;
// }
// alert(doNothing() === undefined) // true

// get - возвращать, calc - считать, create - создавать, check - проверять / return bool result
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false
// getAge – будет плохим выбором, если функция будет выводить alert с возрастом (должна только возвращать его).
// createForm – будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).
// checkPermission – будет плохим выбором, если функция будет отображать сообщение с текстом доступ разрешён/запрещён (должна только выполнять проверку и возвращать её результат).
// делать функции более простыми, разбивать их на более простые

// function checkAgeFirst(age){
//     if(age > 18){
//         return true;
//     } else {
//         return false;
//     }
// }
// function checkAgeSecond(age){
//     if(age > 18){
//         return true;
//     }
//     return false;
// }
// let age = +prompt('сколько тебе лет?', [18])
// alert(checkAgeFirst(age))
// alert(checkAgeSecond(age))

// function checkAge(age){
//     return (age > 18 ? true : false)
// }
// function checkAge(age){
//     return (age > 18 || false)
// }
// alert(checkAge(20))

// function min(a,b){
//     return a > b ? a : b
// }
// alert(min(1,1))

// function checkPow(x,n){
//     return (n >= 1 ? pow(x,n) : 'данные числа не обслуживаем')
// }
// function pow(x,n){
//     return x**n
// }
// let x = +prompt('введите основание', [1])
// let n = +prompt('введите степень', [1])
// alert(checkPow(x,n))

// function declaration
// sayHi()
// function sayHi(){
//     alert('hi')
// }
// sayHi()

// function expression
// let sayHi = function(){
//     alert('hi')
// };
// sayHi()

// function sayHi(){
//     alert('hi')
// }
// let func = sayHi
// func()
// sayHi()

// function ask(question, yes, no){
//     if(confirm(question)){
//         yes()
//     } else{
//         no()
//     }
// }
// function showOk(){
//     alert('this is good')
// }
// function showCansel(){
//     alert('it is bad')
// }
// ask('you got back is school', showOk, showCansel)

// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }
// ask('you have got to the brakfast in school',
//     function() {alert('well done')},
//     function() {alert('you are bad boy')}
// )

// let age = 17
// if(age < 18){
//     welcome()
//     function welcome(){
//         alert('hi')
//     }
//     welcome()
// } else{
//     welcome()
//     function welcome(){
//         alert('hellow')
//     }
// }

// let age = 20
// let welcome
// if(age > 18){
//     welcome = function(){
//         alert('hellow')
//     };
// } else{
//     welcome = function(){
//         alert('hi')
//     };
// }
// welcome()

// let age = +prompt('how old are you', [18])
// let welcome = (age >= 18) ?
//     function() { alert('hellow') } :
//     function() { alert('hi') };
// welcome()

// let age = +prompt('how old are you', [18])
// let message = (age > 18) ?
//     () => alert('you are eightinth year') :
//     () => alert('you are a smole');
// message()

// let sum = (a, b) => a + b
// alert(sum(1, 2))

// let ask = (question, yes, no) => {
//     if(confirm(question)) yes()
//     else no()
// }
// ask('are you ready?',
//     () => alert('YES'),
//     () => alert('NO')
// )

// практик 1
// let number = +prompt('введите пятизначное число', [11111])
// let sumNum = ''
// let rightNum = 0
// while (true) {
//     rightNum = number % 10
//     sumNum += String(Math.floor(rightNum))
//     if(Math.floor(number / 10) == 0){
//         break;
//     } else{
//         number /= 10
//     }
// }
// for(let i = 1; i < 6; i++){
//     rightNum = sumNum % 10
//     console.log(`${i} цифра равна ${Math.floor(rightNum)}`)
//     sumNum /= 10
// }

// практик 2
// let numbers = prompt('введите цифры a, b, f', [123])
// let a, b, f
// f = numbers % 10
// numbers /= 10
// b = numbers % 10
// numbers /= 10
// a = numbers
// let calcNumbers = (a = 1, b = 2, f = 3) => {
//     let x = (a + b - f / a) + f * a * a - (a + b)
//     return x
// }
// alert(`результат вычисления по формуле 
//     (a + b - f / a) + f * a * a - (a + b) : 
//     ${calcNumbers()}`
// )

// практик 3
// function pow(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// let x = prompt('x?', '')
// let n = prompt('n?', '')

// if (n < 0) {
//     alert(`power ${n} is not supported,
//     please enter a non-negative integer number`)
// } else {
//     alert( pow(x, n) )
// }

// уровни вложенности
// практик 4 - ввывести все честные числа от 0 до 10
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }

// alert('2 цикл')

// for (let i = 0; i < 10; i++) {
//     if ( !(i % 2 == 0) ) continue;
//     alert(i)
// }

// /**
//  * @param {numdeb} n до какого числа находим простые числа
//  * @function showPrimes выводит простые числа
//  * @function isPrimes проверяет на простое число
//  * @returns {boolean} является число просты или нет
//  */

// let n = prompt('введите число', [10])

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if ( !isPrimes(n) ) continue;
        
//         alert(n)
//     }
// }

// function isPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }

//     return true;
// }

// протестировали
// function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;

//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }
