import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from '../App/App.module.css';
// import FilterComponent from '../Filters/FilterComponent.js'

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
      activeFilter: 'all'
  };

  const [items, setItems] = useState(initialState.items);
  const [taskCount, setCount] = useState(initialState.taskCount);
  const [activeFilter, setFilter] = useState(initialState.activeFilter);

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

  // const onClickSetActive = item => 
  // this.setState(state => ({
  //   activeFilter: item.id
  // }))

  // const onClickSort = (sorter) => {
  //   const elem = sorter.target;
  //   const sortedItemList = this.state.items.filter(item => {
  //     item.
  //   })
  // }

  // const onClickSort = (items) => {
    const allItems = {items};
    const completedItems = items.filter((item) => item.isDone === true);
    const uncompletedItems = items.filter((item) => item.isDone === false);

    switch (activeFilter) {
      case 'all':
        setItems(allItems);
        break;
      case 'completedItems':
        setItems(completedItems);
        break;
      case 'uncompletedItems':
        setItems(uncompletedItems);
        break;
      default:
         setItems(allItems);
    };
  // };

  return (
      <div className={styles.underWrapper}>
        <div className={styles.wrap}>
            <h1 className={styles.title}>Дела</h1>
            <InputItem onClickAdd={onClickAdd} />
            <div className={styles.menu}>
              <button
                  onClick={() => {
                      this.setState({
                          activeFilter: 'completedItems',
                      });
                  }} 
                  className={styles['menu__is-done']}
              >
                  Завершённые 
                  <span className={styles['menu__is-done_span']}>
                      {completedItems.length}
                  </span>
              </button>
              <button
                  onClick={() => {
                     this.setState({
                          activeFilter: 'uncompletedItems',
                     });
                  }} 
                  className={styles['menu__isnt-done']}
              >
                  Незавершённые 
                  <span className={styles['menu__isnt-done_span']}>
                      {uncompletedItems.length}
                  </span>
              </button>
              <button
                  onClick={() => {
                      this.setState({
                          activeFilter: 'all',
                      });
                  }} 
                  className={styles.menu__all}
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