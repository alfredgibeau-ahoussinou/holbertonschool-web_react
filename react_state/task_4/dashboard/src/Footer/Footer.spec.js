import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer.jsx'
import AppContext, { defaultUser } from '../Context/context.js'

test('Contact us not shown when logged out', () => {
  render(
    <AppContext.Provider value={{ user: { ...defaultUser }, logOut: () => {} }}>
      <Footer />
    </AppContext.Provider>
  )
  expect(screen.queryByText(/Contact us/i)).not.toBeInTheDocument()
})

test('Contact us shown when logged in', () => {
  render(
    <AppContext.Provider value={{ user: { email: 'u@e.com', password: '12345678', isLoggedIn: true }, logOut: () => {} }}>
      <Footer />
    </AppContext.Provider>
  )
  expect(screen.getByText(/Contact us/i)).toBeInTheDocument()
})

