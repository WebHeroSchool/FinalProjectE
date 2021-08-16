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
    const { value, isDone, onClickDone, id, onClickDelete, showed} = this.props;
    return (
      <div className={
          classnames({
            [styles.hidden]: !showed
          })
        }>
      <ListItem className={
        classnames({
          [styles.item]: true,
          [styles.hidden]: !showed
        })
      }>
      <Checkbox
        onClick={() => onClickDone(id)}
        checked={isDone}
        className={
          classnames({
            [styles.hidden]: !showed
          })
        }
      />
      <div className={
        classnames({
          [styles.done]: isDone,
          [styles.hidden]: !showed
        })}
      > {value}</div>
      <ListItemSecondaryAction className={
        classnames({
          [styles.delete]: isDone,
          [styles.noDelete]: !isDone,
          [styles.hidden]: !showed
        })
      }>
        <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
          <DeleteForeverRoundedIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </div>
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