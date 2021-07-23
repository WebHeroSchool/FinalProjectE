import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
	state= {
		inputValue: ''
	};
	onButtonClick= () => {
	this.setState({
		inputValue: ''
	})
	this.props.onClickAdd(this.state.inputValue);
};
	render () {
		const { onClickAdd } = this.props;

		return (
			<div className={styles.heightController}>
				<TextField
					id="standard-search"
					label={"Добавить задание"}
					type="search"
					value={this.state.inputValue}
					onChange={event => this.setState({inputValue: event.target.value})}
					// onChange={event => this.setState({ inputValue: event.target.value.toUpperCase()})} Как видите, я могу добавить, но оно здесь неуместно, как я считаю
				/>
				<div className={styles.blank}>Hello</div>
				<Button
					variant='contained'
					fullWidth
					onClick={() => onClickAdd(this.state.inputValue)}
					onClick={this.onButtonClick}
				>
					Добавить
				</Button>
			</div>
		)
	}
}

InputItem.propTypes = {
	value: PropTypes.string
};

export default InputItem;