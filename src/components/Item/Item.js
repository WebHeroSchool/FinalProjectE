import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import PropTypes from 'prop-types';

class Item extends React.Component {
  componentDidMount() {
    console.log('CDM');
  };

  componentDidUpdate() {
    console.log('CDU');
  };

  componentWillUnmount() {
    console.log('CWU');
  };
  // componentDidMount() {
  //   this.timerID = setInterval(() => console.log('I forgor'), 1000);
  // };

  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // };
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
        })
      }> {value}</div>
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
  isDone: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default Item;