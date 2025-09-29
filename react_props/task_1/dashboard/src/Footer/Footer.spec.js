import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';

describe('Footer component', () => {
  test('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const p = screen.getByText(new RegExp(`Copyright ${currentYear} - holberton School`, 'i'));
    expect(p).toBeInTheDocument();
  });
});


