import React from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

class Login extends React.Component {
  constructor(props) {
    super(props)
    const { email = '', password = '' } = props
    this.state = {
      email,
      password,
      enableSubmit: emailRegex.test(email) && password.length >= 8,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    const { logIn = () => {} } = this.props
    const { email, password } = this.state
    logIn(email, password)
  }

  handleChangeEmail(e) {
    const email = e.target.value
    this.setState(prev => ({
      email,
      enableSubmit: emailRegex.test(email) && prev.password.length >= 8,
    }))
  }

  handleChangePassword(e) {
    const password = e.target.value
    this.setState(prev => ({
      password,
      enableSubmit: emailRegex.test(prev.email) && password.length >= 8,
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

