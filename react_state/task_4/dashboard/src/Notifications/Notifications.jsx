import React, { PureComponent } from 'react'

class Notifications extends PureComponent {
  render() {
    const { listNotifications = [], markNotificationAsRead = () => {} } = this.props
    return (
      <ul>
        {listNotifications.map(n => (
          <li key={n.id} onClick={() => markNotificationAsRead(n.id)}>{n.value}</li>
        ))}
      </ul>
    )
  }
}

export default Notifications

