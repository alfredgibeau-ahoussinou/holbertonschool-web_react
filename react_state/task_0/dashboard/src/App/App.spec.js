import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

test('clicking on menu item shows notifications (calls handleDisplayDrawer via prop)', async () => {
  render(<App />)
  const menu = await screen.findByTestId('menu-item')
  await userEvent.click(menu)
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

