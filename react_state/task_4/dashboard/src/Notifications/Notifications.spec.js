import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Notifications from './Notifications.jsx'

test('clicking item calls markNotificationAsRead with id', async () => {
  const mark = jest.fn()
  const list = [
    { id: 10, type: 'default', value: 'Hello' },
  ]
  render(<Notifications listNotifications={list} markNotificationAsRead={mark} />)
  await userEvent.click(screen.getByText('Hello'))
  expect(mark).toHaveBeenCalledWith(10)
})

