import React, { Component } from 'react';
import { connect } from 'react-redux';

class VeggieDetail extends Component {
  render(){
    if (!this.props.veggie) {
      return <div>Test</div>;
    }
    return (
      <div>
        <img className="img-fluid" src={this.props.veggie.image}/>
        <br />
        <div><h2>{this.props.veggie.title}</h2></div><br />
        <div><h3>Nutricional Facts:</h3> <p>{this.props.veggie.nutritionFacts}</p></div><br />
        <div><h3>Health Benefits:</h3> {this.props.veggie.healthBenefits}</div><br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    veggie: state.activeVeggie
  };
}

export default connect (mapStateToProps)(VeggieDetail);
