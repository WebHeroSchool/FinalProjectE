import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const AppFunctions = () => {
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
	const [count, setCount] = useState(initialState.count);

	useEffect(() => {console.log('componentDidMount')}, []);
	useEffect(() => {console.log('componentDidUpdate')}, [initialState.items]);

	const onClickDone = id => {
	    const newItemList = items.map(item => {
      			const newItem = {...item};
     			if (item.id === id) {
        		newItem.isDone = !item.isDone;
        	}
        	return newItem;
    	});
      	setItems(newItemList);
	}

	const onClickAdd = value => this.setState(state => ({
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

  	const onClickDelete = id => this.setState(state => ({
    	items: state.items.filter(item =>
       		item.id !== id),
    	taskCount: state.taskCount -1
   }));
}

export default AppFunctions;