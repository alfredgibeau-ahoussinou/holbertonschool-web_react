import '../App/App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { Fragment } from 'react';

function App() {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' },
  ];

  return (
    <div className="App">
      <Fragment>
        <Header />
        <div className="root-notifications">
          <Notifications notifications={notificationsList} />
        </div>
        <Login />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;


