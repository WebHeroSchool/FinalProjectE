// <<<<<<< E
import React from 'react';

const ItemList = () => (<ul>
  <li>1</li>
  <li>2</li>
</ul>);

const element = (<h1>Hello World!</h1>);

const App = () => (<div>
  {element}
  <ItemList />
</div>);
// =======
// import logo from './logo.svg';
// import './App.css';
// import count from './numbers.js';
// import { length } from './numbers.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p style={{
//           color: 'red',
//           fontSize: 40
//         }}>
//           Hello world!
//         </p>
//         <p>
//           {count*length}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// >>>>>>> main

export default App;
