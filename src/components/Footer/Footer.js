import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ taskCount, onClickFooter }) => (
	<div className={styles.tasks} onClick={onClickFooter}> Количество запланированных дел: {taskCount}</div>
);

Footer.defaultProps = {
	taskCount: 0
};

Footer.propTypes = {
	taskCount: PropTypes.number,
	onClickFooter: PropTypes.func
}

export default Footer;