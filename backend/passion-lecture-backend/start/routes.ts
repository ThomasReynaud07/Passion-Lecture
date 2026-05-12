/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

const BooksController = () => import('#controllers/books_controller')
const AuthorsController = () => import('#controllers/authors_controller')
const CommentsController = () => import('#controllers/comments_controller')
const AuthController = () => import('#controllers/auth_controller')
const CategoriesController = () => import('#controllers/categories_controller')

import { middleware } from '#start/kernel'

// router.get('/', async () => {
//   return {
//     hello: 'world',
//   }
// })

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
router.post('/logout', [AuthController, 'logout']).middleware(middleware.auth())
router.resource('authors', AuthorsController).apiOnly()
router.resource('comments', CommentsController).apiOnly()
router.resource('categories', CategoriesController).apiOnly()
router.resource('books', BooksController).apiOnly().middleware('*', middleware.auth())

// returns swagger in YAML
router.get('swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})
// Renders Swagger-UI and passes YAML-output of /swagger
router.get('docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})
