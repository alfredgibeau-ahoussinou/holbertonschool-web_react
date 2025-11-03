import React from 'react'
import Notifications from '../Notifications/Notifications.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayDrawer: false }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false })
  }

  render() {
    const { displayDrawer } = this.state
    return (
      <div>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <main>
          <h1>Holberton Dashboard</h1>
        </main>
      </div>
    )
  }
}

export default App

