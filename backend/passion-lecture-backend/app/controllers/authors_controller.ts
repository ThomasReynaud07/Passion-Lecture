import type { HttpContext } from '@adonisjs/core/http'
import Author from '#models/author'
import { authorValidator } from '#validators/author'

export default class AuthorsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const authors = await Author.query()
      .orderBy('lastname', 'asc')
      .orderBy('firstname', 'asc')
      .exec()
    return response.ok(authors)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const authorData = await request.validateUsing(authorValidator)
    const author = await Author.create(authorData)
    return response.created(author)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const author = await Author.findOrFail(params.id)
    return response.ok(author)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const author = await Author.findOrFail(params.id)
    const authorData = await request.validateUsing(authorValidator)

    author.merge(authorData)
    await author.save()

    return response.ok(author)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const author = await Author.findOrFail(params.id)
    await author.delete()

    return response.noContent()
  }
}
