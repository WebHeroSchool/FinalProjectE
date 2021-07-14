import React from 'react';
import styles from './Footer.module.css'

const Footer = ({ taskCount }) => (
	<div className={styles.tasks}> Осталось выполнить: {taskCount} дел</div>
);

export default Footer;