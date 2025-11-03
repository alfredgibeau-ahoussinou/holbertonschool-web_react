import React from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  validate(email, password) {
    return emailRegex.test(email) && password.length >= 8
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    this.setState({ isLoggedIn: true })
  }

  handleChangeEmail(e) {
    const email = e.target.value
    this.setState(prev => ({
      email,
      enableSubmit: this.validate(email, prev.password),
    }))
  }

  handleChangePassword(e) {
    const password = e.target.value
    this.setState(prev => ({
      password,
      enableSubmit: this.validate(prev.email, password),
    }))
  }

  render() {
    const { email, password, enableSubmit } = this.state
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={email} onChange={this.handleChangeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={password} onChange={this.handleChangePassword} />
        <input type="submit" value="Submit" disabled={!enableSubmit} />
      </form>
    )
  }
}

export default Login

