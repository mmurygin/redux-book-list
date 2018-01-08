import React, { Component } from 'react';
import { connect } from 'react-redux';

class Book extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div className='col-sm-8'>
        <h3>Details for:</h3>
        <h2>{this.props.book.title}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(Book);
