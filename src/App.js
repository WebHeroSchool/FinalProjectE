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

export default App;
