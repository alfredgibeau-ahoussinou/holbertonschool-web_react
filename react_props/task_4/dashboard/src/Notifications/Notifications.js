import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ notifications = [] }) {
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  const items = notifications.length ? notifications : [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  return (
    <div className="notification-items">
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
    </div>
  );
}

export default Notifications;


