 
 
 
 const authLogic = (gettingData, emailTerm, passwordTerm) => {
    console.log('i am logic')
    const email = emailTerm
    const password = passwordTerm
        
        fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body: JSON.stringify({ email, password })
           
        })
        .then(res => {
            if (res.status === 404){
                alert('User not found...')
            }
            return res.json()
        })
        .then(response => {
            if (response.token){
                localStorage.setItem('token', response.token)
                gettingData(response.token)
                return response.token
            }   
        })
        .then(token => {
           return fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/me',{
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
