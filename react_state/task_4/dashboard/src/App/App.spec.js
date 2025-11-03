import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

test('clicking a notification removes it and logs message', async () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  render(<App />)
  const firstItem = screen.getByText(/New course available/i)
  await userEvent.click(firstItem)
  expect(screen.queryByText(/New course available/i)).not.toBeInTheDocument()
  expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read')
  logSpy.mockRestore()
})

