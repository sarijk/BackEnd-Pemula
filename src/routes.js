/* eslint-disable max-len *//* eslint-disable no-unused-vars *//* eslint-disable linebreak-style *//* eslint-disable no-undef */

const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler,
} = require('./handler');

const routes = [
  /* KRITERIA 1 */
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  /* KRITERIA 2 */
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  /* KRITERIA 3 */
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  /* KRITERIA 4 */
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  /* KRITERIA 5 */
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
