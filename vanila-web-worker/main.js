'use strict'

CSS.paintWorklet.addModule('worklet.js')

document.querySelector('.btn1').addEventListener('click', doCalculation)
document.querySelector('.btn2').addEventListener('click', setColor)


function setColor() {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360},50%, 50%)`

}

function doCalculation() {
    const worker = new Worker('./worker.js')
    const elP = document.querySelector('.calculation')
    elP.innerText = 'processing'
    worker.postMessage(10000000000)
worker.onmessage=()=>{

    elP.innerText = 'done'
}
    



    setTimeout(() => {
        document.querySelector('.calculation').innerText = ''
    }, 3000)
}