//const API = 'http://localhost:3000/api/char'
const API = 'https://rick-and-morty-auth-8grodfuvo.vercel.app/api/char'
let array = []

const fetchData = async(API) => {
    return new Promise((res,rej) =>{
        fetch(API) 
        .then(response => response.json())
        .then(x => {
            res(x)
        })
    })
    .catch(err => console.error(err))
}


const stringToHtml = (s) => { 

    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    return doc.body.firstChild;

}

const renderElements = (ID, image,name,gender,dimension) => {
    const elemento = stringToHtml(
        `<div class="container selected" value="${ID}">
            <picture class="characterPic">
                <img src="${image}" alt="">
            </picture>
            <ul class="character-info">
                <li class="details liName">${name}</li>
                <li class="details liGender">${gender}</li>
                <li class="details liDim"> ${dimension}</li>
            </ul>
            <button id="btnId${ID}" type="submit" class="classBtn btn1Style" value="${ID}"> Out</button>
        </div>`
    )
    app.appendChild(elemento)
}

const renderLogin = async() => {
    const loginV = document.getElementById('login-view') 
    console.log(loginV)
    app.innerHTML = loginV.innerHTML
}

 const logOutBtn = () => {
     const logOutBtn = document.getElementById('logOutBtn')
     console.log(logOutBtn)
     logOutBtn.addEventListener("click", ()=>{
        const gettingFooter = document.getElementById('footer')
        console.log(gettingFooter)
        document.body.removeChild(gettingFooter)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        renderLogin()
     })
 }


const validateForms = () =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    //const url_login = 'http://localhost:3000/api/auth/login' 
    const url_login = 'https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/login' 
    
    
    fetch(url_login, {
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
        localStorage.setItem('token', response.token)
        return response.token
    })
    
    .then(token => {
        //return fetch('http://localhost:3000/api/auth/me',{
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
    localStorage.setItem('user', JSON.stringify(fetchedUser) )
    user = fetchedUser
    app.removeChild(app.firstElementChild)
    controlRender()          
})
}
    

const clickId = () => {
    const gettingOuts = document.querySelectorAll('.classBtn')
    console.log(gettingOuts)
    gettingOuts.forEach(x => {
        const father = x.parentElement
        father.classList.remove('selected')
        x.addEventListener("click", () => {
        father.classList.add('selected') 
        console.log(' Character #: ' + ' ' + x.value + ' ' + 'has been deleted')
        console.log(x.value)
        const getSelected = document.querySelectorAll('.selected')
        console.log(getSelected)
        const getApp = document.getElementById('app')
        getApp.removeChild(getSelected[0])
       })
        console.log(x.value)
    })
    
}
 const renderFooter = () => {
     const elemento2 = stringToHtml(
        `<footer id="footer">
            <button id="logOutBtn" class="testBtn">LogOut</button>
        </footer>`
        )
    document.body.appendChild(elemento2)
 }  

const controlRender = async() => {

    const app = document.getElementById('app')
    const data = await fetchData(API)
    array = data
    
    const mapArray = await Promise.all(array.results.map(async getData => {
        if (getData.origin.url != "" && getData.location.url != ""){
            const root = await fetchData(getData.origin.url)
            renderElements(getData.id,getData.image,getData.name,getData.gender,root.dimension)
        }
        if(getData.origin.url === "" && getData.location.url != ""){
            root = await fetchData(getData.location.url)
            renderElements(getData.id,getData.image,getData.name,getData.gender,root.dimension)
        }
        clickId()
    }))
    renderFooter()
    logOutBtn()
}

const renderApp = async() => {
    try{
        await renderLogin()
        
        
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()
    
}



