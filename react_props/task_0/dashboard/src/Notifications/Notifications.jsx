import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
