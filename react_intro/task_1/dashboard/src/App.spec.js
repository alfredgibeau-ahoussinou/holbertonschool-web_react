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
});
