import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

// const todoItem = 'Написать новое приложение';
const taskCount= 3;

// const App = () => {
//   const items = [
//     {
//       value: 'Написать новое приложение',
//       isDone: true
//     },
//     {
//       value: 'Украсть рецепт крабсбургера',
//       isDone: false
//     },
//     {
//       value: 'Захватить планету',
//       isDone: false
//     }
//   ];

//   return (
//   <div className={styles.wrap}>
//     <h1 className={styles.title}>Todos</h1>
//     <InputItem />
//     <ItemList items={items}/>
//     <Footer taskCount={taskCount} />
//   </div>);
// }

class App extends React.Component {
  render() {
    const items = [
    {
      value: 'Написать новое приложение',
      isDone: true
    },
    {
      value: 'Украсть рецепт крабсбургера',
      isDone: false
    },
    {
      value: 'Захватить планету',
      isDone: false
    }
    ];
    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer taskCount={taskCount} />
    </div>);
  }
}


export default App;