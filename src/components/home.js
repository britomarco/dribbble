import React, { Component } from 'react';
import HeaderText from './common/header_text';
import Cards from './home/cards';

class Home extends Component {

  render() {
    return(
      <div>
        <div className="container">
          <HeaderText />
          <Cards />
        </div>
      </div>
    )
  }

}

export default Home;
