import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import { setToken, getToken, deleteToken, initAxiosInterceptors } from './helpers/auth-helpers'
import Nav from './components/nav'
import Loading from './components/loading'
import Main from './components/main'
import Error from './components/error'

import Login from './views/login'
import SignUp from './views/signUp'
import Feed from './views/feed'
import Upload from './views/upload'
import Explore from './views/explore'
import PostView from './views/postView'
import Profile from './views/profile'

initAxiosInterceptors()

const App = () => {

const [ user, setUser ] = useState(null)
const [loadingUser, setLoadingUser] = useState(true)
const [error, setError] = useState(null)

useEffect(()=> {
  
  const loadingUser = async() => {
    if (!getToken()){
      setLoadingUser(false)
      return
    }
    
    try {
      const { data } = await axios.get('/api/usuarios/whoami')   
      setUser(data)
      setLoadingUser(false)
    } catch (error) {
        console.log(error)
    }
  }
  
  loadingUser()
  
},[])

const login = async (email, password) => {
  const { data } = await axios.post('/api/usuarios/login', {
    email,
    password
  })
  setUser(data.usuario)
  setToken(data.token)
}

const signUp = async (user) => {
  const { data } = await axios.post('/api/usuarios/signup', user)
  setUser(data.usuario)
  setToken(data.token)
} 
const onHandleLogout = () => {
  deleteToken()  
  setUser(null)
}

const showError = (message) => {
  setError(message)
}

const hideError = () => {
  setError(null)
}


if (loadingUser){
  return(
    <Main center={ true }>
      <Loading/>
    </Main>
  ) 
}

return (
  <Router>
    <React.Fragment>
        <Nav user={ user } />
        <Error message={error} hideError={hideError}/>
        { user ? <LoginRoutes 
        showError={showError}
        onHandleLogout={ onHandleLogout } 
        user={ user }/> : <LogoutRoutes 
        login={login} signUp={signUp} 
        showError={showError} 
        />}
    </React.Fragment>
  </Router>
)

}

const LoginRoutes = ({showError, user, onHandleLogout}) => {
  return (    
      <Switch>
        <Route 
        path="/upload"
        render={ props => <Upload { ...props } showError={ showError }/>}/>
        
        <Route 
        path="/explore" 
        render={ props => <Explore { ...props } showError={ showError }/>}/>
        
        <Route 
        path="/profile/:username" 
        render={ props => <Profile { ...props } showError={ showError } user={ user } onHandleLogout={ onHandleLogout } />}/>
        
        <Route 
        path="/post/:id" 
        render={ props => <PostView { ...props } showError={ showError } user={ user } />}/>
        
        <Route 
        path="/" 
        render={ props => <Feed { ...props } showError={ showError } user={ user } />} default/>
        
      </Switch>
  )
}

const LogoutRoutes = ({login, signUp, showError}) => {
return (
  <Switch>
    <Route path="/login" render={ props => <Login {...props} login={login} showError={showError}/>}/>
    <Route render={ props => <SignUp {...props} signUp={signUp} showError={showError}/>} default />
  </Switch> 
)
}
export default App