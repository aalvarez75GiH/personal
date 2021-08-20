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

}

export default regLogic