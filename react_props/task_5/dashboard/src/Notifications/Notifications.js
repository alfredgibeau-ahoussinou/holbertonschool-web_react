import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ notifications, displayDrawer = false }) {
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  const items = Array.isArray(notifications)
    ? notifications
    : [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ];

  return (
    <div>
      <div className="notification-title">Your notifications</div>
      {displayDrawer && (
        <div className="notification-items">
          {items.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={handleCloseClick}
              >
                <img src={closeIcon} alt="close icon" />
              </button>
              <ul>
                {items.map((item) => (
                  <NotificationItem key={item.id} type={item.type} value={item.value} html={item.html} />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Notifications;


