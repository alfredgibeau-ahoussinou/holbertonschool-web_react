import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <div className="root-notifications">
          <Notifications />
        </div>
        <Login />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;