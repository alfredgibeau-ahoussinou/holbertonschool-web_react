import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component (task_4)', () => {
  test('renders logo and heading', () => {
    render(<Header />);
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });
});


