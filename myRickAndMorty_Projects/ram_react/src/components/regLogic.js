const regLogic = async (nameTerm, emailTerm, passwordTerm, userType) => {
    console.log('i am regLogic')
    const name = nameTerm
    const email = emailTerm
    const password = passwordTerm
    console.log(userType)
    
    await fetch('https://rick-and-morty-auth-hwzvjwbox-aalvarez75gih.vercel.app/api/users', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body: JSON.stringify({ name, email, password, userType })
           
        })
        // .then(x => x.json())
        .then(res =>{
            console.log(res)
            if (res.status === 200){
                alert('User has been created successfully...')
            }
            if (res.status === 409){
                console.log('Welcome Back Google User...')
            }
        })

}

export default regLogic