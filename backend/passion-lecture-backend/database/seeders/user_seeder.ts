import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'admin',
        email: 'admin@gmail.com',
        password: 'admin123!',
      },
    ])
  }
}
