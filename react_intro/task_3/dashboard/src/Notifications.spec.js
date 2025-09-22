import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

// Mock console.log
const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Notifications', () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  test('renders notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText('Here is the list of notifications');
    expect(title).toBeInTheDocument();
  });

  test('renders close button', () => {
    render(<Notifications />);
    const button = screen.getByLabelText(/close/i);
    expect(button).toBeInTheDocument();
  });

  test('renders 3 notification items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('logs close button click', () => {
    render(<Notifications />);
    const button = screen.getByLabelText(/close/i);
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
  });
});
