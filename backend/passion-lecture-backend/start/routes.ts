/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthorsController from '#controllers/authors_controller'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('authors', AuthorsController).apiOnly()
