import styles from './Contacts.module.css';
import vk from './img/vk.png';
import mail from './img/email.png';
import discord from './img/discord.png';
import github from './img/github.png';

const About = () => {
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
			<div className={styles.webheroContact}>
				<a className={styles.webheroText} href='https://webheroschool.ru'>Выполнено в </a>
				<a href='https://webheroschool.ru' className={styles.webhero}>{}</a>
			</div>
		</div>
	);
};
export default About;