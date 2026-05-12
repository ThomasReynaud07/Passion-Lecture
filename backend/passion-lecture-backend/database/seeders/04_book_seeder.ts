import Book from '#models/book'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Book.createMany([
      {
        title: "Les Ombres d'Émeraude",
        pages: 412,
        extract: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        resume:
          'Dans une cité gouvernée par une élite secrète, une jeune archiviste découvre un complot.',
        editor: 'Éditions du Levant',
        year: 2021,
        frontImagePath:
          'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=600&fit=crop',
        categoryId: 1,
        authorId: 1,
        userId: 1,
      },
    ])
  }
}
