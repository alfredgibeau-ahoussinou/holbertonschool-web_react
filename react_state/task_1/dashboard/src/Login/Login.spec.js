import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login.jsx'

test('submit button is disabled by default', () => {
  render(<Login />)
  const submit = screen.getByRole('button', { name: /submit/i })
  expect(submit).toBeDisabled()
})

test('button enabled only when email valid and password >= 8', async () => {
  render(<Login />)
  const email = screen.getByLabelText(/email/i)
  const password = screen.getByLabelText(/password/i)
  const submit = screen.getByRole('button', { name: /submit/i })

  await userEvent.type(email, 'invalid')
  await userEvent.type(password, '12345678')
  expect(submit).toBeDisabled()

  await userEvent.clear(email)
  await userEvent.type(email, 'test@example.com')
  expect(submit).toBeEnabled()
})

