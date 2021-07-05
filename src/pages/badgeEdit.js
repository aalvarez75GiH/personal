import React from 'react'
import header from '../images/platziconf-logo.svg'
import '../pages/styles/badgeEdit.css'
import Badge from '../components/badge'
import BadgeForm from '../components/badgeForm'
import api from '../api'
import PageLoading from '../components/pageLoading'
import PageError from '../components/pageError'


class BadgeEdit extends React.Component {
        
    state = {
      loading: true,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
        urlAvatar:'https://www.gravatar.com/avatar/'
      },
    }

    componentDidMount(){
      this.fetchData()
    }

    fetchData = async() => {
      this.setState({
          loading: true, 
          error: null    
      })
      try {
            const data = await api.badges.read(
            this.props.match.params.badgeId
          )
          this.setState({ loading: false, form: data })
      } catch (error) {
          this.setState({ loading:false, error: error })
      }
  }

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        })
      }

      handleSubmit = async(event) => {
      event.preventDefault();
       
        this.setState({ 
          loading:true, 
          error: null 
        })
        
        try {
          await api.badges.update(this.props.match.params.badgeId, this.state.form)
          this.setState({ loading: false })
          this.props.history.push('/badges')
        } catch (error) {
          this.setState({ loading:false, error: error })
        }
      }

    render() {
      if (this.state.loading){
        return <PageLoading />
      }
      if (this.state.error) {
        return <PageError error={ this.state.error }/>
      }
        return (
            <React.Fragment>
             
                <div className="badgeEdit__hero">
                    <img className="badgeEdit__hero-image img-fluid" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName} 
                                avatarURL="https://www.gravatar.com/avatar/4fbc8f296aafa14797c326326c4b5b14" 
                                job={this.state.form.jobTitle} 
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}/>
                        </div>
                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm  
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            onSubmit={this.handleSubmit}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default BadgeEdit