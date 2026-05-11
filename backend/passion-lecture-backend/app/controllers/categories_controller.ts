import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import { categoryValidator } from '#validators/category'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const categories = await Category.query().preload('books')

    return response.ok(categories)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(categoryValidator)

    const category = await Category.create(payload)

    return response.created(category)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const category = await Category.query().where('id', params.id).preload('books').firstOrFail()

    return response.ok(category)
  }

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)

    const payload = request.only(['name'])

    category.merge(payload)
    await category.save()

    return response.ok(category)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    await category.delete()

    return response.noContent()
  }
}
