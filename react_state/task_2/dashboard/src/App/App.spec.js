import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

test('App shows Login by default and CourseList after valid submit', async () => {
  render(<App />)
  expect(screen.queryByText(/CourseList/)).not.toBeInTheDocument()

  const email = screen.getByLabelText(/email/i)
  const password = screen.getByLabelText(/password/i)
  const submit = screen.getByRole('button', { name: /submit/i })

  await userEvent.type(email, 'user@example.com')
  await userEvent.type(password, 'password123')
  await userEvent.click(submit)

  expect(screen.getByText(/CourseList/)).toBeInTheDocument()
})

