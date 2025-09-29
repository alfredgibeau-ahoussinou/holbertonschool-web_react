import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('title is always displayed', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('when displayDrawer=false, hides button, p and items', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('when displayDrawer=true, shows button, p and items', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    const list = screen.getByRole('list');
    expect(list.querySelectorAll('li').length).toBe(3);
  });

  test('when displayDrawer=true and notifications empty, shows empty text', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });
});


