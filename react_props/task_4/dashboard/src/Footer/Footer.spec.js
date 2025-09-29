import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component (task_4)', () => {
  test('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`Copyright ${currentYear} - holberton School`, 'i')))
      .toBeInTheDocument();
  });
});

// Empty initial test file for Footer component


