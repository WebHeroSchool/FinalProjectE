import React from 'react';
import classnames from 'classnames';
import styles from './Repositories.module.css';

function Repositories({
  repoList,
  firstRepo,
  lastRepo,
  onClickNext,
  onClickPrevious
}) {
  return (
    <div className='styles.wrapper'>
      {repoList.length > 0 && (
        <section className={styles.section}>
          <ul className={styles['repo-list']}>
            {repoList.slice(firstRepo, lastRepo).map(repo => (
              <li className={styles.repo} key={repo.id}>
                <h1 className={styles.heading}>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href={repo.html_url}
                    className={styles.link}
                  >
                    {repo.name}
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href={'https://github.com/Kri0k/' + repo.name}
                    className={styles.link + ' ' + styles['link_gh-pages']}
                  >
                    демо на gh-pages
                  </a>
                </h1>
                <span
                  className={classnames({
                    [styles.language]: true,
                    [styles.html]: repo.language === 'HTML',
                    [styles.css]: repo.language === 'CSS',
                    [styles.php]: repo.language === 'PHP'
                  })}
                >
                  {repo.language}
                </span>
                <span className={styles.stars}>{repo.stargazers_count}</span>
                <span className={styles.forks}>{repo.forks_count}</span>
                <span className={styles.updated}>{repo.updated_at}</span>
              </li>
            ))}
          </ul>
          <div className={styles.buttons}>
            <button
              className={styles['button-back'] + ' ' + styles.button}
              disabled={firstRepo < 5}
              onClick={() => onClickPrevious()}
            >
              Назад
            </button>
            <button
              className={styles['button-next'] + ' ' + styles.button}
              disabled={repoList.length - firstRepo < 6}
              onClick={() => onClickNext()}
            >
              Далее
            </button>
          </div>
        </section>
      )}
      {(!repoList || repoList.length === 0) && (
        <section className={styles['section_snafu'] + ' ' + styles.section}>
          <h2 className={styles.subheading}>Репозитории на github.com</h2>
          <img
            className={styles.snafu}
            src={require('../../img/snafu.svg')}
            alt='snafu'
          />
          <p className={styles.paragraph}>
            Добавьте как минимум один резопзиторий на{' '}
            <a href='www.github.com'>www.github.com</a>
          </p>
        </section>
      )}
    </div>
  );
}

export default Repositories;