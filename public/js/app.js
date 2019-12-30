const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const mgsOne = document.querySelector('#message-1')
const mgsTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    mgsOne.textContent = 'Loading...';
    mgsTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                mgsOne.textContent = data.error
            } else {
                mgsOne.textContent = data.location
                mgsTwo.textContent = data.forecast
            }
        })
    })
})