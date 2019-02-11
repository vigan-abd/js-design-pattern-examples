const ejs = require('ejs');
const Book = require('../model/Book');

class BookPresenter {
  async all() {
    const model = [
      new Book('The Alchemist', 'Paulo Coelho'),
      new Book('Harry Potter and the Chamber of Secret', "J.K. Rowlling")
    ];

    return new Promise((resolve, reject) =>
      ejs.renderFile(`${__dirname}/../view/book/index.ejs`, { model }, (err, str) => {
        if (err) reject(err);
        else resolve(str);
      }));
  }
}

const instance = new BookPresenter();
module.exports = instance;