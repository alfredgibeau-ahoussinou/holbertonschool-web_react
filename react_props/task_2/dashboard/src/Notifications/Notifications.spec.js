import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('displays 3 items with appropriate text by default', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    // third item is HTML, check by role/list length
    const list = screen.getByRole('list');
    expect(list.querySelectorAll('li').length).toBe(3);
  });

  test('renders items passed via notifications prop', () => {
    const notifications = [
      { id: 10, type: 'default', value: 'Item 1' },
      { id: 11, type: 'urgent', value: 'Item 2' },
      { id: 12, type: 'urgent', html: '<strong>Item 3</strong>' },
    ];
    render(<Notifications notifications={notifications} />);
    const list = screen.getByRole('list');
    expect(list.querySelectorAll('li').length).toBe(3);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});


