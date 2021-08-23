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
		return (
			<div className={styles.heightController}>
				<TextField
					id="standard-search"
					label={"Добавить задание"}
					type="search"
					value={this.state.inputValue}
					className={styles.label}
					onChange={event => this.setState({inputValue: event.target.value})}
				/>
				<div className={styles.blank}>Hello</div>
				<div className={styles.buttonFix}>
					<Button
						variant='contained'
						fullWidth
						onClick={() => {
							this.onButtonClick();
						}}
					>
						Добавить
					</Button>
				</div>
			</div>
		)
	}
}

InputItem.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};

export default InputItem;