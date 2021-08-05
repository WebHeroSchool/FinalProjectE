import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
				/>
				<div className={styles.blank}>Hello</div>
				<Button
					className={styles.button}
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
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	onClickAdd: PropTypes.func
};

export default InputItem;