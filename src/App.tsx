import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/binary-search"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
