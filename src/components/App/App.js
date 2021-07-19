import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

const taskCount= 3;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      items: [
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
      ]
    };
  }
  onButtonClick = (event) => console.log(event.target.value);

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
      <ItemList items={this.state.items} onClickDone={this.onClickDone} />
      <Footer taskCount={taskCount} />
    </div>);
  }
}


export default App;