import React, { useContext } from 'react'
import AppContext from '../Context/context.js'

function Footer() {
  const { user } = useContext(AppContext)
  return (
    <footer>
      <p>Copyright</p>
      {user?.isLoggedIn && (
        <p><a href="#contact">Contact us</a></p>
      )}
    </footer>
  )
}

export default Footer

