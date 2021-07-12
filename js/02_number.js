// Number
//const num = 42 // integer
//const float = 42.42 // float
//const pow = 2e5 // добавление нулей с право (возведение в степень)
//
//console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
//console.log('Math.pow 53', Math.pow(2, 53))
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)
//console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
//console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
//console.log('1 / 0 or ', 2 / 0) // при делении на ноль любого числа получаем значение бесконечности
//console.log(Number.NaN) // Not a number
//console.log(typeof NaN) // получение типа переменной
//const weird = 2 / undefined // получение типа NaN  
//console.log(isNaN(weird)) // проверка на тип Nan
//console.log(isNaN(42)) // проверка на тип Nan
//console.log(Number.isFinite(Infinity)) // проверка на конечность
//console.log(Number.isFinite(42)) // проверка значения на конечность 
//
//const stringInt = '40'
//const stringFloat = '40.42'
//console.log(Number.parseInt(stringInt) + 2)
//console.log(+stringInt + 2)
//
//console.log(parseFloat(stringFloat) + 2)
//console.log(+stringFloat + 2)
// toFixed формирует кол-во знаков после запятой
//console.log(0.4 + 0.2)
//console.log(2 / 5 + 1 / 5)
//console.log((0.4 + 0.2).toFixed(1))
//console.log(+(0.4 + 0.2).toFixed(1))
//console.log(parseFloat((0.4 + 0.2).toFixed(1)))
//
// BigInt (работаю только др с др, как у любые типы данных)
//console.log(typeof 9557637935746093587039857650367567n)
//console.log(-9557637935746093587039857650367567n)
//console.log(9557637935746093587039857650367567n - 95576379357460935870398576503677n)
//
//console.log(10n - 4) // error
//console.log(parseInt(10n) - 4)
//console.log(10n - BigInt(4))
//console.log(5n / 2n) // result 2n
//
// Math
// sqrt - корень, abs - модуль
//console.log(Math.E)
//console.log(Math.PI)
//
//console.log(Math.max(456, 456, 8, 5, 0))
//console.log(Math.min(456, 456, 8, 5, 0))
//console.log(Math.floor(4.9)) // 4
//console.log(Math.ceil(4.1)) // 5
//console.log(Math.round(4.5)) // к ближайщему числу 
//console.log(Math.trunc(4.7)) // удаление всей дробной части 
//console.log(Math.random())
//
// Exemple 
/*
// алгоритм получения рандомного числа
function getRandomBetween (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))
*/