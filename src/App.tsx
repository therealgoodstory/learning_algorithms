import { Link } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Link to="/binary-search" className="main-nav__link">
        Binary Search
      </Link>
      <Link to="/moon-algorithm" className="main-nav__link">
        Moon Algorithm
      </Link>
    </div>
  );
}

export default App;
