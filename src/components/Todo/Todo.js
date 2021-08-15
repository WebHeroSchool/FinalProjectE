import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from '../App/App.module.css';
import classnames from 'classnames';
import errorImage from '../../img/error.svg';

const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Добавить новую задачу',
        isDone: false,
        id: 0,
        showed: true
      }
    ],
      taskCount: 1,
      displayCount: 1,
      error: '',
      noItems: false
  };

  const [items, setItems] = useState(initialState.items);
  const [taskCount, setCount] = useState(initialState.taskCount);
  const [error, setError] = useState(initialState.error);
  const [showed] = useState(initialState.showed);
  const [displayCount, setDisplayCount] = useState(initialState.displayCount);
  const [noItems, setNoitems] = useState(initialState.noItems);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
        if (newItem.isDone === true) {
          setDisplayCount((displayCount) => displayCount - 1);
        }
        if (newItem.isDone === false) {
          setDisplayCount((displayCount) => displayCount + 1);
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
          showed: true
        },
      ]);
      setCount((taskCount) => taskCount + 1);
      setDisplayCount((displayCount) => displayCount + 1);
      setError('');
      if (taskCount !== 0 || displayCount !== 0) {
        setNoitems(false);
      }
    }
    else {
      setError('Некорректное название задачи');
    }
  };
  const onClickDelete = (id) => {
      const newItemList = items.filter((item) => item.id !== id);
      setItems(newItemList);
      if (taskCount === 0 || displayCount === 0) {
        setNoitems(true);
      }
  };

  const selectAll = (showed, item) => {
    setItems(items.map(item => {
      const newItem = {...item};

      newItem.showed = true;
      return newItem;
    }));
  };
  const selectUndone = (showed, item) => {
    setItems(items.map(item => {
      const newItem = {...item};

      (!item.isDone) ? newItem.showed = true : newItem.showed = false;
      return newItem;
    }))
  };
   const selectDone = (showed, item) => {
    setItems(items.map(item => {
      const newItem = {...item};
  
      (item.isDone) ?  newItem.showed = true : newItem.showed = false;

      return newItem
    }))
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
        <div className={
          classnames ({
            [styles.noImage]: !noItems,
            [styles.noImageFlex]: noItems
        })}>
          <img alt="12" src={errorImage} className={styles.imageSize} />
          <h1 className={styles.errorTitle}>Элементов пока нет!</h1>
        </div>
        <ItemList
          items = {items}
          showed={showed}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer taskCount={displayCount} />
      </div>
    </div>
  )
};

export default Todo;
