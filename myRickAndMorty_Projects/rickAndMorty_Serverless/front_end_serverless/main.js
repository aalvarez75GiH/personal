const API = 'https://rick-and-morty-serverless.aalvarez75gih.vercel.app/api/routes/char/'

let array = []

const fetchData = async(url_api) => {
    return new Promise((res,rej) =>{
        fetch(url_api) 
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
        renderLogin()
     })
 }

 

const validateForms = async() =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log(email)
    console.log(password)
    if (email === "guest@rickandmorty.com" && password === "1234" ){
        console.log('You are Rick and Morty...')
        alert('You are Rick and Morty...')
        const lView = document.getElementById('login-view')
        app.removeChild(app.firstElementChild)
        controlRender()
    }
    if (email != "guest@rickandmorty.com" || password != "1234" ){
        alert('Password or Username Incorrect!!')
        renderLogin()
    }
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



