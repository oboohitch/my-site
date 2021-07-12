// Объекты
/*
const person = {
    name: 'Daniil',
    age: 19,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    //'complex key': 'Complex Value',
    //['key_' + (1 + 3)]: 'Computed Key',
    greet(){
        console.log('greet from person')
    },
    info(){
        console.info('это человек по имени: ', this.name)
    }
}
console.log(person)
*/
//console.log(person.name)
//console.log(person['age'])
//const ageKey = 'age'
//console.log(person[ageKey])
//console.log(person['complex key'])
//person.greet()
//person.languages.push('by')
//person.age++
//person.isProgrammer = false
//delete person['key_4']
//console.log(person)
//
// Деструктивизация
//const name = person.name
//const age = person.age
//const languages = person.languages
//console.log(name, age, languages)
//
//const {name: Name, age: personAge = 0, languages: ln} = person
//console.log(Name, personAge, ln)
/*
for (let key in person){
    if(person.hasOwnProperty(key)){ // проверка на совственные свойства, которое не нходится в прототипе
        console.log('key: ', key)
        console.log('value: ', person[key]) 
    }
}
*/
// Object не бежит по прототипу
/*
Object.keys(person).forEach((key) =>{
    console.log('key: ', key)
    console.log('value: ', person[key])
})
*/
// Контекст (Context)
//person.info()
/*
const logger = {
    _keys(obj){
        console.log('Object: ', Object.keys(obj))
    }
}
logger._keys(person)
*/
//
/*
const logger = {
    _keys(){
        console.log('this is Objects: ', Object.keys(this))
    },

    keysAndValue(){
        // "key": value
            
        Object.keys(this).forEach(key =>{
            console.log(`"${key}" : ${this[key]}`)
        })
        
        //const self = this
        Object.keys(this).forEach(function(key){
            console.log(`"${key}" : ${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false){
        if(true){
            console.log('-----Start-----')
        }
        Object.keys(this).forEach((key, index, array) =>{
            console.log(`"${key}" : ${this[key]}`)
            if(between && index !== array.length - 1){
                console.log('----------')
            }
        }) 
        if(bottom){
            console.log('-----End-----')
        }
    }
}
*/
//logger._keys.call(logger) // вызывается сразу же
//const bound = logger._keys.bind(person) // присваивает (оставляет свой собственный контекст)
//bound()
//logger.keysAndValue.call(logger)
//const bound2 = logger.keysAndValue.bind(person)
//bound2()
//logger.withParams.call(person, true, true, true)
//logger.withParams.apply(person, [true, true, true])