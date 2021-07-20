import React from 'react';
import styles from './Footer.module.css'

const Footer = ({ taskCount, onClickFooter }) => (
	<div className={styles.tasks} onClick={onClickFooter}> Осталось выполнить: {taskCount} дел</div>
);

Footer.defaultProps = {
	taskCount: "Error. Task counter not found"
};

export default Footer;