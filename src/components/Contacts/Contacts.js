import styles from './Contacts.module.css';
import React from 'react';
import vk from './img/vk.png';
import mail from './img/email.png';
import discord from './img/discord.png';
import github from './img/github.png';
import webhero from './img/webhero.png';

class About extends React.Component {
  render() {
    return (
        <div className={styles.contacts}>
					<div className={styles.title}>Контакты</div>
					<a href="https://vk.com/a.slavny4" className={styles.social__item} target="_blank" rel="noopener noreferrer">
	           <img src={vk} className={styles.social__img} alt="vk Kriok"/>
	     		</a>
					<a className={styles.social__item} href="https://github.com/Kri0k" target="_blank" rel="noopener noreferrer">
						<img src={github} className={styles.social__img} alt="github Kriok"/>
					</a>
					<a className={styles.social__item} href="mailto:antonka1708@outlook.com" target="_blank" rel="noopener noreferrer">
						<img src={mail} className={styles.social__img} alt="mail Kriok"/>
					</a>
					<a className={styles.social__item} href="https://discordapp.com/users/522134349013843969" target="_blank" rel="noopener noreferrer">
						<img src={discord} className={styles.social__img} alt="discord Kriok"/>
					</a>
					<a className={styles.repos} href="https://kri0k.github.io/Krioks_Resourcepacks/main.html">
						<div className={styles.repos_text}>Работа 1</div>
					</a>
					<a className={styles.repos} href="https://webheroschool.github.io/CardGameBug/">
						<div className={styles.repos_text}>Работа 2</div>
					</a>
					<a className={styles.repos} href="https://webheroschool.github.io/attemptN2/">
						<div className={styles.repos_text}>Работа 3</div>
					</a>
					<a href="https://webheroschool.ru" className={styles.webheroContact} target="_blank" rel="noopener noreferrer">
						<div className={styles.webheroText}>Выполнено в </div>
						<img alt="" src={webhero} className={styles.webhero} />
					</a>
				</div>
      )
  }
}

export default About;