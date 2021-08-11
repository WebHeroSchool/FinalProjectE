import React from 'react';
import Item from '../Item/Item.js';
import styles from './ItemList.module.css'
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

const ItemList = ({items, onClickDone, isDone, id, onClickDelete, showed}) => (
  <List className={styles.itemList}>
    {items.map(item => (
      <Item
        key={item.id}
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
        showed={item.showed}
      />
    ))}
 </List>
);

ItemList.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  key: PropTypes.number,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
}

export default ItemList;