import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import Products from './Products';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/products/" exact component={Products} />
            <Route path="/products/:id" component={ProductPage} />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
