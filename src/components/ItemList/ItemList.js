import React from 'react';
import Item from '../Item/Item.js';
import styles from './ItemList.module.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const ItemList = ({items, onClickDone, isDone, id, onClickDelete}) => (
  <div>
    <List >
      {items.map( item => (
        <ListItem className={styles.itm} key={item.value} dense button >
          <Checkbox
            disableRipple
            checked={isDone}
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClick={() => onClickDone(item.id)}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
          <ListItemText>
            <Item
              value={item.value}
              isDone={item.isDone}
              id={item.id}
              onClickDone={onClickDone}
            />
          </ListItemText>
          <ListItemSecondaryAction  className={styles.delete}>
            <IconButton aria-label="Comments" >
              <DeleteForeverRoundedIcon onClick={() => onClickDelete(id)} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
);

export default ItemList;