import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component (task_4)', () => {
  test('has labels, inputs and button; focuses input on label click', async () => {
    const user = userEvent.setup();
    render(<Login />);
    expect(screen.getAllByText(/email:|password:/i).length).toBe(2);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
    await user.click(screen.getByText(/email:/i));
    expect(emailInput).toHaveFocus();
  });
});


