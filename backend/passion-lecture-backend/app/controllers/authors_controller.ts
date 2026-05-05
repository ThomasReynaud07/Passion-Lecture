import type { HttpContext } from '@adonisjs/core/http'
import Autor from '#models/autor'
import { autorValidator } from '#validators/autor'

export default class AuthorsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const authors = await Autor.all()
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
    const payload = await request.validateUsing(autorValidator)
    const author = await Autor.create(payload)
    return response.created(author)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const author = await Autor.findOrFail(params.id)
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
    const author = await Autor.findOrFail(params.id)
    const payload = await request.validateUsing(autorValidator)

    author.merge(payload)
    await author.save()

    return response.ok(author)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const author = await Autor.findOrFail(params.id)
    await author.delete()

    return response.noContent()
  }
}
