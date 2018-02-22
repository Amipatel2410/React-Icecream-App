import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import IcecreamList from './components/IcecreamList';
import IcecreamSingle from './components/IcecreamSingle';
import IcecreamAddForm from './components/IcecreamAddForm';
import IcecreamEditForm from './components/IcecreamEditForm';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Route exact path='/' component={Home} />
        <Route exact path='/icecream' component={IcecreamList} />
        <Route exact path='/icecream/:id' component={IcecreamSingle} />
        <Route exact path='/add' component={IcecreamAddForm} />
        <Route exact path='/edit/:id' component={IcecreamEditForm} />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
