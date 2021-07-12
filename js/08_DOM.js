// const heading = document.getElementById('hello')
// const heading2 = document.querySelector('.h2-class')
// const h2List = document.querySelectorAll('h2')
// const heading3 = h2List[1]

// не работает
/*
const link = heading.children[0]
link.addEventListener = ('click', (event) =>{
    event.preventDefolt()
    console.log('Click on link', event.target.getAttribute('href'))

    const url = event.target.getAttribute('href')
    window.location = url
})
*/

// setTimeout(() => {
//     addStylesTo(heading.querySelector('a'), 'JavaScript')
// }, 1500)

// setTimeout(() => {
//     addStylesTo(heading3, 'Практикуйся', 'blue')
// }, 3000)

// setTimeout(() => {
//     addStylesTo(heading2, 'И все получится', 'yellow', '2rem')
// }, 4500)

// function addStylesTo (node, text, color = 'red', fontSize) {
//     node.textContent = text
//     node.style.color = color
//     node.style.textAlign = 'center'
//     node.style.background = 'black'
//     node.style.padding = fontSize
//     node.style.display = 'block'
//     node.style.width = '100%'
//     // false: '', undefined, null, 0, false
//     if(fontSize){
//         node.style.fontSize = fontSize
//     }
// }

// heading3.onclick = () =>{
//     if(heading3.style.color === 'blue'){
//         heading3.style.color = '#000'
//         heading3.style.background = '#fff'
//     } else{
//         heading3.style.color = 'blue'
//         heading3.style.background = '#000'
//     }
// }

// heading2.addEventListener('dblclick', () =>{
//     if(heading2.style.color === 'yellow'){
//         heading2.style.color = '#000'
//         heading2.style.background = '#fff'
//     } else{
//         heading2.style.color = 'yellow'
//         heading2.style.background = '#000'
//     }
// })

//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('#sub-hello') // возвращает всегда 1 элемент
//const heading2 = document.querySelector('h2')
//console.dir(heading2)
//const heading3 = heading2.nextElementSibling
//console.log(h2List)
//console.log(heading3)

