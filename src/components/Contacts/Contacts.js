import styles from './Contacts.module.css';
import vk from './img/vk.png';
import mail from './img/email.png';
import discord from './img/discord.png';
import github from './img/github.png';

const About = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.title}>Контакты</div>
			<div className={styles.vkContact}>
				<img src={vk} className={styles.vk} />
				<a href='https://vk.com/a.slavny4' className={styles.vkText}>a.slavny4</a>
			</div>
			<div className={styles.discordContact}>
				<img src={discord} className={styles.discord} />
				<a className={styles.discordText}>Kriok#6400</a>
			</div>
			<div className={styles.mailContact}>
				<img src={mail} className={styles.mail} />
				<a className={styles.mailText} href='mailto: antonka1708@outlook.com'>antonka1708@outlook.com</a>
			</div>
			<div className={styles.githubContact}>
				<img src={github} className={styles.github} />
				<a className={styles.githubText} href='https://github.com/Kri0k'>Kri0k</a>
			</div>
			<div className={styles.webheroContact}>
				<a className={styles.webheroText} href='https://webheroschool.ru'>Выполнено в </a>
				<a href='https://webheroschool.ru' className={styles.webhero} />
			</div>
		</div>
	);
};

export default About;