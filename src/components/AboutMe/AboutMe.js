import React from 'react';
import styles from './AboutMe.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();


class AboutMe extends React.Component {
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

	onClickPrevious = () =>
	    this.setState(state => ({
	      firstRepo: this.state.firstRepo - 5,
	      lastRepo: this.state.lastRepo - 5
	    }));

	  onClickNext = () =>
	    this.setState(state => ({
	      firstRepo: this.state.firstRepo + 5,
	      lastRepo: this.state.lastRepo + 5
    }));


	render() {
		const {isLoading, repoList, avatarURL, name, bio} =this.state;
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
	  		</CardContent>
	    );
	}
}

export default AboutMe;