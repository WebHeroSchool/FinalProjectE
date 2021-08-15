import React from 'react';
import styles from './AboutMe.module.css';
import CardContent from '@material-ui/core/CardContent';


class AboutMe extends React.Component {
	render() {
		const {username, avatarURL, name, bio} = this.props;
		return (
	  		<CardContent>
	  			<h1 className={styles.title}>Обо мне</h1>
	  				<h3 className={styles.subtitle}>
	  					Меня зовут: {username}
	  				</h3>
	  				<div>
                        <img src={avatarURL} alt={name} width='100' />   
                    </div>
                    <h3 className={styles.subtitle}>
                        Bio: {bio}
                    </h3> 
	  		</CardContent>
	    );
	}
}

export default AboutMe;