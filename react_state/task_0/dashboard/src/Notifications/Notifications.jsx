import React from 'react'

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    // Permet de re-render si displayDrawer change (en plus des autres props)
    return nextProps.displayDrawer !== this.props.displayDrawer
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props
    return (
      <div>
        <p data-testid="menu-item" onClick={handleDisplayDrawer} style={{ cursor: 'pointer' }}>Your notifications</p>
        {displayDrawer && (
          <div role="dialog">
            <button aria-label="Close" onClick={handleHideDrawer}>x</button>
            <p>Here is the list of notifications</p>
          </div>
        )}
      </div>
    )
  }
}

export default Notifications

