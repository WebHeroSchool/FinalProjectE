import React, {useState, useEffect} from 'react';
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
      taskCount: 1,
      activeFilter: 'all',
      error: '',
  };

  const [items, setItems] = useState(initialState.items);
  const [taskCount, setCount] = useState(initialState.taskCount);
  const [error, setError] = useState(initialState.error);

  useEffect(() => {console.log('componentDidMount')}, []);
  useEffect(() => {console.log('componentDidUpdate')}, [initialState.items]);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
        if (newItem.isDone === true) {
          setCount((taskCount) => taskCount - 1);
        }
        if (newItem.isDone === false) {
          setCount((taskCount) => taskCount + 1);
        }
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
      setCount((taskCount) => taskCount + 1);
      setError('');
    }
    else {
      setError('Некорректное название задачи');
    }
  };
  const onClickDelete = (id) => {
    setCount((taskCount) => taskCount - 1);
    const newItemList = items.filter((item) => item.id !== id);
    setItems(newItemList);
  };

  const [completedItems] = useState(items.filter((item) => item.isDone === true))
  const [uncompletedItems] = useState(items.filter((item) => item.isDone === false))
  const [allItems] = useState(items)

  return (
    <div className={styles.underWrapper}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Дела</h1>
        <InputItem onClickAdd={onClickAdd} />
        <div className={styles.error}>{error}</div>
        <div className={styles.menu}>
          <button
            className={styles.filters}
            onClick={() => {
              setItems(
                completedItems
              )
            }}
          >
            Завершённые
          </button>
          <button
            className={styles.filters}
            onClick={() => {
              setItems(
                uncompletedItems
              );
            }}
          >
            Незавершенные
          </button>
          <button
            className={styles.filters}
            onClick={() => {
              setItems(
                allItems
              );
            }}
          >
            Все
          </button>
          </div>
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

export default Todo;
