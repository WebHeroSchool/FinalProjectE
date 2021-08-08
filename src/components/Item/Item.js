import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (
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
        })}
      > {value}</div>
      <ListItemSecondaryAction className={styles.delete}>
        <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
          <DeleteForeverRoundedIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    );
  }
}

Item.defaultProps = {
    isDone: false,
    value: 'Задача не найдена'
};

Item.propTypes = {
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default Item;