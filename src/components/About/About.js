import React, {useState, useEffect} from 'react';
import CardContent from '@material-ui/core/CardContent';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		error: '',
		fetchReposSuccess: false,
		username: 'Kri0k'
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'Kri0k'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false
			})
		}).catch(err => {
            this.setState({
                error: err,
                isLoading: false,
                fetchReposSuccess: false,
            });
        });

        octokit.users.getByUsername({
            username: this.state.username,
        })
        .then((response) => {
            this.setState({
                avatarURL: response.data.avatar_url,
                name: response.data.name,
                bio: response.data.bio,
                url: response.data.url
            });
            console.log(response.data);
        });
	}

	render() {
		const {isLoading, repoList, avatarURL, name, fetchReposSuccess, error, bio, url} =this.state;
		return (
	  		<CardContent>
	  			<h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
	  				<h3 className={styles.subtitle}>
	  					Меня зовут: {this.state.username}
	  				</h3>
	  				<div>
                        <img src={avatarURL} alt={name} width='100' />   
                    </div>
                    <h3 className={styles.subtitle}>
                        Bio: {bio}
                    </h3>
                    <a className={styles.subtitle} href={url}>
                    	{url}
                    </a>
			  			{!isLoading && <ol>
			  				{repoList.map(repo => (<li key={repo.id}>
			  					<a className={styles.link} href={repo.html_url} target='blank'>
			  						{repo.name}
			  					</a>
			  				</li>))}
			  			</ol>}
	  		</CardContent>
		);
	}
};

export default About;