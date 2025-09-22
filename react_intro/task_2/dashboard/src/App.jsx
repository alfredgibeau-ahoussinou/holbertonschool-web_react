import './App.css';
import holbertonLogo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  const currentYear = getCurrentYear();

  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="root-notifications">
          <Notifications />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {currentYear} - holberton School</p>
      </div>
    </div>
  );
}

export default App;