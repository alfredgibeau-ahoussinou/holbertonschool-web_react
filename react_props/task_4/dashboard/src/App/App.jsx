import '../App/App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { Fragment } from 'react';

function App() {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' },
  ];
  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  const isLoggedIn = false;

  return (
    <div className="App">
      <Fragment>
        <Header />
        <div className="root-notifications">
          <Notifications notifications={notificationsList} />
        </div>
        {isLoggedIn ? (
          <CourseList courses={coursesList} />
        ) : (
          <Login />
        )}
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;


