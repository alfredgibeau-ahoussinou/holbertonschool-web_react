import React from 'react'
import AppContext, { defaultUser } from '../Context/context.js'
import Login from '../Login/Login.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.state = {
      user: { ...defaultUser },
      logOut: this.logOut,
    }
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } })
  }

  logOut() {
    this.setState({ user: { ...defaultUser } })
  }

  render() {
    const { user } = this.state
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div>
          {user.isLoggedIn ? (
            <p>CourseList</p>
          ) : (
            <Login logIn={this.logIn} email={user.email} password={user.password} />
          )}
        </div>
      </AppContext.Provider>
    )
  }
}

export default App

