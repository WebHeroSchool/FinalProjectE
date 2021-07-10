import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';

const todoItem = 'Написать новое приложение';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение'
    },
    {
      value: 'Украсть рецепт крабсбургера'
    },
    {
      value: 'Захватить планету'
    }
  ];

  return (
  <div>
    <h1>Todos</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={3} />
  </div>);
}

export default App;
