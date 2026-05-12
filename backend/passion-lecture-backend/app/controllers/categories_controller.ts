import Category from '#models/category'
import { categoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const categories = await Category.all()
    return response.ok(categories)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name } = await request.validateUsing(categoryValidator)
    const category = await Category.create({ name })
    return response.created(category)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    return response.ok(category)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    const { name } = await request.validateUsing(categoryValidator)
    category.merge({ name })
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
