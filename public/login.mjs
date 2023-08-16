document.querySelector('#loginForm').addEventListener('submit',(event)=>{
    event.preventDefault()

    const email = document.querySelector('#emailInput').value
    const password = document.querySelector('#passwordInput').value

    try {
        const resp = axios.post('/api/v1/mongoDB/login',{
            email: email,
            password: password
        })
        
        console.log('response: ', resp.status)

        if(resp.status === 200){
            window.location.href = '/index.html'
        }
    } catch (error) {
        console.log(error)
    }
})