// Event loop
/*
const timeout = setTimeout(() =>{
    console.log('after timeout')
}, 2500)
clearTimeout(timeout)

const inter = setInterval(() =>{
    console.log('after timeout')
}, 1000)
clearInterval(inter)
*/
/*
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() =>{
    console.log('After 2 second')
}, 2000)
*/
// Промесы
/*
const delay = (wait = 1000) =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve()
        }, wait)
    })
    return promise
}
*/
/*
delay(2500)
    .then(() =>{
        console.log('after 2 second')
    })
    .catch(err => console.error(err))
    .finally(() => console.log('finally'))
*/
/*
const getData = function(){
    return new Promise(function(resolve){
        resolve([ 1, 1, 2, 3, 5, 8, 13 ])
    })
}
*/
// const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))
//getData().then(data => console.log(data))
// Асинхронность 
/*
async function acyncExemple(){
    try{
        await delay(3000)
    const data = getData()
    console.log('Date: ', data)
    } catch(e){
        console.log(e)
    } finally{
        console.log('finally')
    }
}
acyncExemple()
*/