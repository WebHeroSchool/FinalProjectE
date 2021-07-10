import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';

const todoItem = 'Написать новое приложение';
const App = () => (
  <div>
    <h1>Todos</h1>
    <InputItem />
    <ItemList todoItem={todoItem}/>
    <Footer count={3} />
  </div>);

export default App;