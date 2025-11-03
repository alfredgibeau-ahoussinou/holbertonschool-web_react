import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Notifications from './Notifications.jsx'

test('clicking on menu item calls handleDisplayDrawer', async () => {
  const handleDisplayDrawer = jest.fn()
  render(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} />)
  await userEvent.click(screen.getByTestId('menu-item'))
  expect(handleDisplayDrawer).toHaveBeenCalled()
})

test('clicking on close button calls handleHideDrawer', async () => {
  const handleHideDrawer = jest.fn()
  render(<Notifications displayDrawer={true} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawer} />)
  await userEvent.click(screen.getByRole('button', { name: /close/i }))
  expect(handleHideDrawer).toHaveBeenCalled()
})

