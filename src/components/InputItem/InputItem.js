import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
	state= {
		inputValue: ''
	};
	render () {
		const { onClickAdd } = this.props;

		return (
			<div>
				<TextField
					id="standard-search"
					label="Добавить задание"
					type="search"
					value={this.state.inputValue}
					onChange={event => this.setState({inputValue: event.target.value})}
				/>
				<div className={styles.blank}>Hello</div>
				<Button
					variant='contained'
					fullWidth
					onClick={() => onClickAdd(this.state.inputValue)}
				>
					Добавить
				</Button>
			</div>
		)
	}
}

export default InputItem;