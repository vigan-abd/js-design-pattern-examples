const Book = require('../model/Book');

class BookController {
  async all(req, res) {
    return res.render('book/index', {
      books: [
        new Book('The Alchemist', 'Paulo Coelho'),
        new Book('Harry Potter and the Chamber of Secret', "J.K. Rowlling")
      ]
    });
  }
}

const instance = new BookController();
module.exports = instance;