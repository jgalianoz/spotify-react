import React, { Component } from 'react';
import styled from 'styled-components';


class ListMusic extends Component {

  componentDidMount() {
    console.log('render component')
  }

  render() {
    return(
      <h1>Lista de musica</h1>
    );
  }
}

export default ListMusic;
