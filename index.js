// Write your code here!

document.querySelector('main').remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('id', 'victory')

newHeader.innerHTML = 'Slav is the champion'
newHeader.textContent = 'Slav is the champion'
