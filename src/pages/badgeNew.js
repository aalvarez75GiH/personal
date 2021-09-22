import React from 'react';
import api from '../api';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/badgeForm';
import PageLoading from '../components/pageLoading';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })
      this.props.history.push('/badges') //this is a React router method that change route
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }


  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FisrtName'}
                lastName={this.state.form.lastName || 'LastName'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'name@email.com'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>    
              <BadgeForm
                onChange={ this.handleChange } //For handling text inputs changes
                onSubmit={ this.handleSubmit } //For handling the form submit
                formValues={ this.state.form }
                error= { this.state.error }
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
