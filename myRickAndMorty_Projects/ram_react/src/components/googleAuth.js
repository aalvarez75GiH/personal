import React from 'react'
import './styles/loginPage.css'
import authLogic from './authLogic'


class GoogleAuth extends React.Component {

    // state = { 
    //     isSignedIn: null,
    //     gMail: '',
    //     gId: '' 
    // }

    state = { isSignedIn: null }
    
    componentDidMount(){
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '893855487421-l0l6ejqncjds8145a9icsgurvsuhv37o.apps.googleusercontent.com',
                scope:'email'
            }).then(()=> {
                this.googleAuth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.googleAuth.isSignedIn.get()})
                //this.onAuthChange()      
                this.googleAuth.isSignedIn.listen(this.onAuthChange)
                console.log(this.state.isSignedIn)
            })
        })
    }

    onAuthChange = () => {
       this.setState({isSignedIn: this.googleAuth.isSignedIn.get()})
       const gMail = this.googleAuth.currentUser.Td.Ts.getEmail()
       const gId = this.googleAuth.currentUser.get().getId()
       console.log(this.state.isSignedIn)
       console.log(gMail)
       console.log(gId)
       console.log(this.state)
       authLogic(this.props.gettingToken,gMail,gId)
    }

    onSignInClick = (e) => {
        e.preventDefault()
        this.googleAuth.signIn()
        console.log(this.state)
        console.log(this.state.isSignedIn)
    } 
    
    onSignOutClick = (e) => {
        this.googleAuth.signOut()
        
    } 
    
    // const sendingToken = async(e) => {
    //     e.preventDefault()
    //     authLogic(gettingToken, emailTerm, passwordTerm)
    // }

    renderAuthButton() {
        if (this.state.isSignedIn === null){            
            return null

        }else if (this.state.isSignedIn){
            return (
                 <button className="googleBtnOut" onClick={this.onSignOutClick}>
                {/* <button className="ui red google button" onClick={(e)=> this.onSignOutClick(e)}> */}
                    <i className="google icon"></i>
                    Sign Out
                </button>
            ) 
        }else {
            return (
                //  <button className="googleBtnIn" onClick={ this.onSignInClick }>
                <button className="googleBtnIn" onClick={(e)=> this.onSignInClick(e)}>
                <i className="google icon"></i>
                Do you want to go with Google?
                </button>
            ) 
        }
    }

    render () {
        return <div>{ this.renderAuthButton() }</div>
    }

}



export default GoogleAuth

// ui red google button
// ui green google button