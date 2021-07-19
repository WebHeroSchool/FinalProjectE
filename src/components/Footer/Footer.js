import React from 'react';
import styles from './Footer.module.css'

const Footer = ({ taskCount, onClickFooter }) => (
	<div className={styles.tasks} onClick={onClickFooter}> Осталось выполнить: {taskCount} дел</div>
);

export default Footer;