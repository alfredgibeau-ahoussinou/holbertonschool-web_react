import { render, screen } from '@testing-library/react';
import App from './App';

describe('App conditional rendering', () => {
  test('renders Login when isLoggedIn is false', () => {
    render(<App />);
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
  });
});


