import Comment from '#models/comment'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Comment.createMany([
      {
        content: "C'est pas mal",
        rate: 4.7,
        bookId: 1,
        userId: 1,
      },
    ])
  }
}
