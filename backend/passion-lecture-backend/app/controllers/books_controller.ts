import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { booksValidator } from '#validators/book'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const book = await Book.query()
    return response.ok(book)
  }

  async create({}: HttpContext) {}

  async store({ request, response }: HttpContext) {
    const { title, pages, extract, resume, editor, year, frontImagePath } =
      await request.validateUsing(booksValidator)
    const book = await Book.create({
      title,
      pages,
      extract,
      resume,
      editor,
      year,
      frontImagePath,
    })
    return response.created(book)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return response.ok(book)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  async destroy({ params }: HttpContext) {}
}
