import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return (<div>Select book for details</div>)
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title || "none"}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.activeBook;
}

export default connect(mapStateToProps)(BookDetail);
