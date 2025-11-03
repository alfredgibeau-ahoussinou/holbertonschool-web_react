import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login.jsx'

test('calls logIn with email and password on submit', async () => {
  const logIn = jest.fn()
  render(<Login logIn={logIn} email="" password="" />)
  const email = screen.getByLabelText(/email/i)
  const password = screen.getByLabelText(/password/i)
  const submit = screen.getByRole('button', { name: /submit/i })

  await userEvent.type(email, 'user@example.com')
  await userEvent.type(password, 'password123')
  await userEvent.click(submit)

  expect(logIn).toHaveBeenCalledWith('user@example.com', 'password123')
})

