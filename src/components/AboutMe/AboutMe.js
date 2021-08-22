import React from 'react';
import styles from './AboutMe.module.css';
import CardContent from '@material-ui/core/CardContent';


class AboutMe extends React.Component {
	render() {
		const {username, avatarURL, name, bio} = this.props;
		return (
	  		<CardContent className={styles.main}>
	  			<h1 className={styles.title}>Обо мне</h1>
	  			<h3 className={styles.subtitle}>
	  				Меня зовут: {username} / {name}
	  			</h3>
	  		    <div>
                    <img src={avatarURL} alt={name} width='100' />   
                </div>
                <h3 className={styles.subtitle}>
                    Bio: {bio}
                </h3>
                <h1 className={styles.title}>Мои работы:</h1>
                <a className={styles.repos} href="https://kri0k.github.io/Krioks_Resourcepacks/main.html">
					<div className={styles.repos_text}>Сайт с ресурспаками</div>
				</a>
				<a className={styles.repos} href="https://webheroschool.github.io/CardGameBug/">
					<div className={styles.repos_text}>Карточная игра</div>
				</a>
				<a className={styles.repos} href="https://webheroschool.github.io/attemptN2/">
					<div className={styles.repos_text}>Пример верстки</div>
				</a>
	  		</CardContent>
	    );
	}
}

export default AboutMe;