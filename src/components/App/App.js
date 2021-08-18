import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MetaTags from 'react-meta-tags';
import Todo from '../Todo/Todo.js';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';
import pencil from '../../img/pencil_icon.svg';

document.title = 'Список дел';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Ну вот я что-то сделал" />
            <meta property="og:title" content="Бесполезный список дел!" />
            <meta property="og:image" content={pencil} />
        </MetaTags>
        <div className={styles.underWrap}>
          <div className={styles.wraps}>
            <Card className={styles.sidebar} >
              <MenuList>
                <Link className={styles.link} to='/'><MenuItem className={styles.linkText}>Обо мне</MenuItem></Link>
                <Link className={styles.link} to='/todo'><MenuItem className={styles.linkText}>Дела</MenuItem></Link>
                <Link className={styles.link} to='/contacts'><MenuItem className={styles.linkText}>Контакты</MenuItem></Link>
              </MenuList>
            </Card>
            <Card className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo' component={Todo} />
              <Route path='/contacts' component={Contacts} />
            </Card>
          </div>
        </div>
      </Router>
    );
  }
};


export default App;