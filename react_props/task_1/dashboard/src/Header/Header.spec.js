import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

describe('Header component', () => {
  test('contains the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('contains the heading with correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});


