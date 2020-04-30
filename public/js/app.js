const productForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')




productForm.addEventListener('submit', (e) => {
    e.preventDefault()

    _id = search.value

    messageOne.textContent = _id


    fetch('/catalogue?_id=' + _id).then((response) => {
        response.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
                
            } else {
                messageOne.textContent = data
                
            }
            
        })
    })
})