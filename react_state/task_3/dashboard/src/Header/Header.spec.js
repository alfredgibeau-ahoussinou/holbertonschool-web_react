import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header.jsx'
import AppContext, { defaultUser } from '../Context/context.js'

test('logoutSection not rendered with default context', () => {
  render(
    <AppContext.Provider value={{ user: { ...defaultUser }, logOut: () => {} }}>
      <Header />
    </AppContext.Provider>
  )
  expect(screen.queryByRole('link', { name: /logout/i })).not.toBeInTheDocument()
})

test('logoutSection rendered when user is logged in', () => {
  render(
    <AppContext.Provider value={{ user: { email: 'u@e.com', password: '12345678', isLoggedIn: true }, logOut: () => {} }}>
      <Header />
    </AppContext.Provider>
  )
  expect(screen.getByText(/Welcome u@e.com/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument()
})

test('clicking logout calls logOut spy', async () => {
  const logOut = jest.fn()
  render(
    <AppContext.Provider value={{ user: { email: 'u@e.com', password: '12345678', isLoggedIn: true }, logOut }}>
      <Header />
    </AppContext.Provider>
  )
  await userEvent.click(screen.getByRole('link', { name: /logout/i }))
  expect(logOut).toHaveBeenCalled()
})

