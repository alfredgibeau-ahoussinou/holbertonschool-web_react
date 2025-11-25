import { memo, useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { markNotificationAsRead } from '../../features/notifications/notificationsSlice';
import NotificationItem from '../NotificationItem/NotificationItem';
import closeIcon from '../../assets/close-icon.png';

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
    border: '3px dotted #e1003c',
    padding: '5px',
    fontFamily: "'Roboto', sans-serif",
    width: '25%',
    float: 'right',
    marginTop: '20px',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
  notificationTitle: {
    float: 'right',
    position: 'absolute',
    right: '10px',
    top: '2px',
    cursor: 'pointer',
  },
  notificationsP: {
    margin: 0,
  },
  notificationsButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '5px',
    top: '5px',
    background: 'transparent',
    border: 'none',
  },
});

const Notifications = memo(function Notifications () {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);

  const DrawerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const handleMarkNotificationAsRead = useCallback((id) => {
    dispatch(markNotificationAsRead(id));
  }, [dispatch]);

  return (
    <>
      <div className={css(styles.notificationTitle)} onClick={handleToggleDrawer}>
        Your notifications
      </div>
      <div className={css(styles.notifications, isVisible && styles.visible)} ref={DrawerRef} >
        {notifications.length > 0 ? (
          <>
            <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
            <button className={css(styles.notificationsButton)} onClick={handleToggleDrawer} aria-label="Close">
              <img src={closeIcon} alt="close icon" />
            </button>
            <ul>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={handleMarkNotificationAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <p className={css(styles.notificationsP)}>No new notifications for now</p>
        )}
      </div>
    </>
  );
});

export default Notifications;