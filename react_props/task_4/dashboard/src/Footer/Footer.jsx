import './Footer.css';
import { getCurrentYear } from '../utils/utils';

function Footer() {
  const currentYear = getCurrentYear();
  return (
    <div className="App-footer">
      <p>Copyright {currentYear} - holberton School</p>
    </div>
  );
}

export default Footer;


