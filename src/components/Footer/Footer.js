import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ taskCount, onClickFooter }) => (
	<div className={styles.tasks} onClick={onClickFooter}> Количество запланированных дел: {taskCount}</div>
);

Footer.defaultProps = {
	taskCount: "Error. Task counter not found"
};

Footer.propTypes = {
	taskCount: 0
}

export default Footer;