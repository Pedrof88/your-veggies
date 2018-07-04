import React from 'react';
import { Component } from 'react';
import VeggieList from '../containers/veggie-list';

export default class App extends Component {
  render() {
    return (
        <div>
          <VeggieList />
        </div>
    );
  }
}
