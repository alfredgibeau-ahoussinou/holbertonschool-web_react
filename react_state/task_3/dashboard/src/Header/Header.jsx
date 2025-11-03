import React from 'react'
import AppContext from '../Context/context.js'

class Header extends React.Component {
  static contextType = AppContext

  render() {
    const { user, logOut } = this.context
    return (
      <header>
        <h1>Holberton Dashboard</h1>
        {user?.isLoggedIn && (
          <section id="logoutSection">
            <span>Welcome {user.email} (</span>
            <a href="#logout" onClick={(e) => { e.preventDefault(); logOut && logOut() }}>logout</a>
            <span>)</span>
          </section>
        )}
      </header>
    )
  }
}

export default Header

