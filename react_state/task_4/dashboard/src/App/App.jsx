import React from 'react'
import AppContext, { defaultUser } from '../Context/context.js'
import Footer from '../Footer/Footer.jsx'

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
]

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this)
    this.state = {
      user: { ...defaultUser },
      logOut: this.logOut,
      notifications: notificationsList,
      courses: coursesList,
    }
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } })
  }

  logOut() {
    this.setState({ user: { ...defaultUser } })
  }

  markNotificationAsRead(id) {
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`)
    this.setState(prev => ({ notifications: prev.notifications.filter(n => n.id !== id) }))
  }

  render() {
    const { user, notifications } = this.state
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div>
          <ul>
            {notifications.map(n => (
              <li key={n.id} onClick={() => this.markNotificationAsRead(n.id)}>{n.value}</li>
            ))}
          </ul>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App

