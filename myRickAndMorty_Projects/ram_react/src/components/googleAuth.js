import React from 'react'
import './styles/loginPage.css'
import authLogic from './authLogic'
import regLogic from './regLogic'


class GoogleAuth extends React.Component {

    state = { isSignedIn: null }

    componentDidMount(){
        console.log(this.props.isSignedOut)
        const getDataStorage = localStorage.getItem('user')
        console.log(getDataStorage)
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: '893855487421-l0l6ejqncjds8145a9icsgurvsuhv37o.apps.googleusercontent.com',
                    scope:'email'
                }).then(()=> {
                    this.googleAuth = window.gapi.auth2.getAuthInstance()
                    this.setState({isSignedIn: this.googleAuth.isSignedIn.get()})    
                    this.googleAuth.isSignedIn.listen(this.onAuthChange)
                    console.log(this.state.isSignedIn)
                })
            })
        //}
            
    }
      

    onAuthChange = async () => {
       this.setState({isSignedIn: this.googleAuth.isSignedIn.get()})
       const gMail = this.googleAuth.currentUser.Td.Ts.getEmail()
       const gId = this.googleAuth.currentUser.get().getId()
       const gname = this.googleAuth.currentUser.Td.Ts.getName()
       console.log(this.state.isSignedIn)
       console.log(gMail)
       console.log(gId)
       console.log(gname)
       console.log(this.state)
       await regLogic(gname, gMail, gId)
       await authLogic(this.props.gettingToken, gMail, gId)
    }

    onSignInClick = (e) => {
        e.preventDefault()
        this.googleAuth.signIn()
    } 
    
    onSignOutClick = () => {
        //e.preventDefault()
        this.googleAuth.signOut().then(()=> {
            alert('User has signed Out...')
        })
    } 
    
    renderAuthButton() {
        if (this.state.isSignedIn === null){            
            return null
 
        }else if (this.state.isSignedIn){
            return (
                 <button className="googleBtnOut" onClick={this.onSignOutClick}>
                {/* <button className="ui red google button" onClick={(e)=> this.onSignOutClick(e)}> */}
                    <i className="google icon"></i>
                    Log Out
                </button>
            ) 
        }else {
            return (
                <button className="googleBtnIn" onClick={(e)=> this.onSignInClick(e)}>
                <i className="google icon"></i>
                Login with Google
                </button>
            ) 
        }
    }

    render () {
        return <div>{ this.renderAuthButton() }</div>
    }

}



export default GoogleAuth