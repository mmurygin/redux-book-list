import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className='list-group-item'
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// Whatever is returned from this func shows up as props in BookList
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Whatever is returned from this func shows up as props in BookList
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
