import Comment from '#models/comment'
import { commentValidator } from '#validators/comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const comments = await Comment.query().preload('user').preload('books').exec()
    return response.ok(comments)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { content, rate, userId, bookId } = await request.validateUsing(commentValidator)
    const comment = await Comment.create({ content, rate, bookId, userId })
    return response.created(comment)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    return response.ok(comment)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    const { content, rate, userId, bookId } = await request.validateUsing(commentValidator)
    comment.merge({ content, rate, userId, bookId })
    await comment.save()
    return response.ok(comment)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    await comment.delete()
    return response.noContent()
  }
}
