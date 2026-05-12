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
import AuthController from '#controllers/auth_controller'
import { middleware } from '#start/kernel'
import CategoriesController from '#controllers/categories_controller'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
router.resource('authors', AuthorsController).apiOnly()
router.resource('comments', CommentsController).apiOnly()
router.resource('books', BooksController).apiOnly().middleware('*', middleware.auth())
router.resource('categorie', CategoriesController).apiOnly()
