import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='text'>HELLO WORLD!</div>
  }
}

Index.propTypes = {
  
}

export default Index;
