import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import IceCreamList from './components/IceCreamList';
import IceCreamSingle from './components/IceCreamSingle';
import IceCreamAddForm from './components/IceCreamAddForm';
import IceCreamEditForm from './components/IceCreamEditForm';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Route exact path='/' component={Home} />
        <Route exact path='/icecream' component={IcecreamList} />
        <Route exact path='icecream/:id' component={IcecreamSingle} />
        <Route exact path="/add" component={IceCreamAddForm} />
        <Route exact path="/edit/:id" component={IceCreamEditForm} />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
