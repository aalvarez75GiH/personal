const regLogic = (nameTerm, emailTerm, passwordTerm) => {
    console.log('i am logic')
    const name = nameTerm
    const email = emailTerm
    const password = passwordTerm
    
    fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/users', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body: JSON.stringify({ name, email, password })
           
        })
        // .then(x => x.json())
        .then(res =>{
            console.log(res)
            if (res.status === 200){
                alert('User has been created successfully...')
            }
        })
        // .then(res => {
        //     if (res.status === 404){
        //         gettingData(null)
        //         alert('User not found...' + res.status)
        //     }
        //     return res.json()
        // })
        // .then(response => {
        //     if (response.token){
        //         localStorage.setItem('token', response.token)
        //         gettingData(response.token)
        //         return response.token
        //     }   
        // })
        // .then(token => {
        //    return fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/me',{
        //         method:'GET',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         authorization: token,
        //     },
        // })
        // })
        // .then(x => x.json())
        // .then(fetchedUser => {
        //     localStorage.setItem('user', JSON.stringify(fetchedUser))          
        // })    
    
    
    
    
    
    
    
    
    
    
    
    // fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/login', {
        //     method:'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     mode:'cors',
        //     body: JSON.stringify({ email, password })
           
        // })
        // .then(res => {
        //     if (res.status === 404){
        //         gettingData(null)
        //         alert('User not found...' + res.status)
        //         //res.status(404).send('user Not Found');
        //     }
        //     return res.json()
        // })
        // .then(response => {
        //     if (response.token){
        //         localStorage.setItem('token', response.token)
        //         gettingData(response.token)
        //         return response.token
        //     }   
        // })
        // .then(token => {
        //    return fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/me',{
        //         method:'GET',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         authorization: token,
        //     },
        // })
        // })
        // .then(x => x.json())
        // .then(fetchedUser => {
        //     localStorage.setItem('user', JSON.stringify(fetchedUser))          
        // })
}

export default regLogic