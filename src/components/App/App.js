import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      items: [
        {
          value: 'Написать новое приложение',
          isDone: false,
          id: 0
        },
        {
          value: 'Украсть рецепт крабсбургера',
          isDone: false,
          id: 1
        },
        {
          value: 'Захватить планету',
          isDone: false,
          id: 2
        }
      ],
      taskCount: 3
    };
  }
  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item};
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList });
  };

   onClickDelete = id => {
    const newItemList = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({items: newItemList});
  }

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.taskCount + 1
      }
    ],
    taskCount: state.taskCount + 1
  }));

  render() {
    return (
      <div className={styles.underWrap}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Todos</h1>
          <InputItem onClickAdd={this.onClickAdd} />
          <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
          <Footer taskCount={this.state.taskCount} />
        </div>
      </div>
    );
  }
}


export default App;