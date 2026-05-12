import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { booksValidator } from '#validators/book'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const books = await Book.query().preload('author').preload('users').preload('categories').exec()

    return response.ok(books)
  }

  async create({}: HttpContext) {
    /// A FAIRE QUAND IL Y AURA LA LIAISON AVEC LE FRONTEND
  }

  async store({ request, response, auth }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized({ message: 'Authentication required' })
    }

    const payload = await request.validateUsing(booksValidator)

    const book = await Book.create({
      ...payload,
      userId: auth.user.id,
    })

    return response.created(book)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const book = await Book.query()
      .where('id', params.id)
      .preload('author')
      .preload('users')
      .preload('categories')
      .firstOrFail()

    return response.ok(book)
  }

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {
    /// A FAIRE QUAND IL Y AURA LA LIAISON AVEC LE FRONTEND
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)

    const payload = request.only([
      'title',
      'pages',
      'extract',
      'resume',
      'editor',
      'year',
      'frontImagePath',
      'authorId',
      'userId',
      'categoryId',
    ])

    book.merge(payload)
    await book.save()

    return response.ok(book)
  }

  async destroy({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    await book.delete()

    return response.noContent()
  }
}
