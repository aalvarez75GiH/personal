
 const authLogic = (gettingToken, emailTerm, passwordTerm) => {
    console.log('i am logic')
    const email = emailTerm
    const password = passwordTerm
    
        fetch('https://rick-and-morty-auth-hwzvjwbox-aalvarez75gih.vercel.app/api/auth/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body: JSON.stringify({ email, password })
           
        })
        .then(res => {
            if (res.status === 404){
                gettingToken(null)
                alert('User not found...' + res.status)
                //res.status(404).send('user Not Found');
            }
            return res.json()
        })
        .then(response => {
            if (response.token){
                localStorage.setItem('token', response.token)
                localStorage.setItem('userType', response.type)
                console.log(response.type)
                gettingToken(response.token, response.type)
                return response.token
            }   
        })
        .then(token => {
           return fetch('https://rick-and-morty-auth-hwzvjwbox-aalvarez75gih.vercel.app/api/auth/me',{
                method:'GET',
                headers: {
                'Content-Type': 'application/json',
                authorization: token,
            },
        })
        })
        .then(x => x.json())
        .then(fetchedUser => {
            localStorage.setItem('user', JSON.stringify(fetchedUser))          
        })
}

export default authLogic
