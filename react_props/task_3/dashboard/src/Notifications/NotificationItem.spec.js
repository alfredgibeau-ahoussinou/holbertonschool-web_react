import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders default type item in blue with data attribute', () => {
    render(<NotificationItem type="default" value="Test" />);
    const li = screen.getByText('Test');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li).toHaveStyle({ color: '#1d0563' });
  });

  test('renders urgent type item in red with data attribute', () => {
    render(<NotificationItem type="urgent" value="Urgent" />);
    const li = screen.getByText('Urgent');
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
    expect(li).toHaveStyle({ color: '#e1003c' });
  });
});


