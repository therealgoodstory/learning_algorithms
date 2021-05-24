import { Link } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Link to="/binary-search" className="main-nav__link">
        Binary Search
      </Link>
    </div>
  );
}

export default App;
