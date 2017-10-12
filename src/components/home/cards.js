import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Card from './card';

class Cards extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { isLoading : 'block', isLoaded: 'none' }
  }

  componentWillMount() {
    this.props.popularDibbbleShots();
  }

  componentDidMount() {
    this.setState({ isLoading: 'none', isLoaded: 'block' });
  }

  render() {
    let filteredDibbbles = this.props.dribbbles;
    return(
      <div>
        <div className="card-list">
          <div style={{ display : `${this.state.isLoading}` }}>Loading...</div>
          <div className="row" style={{display : `${this.state.isLoaded}`}}>
            {filteredDibbbles.map((dribbble) => {
              return <Card key={dribbble.id} dribbble={dribbble} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { dribbbles : state.dribbbles }
}

export default connect(mapStateToProps, actions)(Cards);
