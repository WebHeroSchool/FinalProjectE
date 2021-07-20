import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';
import AppFunctions from '../AppFunctions/AppFunctions.js';

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

const App = () => (
  <div className={styles.underWrap}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>Todos</h1>
      <InputItem onClickAdd={AppFunctions.onClickAdd} />
      <ItemList 
        items={AppFunctions.items}
        onClickDone={AppFunctions.onClickDone}
        onClickDelete={AppFunctions.onClickDelete}
      />
      <Footer taskCount={AppFunctions.taskCount} />
    </div>
  </div>
)

App.propTypes = {
  id: PropTypes.number
}


export default App;