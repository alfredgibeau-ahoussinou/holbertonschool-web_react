import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders labels, inputs and button', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});

