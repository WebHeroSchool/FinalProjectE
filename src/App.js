import logo from './logo.svg';
import './App.css';
const wrd = 'Hello';
const num = 2;
const sign = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'red',
          fontSize: 40
        }}>
          Hello world!
        </p>
        <p>
          {wrd}
          {num}
          {2+2}
        </p>
        <div>
          {undefined}
          {sign ? 'Sign is true' : 'Sign is false'}
          {sign && 'Sign is true'}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
