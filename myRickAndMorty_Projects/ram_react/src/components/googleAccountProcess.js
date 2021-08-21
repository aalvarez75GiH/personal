
const googleProcess = () => {
    window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
            client_id: '893855487421-l0l6ejqncjds8145a9icsgurvsuhv37o.apps.googleusercontent.com',
            scope:'email'
        }).then(()=> {
            const googleAuth = window.gapi.auth2.getAuthInstance()
            googleAuth.signOut()       
            // this.setState({isSignedIn: this.googleAuth.isSignedIn.get()})
            // //this.onAuthChange()      
            // this.googleAuth.isSignedIn.listen(this.onAuthChange)
            // console.log(this.state.isSignedIn)
        })
    })
}


//  onSignInClick = (e) => {
//      e.preventDefault()
//      this.googleAuth.signIn()
//      console.log(this.state)
//      console.log(this.state.isSignedIn)
//  } 
 
//  onSignOutClick = (e) => {
//      this.googleAuth.signOut()
     
//  } 

 export default googleProcess