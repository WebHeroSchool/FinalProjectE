import React from 'react';
import styles from './About.module.css';
import Repositories from '../Repositories/Repositories.js';
import AboutMe from '../AboutMe/AboutMe.js';

const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class About extends React.Component {
	constructor() {
	    super();

	    this.state = {
	      isLoading: {
	        aboutMe: true,
	        myRepos: true
	      },
	      firstRepo: 0,
	      lastRepo: 5,
	      repoList: [],
	      userData: [],
	      hasError: false,
	      error: {}
	    };
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
		const {isLoading} = this.state;
		return (
			<main className={styles.main}>
		        {this.state.hasError && (
		          <div className={styles['wrapper_error']}>
		            <img
		              className={styles.snafu}
		              src={require('../../img/snafu.svg')}
		              alt='snafu'
		            />
		            <h2 className={styles.subheading}>Что-то пошло не так...</h2>
		            <p className={styles.paragraph}>
		              Попробуйте <a href='.'>загрузить</a> еще раз
		            </p>
		          </div>
		        )}

		        {(isLoading.myRepos || isLoading.aboutMe) && (
		          <div className={styles['wrapper_loader']} />
		        )}

		        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && (
		          <AboutMe userData={this.state.userData} />
		        )}
		        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && (
		          <Repositories
		          	className={styles.repos}
		            repoList={this.state.repoList}
		            firstRepo={this.state.firstRepo}
		            lastRepo={this.state.lastRepo}
		            onClickNext={this.onClickNext}
		            onClickPrevious={this.onClickPrevious}
		          />
		        )}
		      </main>
		)
	}
};

export default About;