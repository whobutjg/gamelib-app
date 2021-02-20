import { Link } from 'react-router-dom';
import './App.css';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
     <nav>
      <Link to='/'>Home</Link> {' '}
      <Link to='/games'>Games</Link> {' '}
      <Link to='/newgame'>New Game</Link>
     </nav>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
