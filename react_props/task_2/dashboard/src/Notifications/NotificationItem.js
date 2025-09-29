function NotificationItem({ type = 'default', html = null, value = '' }) {
  const style = {
    color: type === 'urgent' ? '#e1003c' : '#1d0563',
  };

  if (html) {
    return (
      <li style={style} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  }
  return (
    <li style={style} data-notification-type={type}>{value}</li>
  );
}

export default NotificationItem;


