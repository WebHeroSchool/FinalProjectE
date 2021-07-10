import React from 'react';
import ItemList from '../ItemList/ItemList';
import { InputItem, Footer } from '../Item/Item.js';

const App = () => (
  <div>
    <h1>Todos</h1>
    <InputItem />
    <ItemList />
    <Footer />
  </div>);

export default App;
