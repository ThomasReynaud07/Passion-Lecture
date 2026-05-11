/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BooksController from '#controllers/books_controller'
import router from '@adonisjs/core/services/router'
import AuthorsController from '#controllers/authors_controller'
import CommentsController from '#controllers/comments_controller'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('authors', AuthorsController).apiOnly()

router.resource('books', BooksController).apiOnly()

router.resource('comments', CommentsController).apiOnly()
