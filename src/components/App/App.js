import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state ={
//       items: [
//         {
//           value: 'Добавить новое задание',
//           isDone: false,
//           id: 0
//         }
//       ],
//       taskCount: 1
//     };
//   }
//   onClickDone = id => {
//     const newItemList = this.state.items.map(item => {
//       const newItem = {...item};
//       if (item.id === id) {
//         newItem.isDone = !item.isDone;
//       }
//       return newItem;
//     });
//     this.setState({ items: newItemList });
//   };

//    onClickDelete = id => this.setState(state => ({
//     items: state.items.filter(item =>
//       item.id !== id),
//     taskCount: state.taskCount -1
//    }));

//   onClickAdd = value => this.setState(state => ({
//     items: [
//       ...state.items,
//       {
//         value,
//         isDone: false,
//         id: state.taskCount + 1
//       }
//     ],
//     taskCount: state.taskCount + 1
//   }));

//   render() {
//     return (
      // <div className={styles.underWrap}>
      //   <div className={styles.wrap}>
      //     <h1 className={styles.title}>Todos</h1>
      //     <InputItem onClickAdd={this.onClickAdd} />
      //     <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
      //     <Footer taskCount={this.state.taskCount} />
      //   </div>
      // </div>
//     );
//   }
// }

const App = () => {
  const initialState = {
    items: [
          {
            value: 'Добавить новое задание',
              isDone: false,
                id: 0
          }
        ],
      taskCount: 1
  };

  const [items, setItems] = useState(initialState.items);
  const [taskCount, setCount] = useState(initialState.taskCount);

  useEffect(() => {console.log('componentDidMount')}, []);
  useEffect(() => {console.log('componentDidUpdate')}, [initialState.items]);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickAdd = (value) => {
    if (value !== "" && !items.some((item) => item.value === value)) {
      setItems([
        ...items,
        {
          value,
          isDone: false,
          id: taskCount + 1,
        },
      ]);
      setCount((count) => count + 1);
    }
  };
  const onClickDelete = (id) => {
      const newItemList = items.filter((item) => item.id !== id);
      setItems(newItemList);
      setCount((count) => count - 1);
    };
  return (
      <div className={styles.underWrap}>
        <div className={styles.wrap}>
            <h1 className={styles.title}>Todos</h1>
            <InputItem onClickAdd={onClickAdd} />
            <ItemList 
              items={items}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
          />
            <Footer taskCount={taskCount} />
        </div>
    </div>
    )
};


export default App;