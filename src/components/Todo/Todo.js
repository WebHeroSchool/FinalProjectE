import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from '../App/App.module.css';

const Todo = () => {
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
      <div className={styles.underWrapper}>
        <div className={styles.wrap}>
            <h1 className={styles.title}>Дела</h1>
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

Todo.propTypes = {
  items: PropTypes.string,
  taskCount: PropTypes.number
};

export default Todo;