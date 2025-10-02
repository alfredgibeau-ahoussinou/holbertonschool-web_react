import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';
import { getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders copyright text with current year using getFooterCopy(true)', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const expectedCopy = getFooterCopy(true);
    const p = screen.getByText(`Copyright ${currentYear} - ${expectedCopy}`);
    expect(p).toBeInTheDocument();
  });
});


