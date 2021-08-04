import React, {useState, useEffect} from 'react';
import styles from './Contacts.module.css';
import vk from './img/vk.png';
import mail from './img/email.png';
import discord from './img/discord.png';

const About = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.title}>Контакты</div>
			<div className={styles.vkContact}>
				<img src={vk} className={styles.vk} />
				<a href='https://vk.com/a.slavny4' className={styles.vkText}>https://vk.com/a.slavny4</a>
			</div>
			<div className={styles.discordContact}>
				<img src={discord} className={styles.discord} />
				<a className={styles.discordText}>Kriok#6400</a>
			</div>
			<div className={styles.mailContact}>
				<img src={mail} className={styles.mail} />
				<a className={styles.mailText}>antonka1708@outlook.com</a>
			</div>
		</div>
	);
};

export default About;