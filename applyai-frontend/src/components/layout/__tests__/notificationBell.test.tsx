import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationBell from '../notificationBell';

describe('NotificationBell', () => {
  it('shows notifications menu on bell click', async () => {
    render(<NotificationBell />);
    const button = screen.getByRole('button');
    expect(screen.queryByText(/Notifications/i)).not.toBeInTheDocument();
    await userEvent.click(button);
    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
  });
});
