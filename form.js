const named = document.getElementById('name')
const email = document.getElementById('mail')
const telephone = document.getElementById('phone')
const form = document.getElementById('form')
const errorMesage = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []

    if(named.value === '' || named.value == null) {
        message.push('Требуется имя, лох')
    }

    if(message.length > 0) {
        e.preventDefault()
        errorMesage.innerText = message.join(', ')
    }
})


console.log('hello');