import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders School Dashboard heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct text in app-body paragraph', () => {
    render(<App />);
    const bodyText = screen.getByText('Login to access the full dashboard');
    expect(bodyText).toBeInTheDocument();
  });

  test('renders correct text in app-footer paragraph', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(`Copyright ${currentYear} - holberton School`);
    expect(footerText).toBeInTheDocument();
  });

  test('renders image element', () => {
    render(<App />);
    const image = screen.getByAltText('holberton logo');
    expect(image).toBeInTheDocument();
  });

  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs).toHaveLength(1); // email input
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders 2 label elements with Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders button with OK text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
