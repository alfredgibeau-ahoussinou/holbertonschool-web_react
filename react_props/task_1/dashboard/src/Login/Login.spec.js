import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login/Login';

describe('Login component', () => {
  test('has 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByText(/email:|password:/i);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(1);
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('focuses input when its label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});


