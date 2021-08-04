import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem.js';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import Todo from '../Todo/Todo.js';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';

document.title = 'Список дел';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles.underWrap}>
          <div className={styles.wrap}>
            <Card className={styles.sidebar} >
              <MenuList>
                <Link className={styles.link} to='/'><MenuItem>Обо мне</MenuItem></Link>
                <Link className={styles.link} to='/todo'><MenuItem>Дела</MenuItem></Link>
                <Link className={styles.link} to='/contacts'><MenuItem>Контакты</MenuItem></Link>
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