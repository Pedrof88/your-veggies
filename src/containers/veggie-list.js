import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVeggie } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import VeggieDetail from './veggie-detail';

class VeggieList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  renderList (){
    return this.props.veggies.map((veggie) => {
      return (
        <div key = {veggie.title} className="modal-container d-flex flex-sm-column flex-sm-wrap align-content-start justify-content-start">
          <div className="col-sm-4 pb-3">
            <div
              className="card card-block"
              key = {veggie.title}
              onClick={() => {
                this.setState({ show: true });
                this.props.selectVeggie(veggie)
                }
              }
            >
              <img src={veggie.image} className="img-fluid"/>
              {veggie.title}
            </div>
        </div>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                  <VeggieDetail />
              </Modal.Body>
            <Modal.Footer>
              <Button key = {veggie.title} onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
      );
    })
  }
  render () {
    return (
      <div className="col-sm-12">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props.
  // inside of VeggieList
  return{
    veggies: state.veggies
  };
}

// Anything returned from this function will end up as props on the VeggieList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectVeggie is called, the result should be passed to all of our reducers
  return bindActionCreators ({ selectVeggie: selectVeggie }, dispatch);
}

// Promote VeggieList from a component to a container - it needs to know about this new dispatch method selectVeggie. Make it available as prop.
export default connect(mapStateToProps,mapDispatchToProps)(VeggieList);
