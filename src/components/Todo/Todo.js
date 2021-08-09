import React, {useState} from 'react';
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
      error: '',
  };

  const [items, setItems] = useState(initialState.items);
  const [taskCount, setCount] = useState(initialState.taskCount);
  const [error, setError] = useState(initialState.error);

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
      const newItemList = items.filter((item) => item.id !== id);
      setItems(newItemList);
  };

  const selectAll = (id) => {
    const all = items;
    all.className = 'shown'
  };
   const selectDone = () => {
    const showed = items.filter((item) => item.isDone === true);
    const hidden = items.filter((item) => item.isDone === false);
    showed.className = 'shown'
    hidden.className = 'hidden'
  };
   const selectUndone = () => {
    const showed = items.filter((item) => item.isDone === false);
    const hidden = items.filter((item) => item.isDone === true);
    showed.className = 'shown'
    hidden.className = 'hidden'
  };

  return (
    <div className={styles.underWrapper}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Дела</h1>
        <InputItem onClickAdd={onClickAdd} />
        <div className={styles.error}>{error}</div>
        <div>
          <button onClick={selectDone} className={styles.filter}>
            Завершенные
          </button>
          <button onClick={selectUndone} className={styles.filter}>
            Незавершенные
          </button>
          <button onClick={selectAll} className={styles.filter}>Все</button>
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
