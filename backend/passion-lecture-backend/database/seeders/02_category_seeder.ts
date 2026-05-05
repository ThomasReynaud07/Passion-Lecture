import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Roman' },
      { name: 'Science-Fiction' },
      { name: 'Manga' },
      { name: 'BD' },
      { name: 'Essai' },
      { name: 'Polar' },
      { name: 'Psychologie' },
      { name: 'Espace' },
      { name: 'Cuisine' },
      { name: 'Thriller' },
    ])
  }
}
