import React, { Component } from 'react';
import BookCard from '../view/BookCard';
import Book from '../model/Book';

export default class BookViewModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getBooks = this.getBooks.bind(this);
  }

  async componentDidMount() {
    const books = await this.getBooks();

    this.setState({ books });
  }

  async getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const books = [
          new Book('The Alchemist', 'Paulo Coelho'),
          new Book('Harry Potter and the Chamber of Secret', "J.K. Rowlling")
        ];
        resolve(books);
      }, 1000);
    });
  }

  render() {
    return (<div>
      {this.state.books.map((x, i) =>
        <BookCard author={x.author} title={x.title} />)}
    </div>);
  }
}