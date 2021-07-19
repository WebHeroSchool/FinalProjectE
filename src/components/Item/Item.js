import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
  <ListItem className={
    classnames({
      [styles.item]: true
    })
  }>
  <Checkbox
    onClick={() => onClickDone(id)}
    checked={isDone}
  />
  <div className={
    classnames({
      [styles.done]: isDone
    })
  }> {value}</div>
    <ListItemSecondaryAction className={styles.delete}>
      <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
        <DeleteForeverRoundedIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item;