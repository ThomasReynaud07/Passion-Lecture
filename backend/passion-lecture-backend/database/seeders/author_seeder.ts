import Autor from '#models/autor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Autor.createMany([
      { firstName: 'Clara', lastName: 'Montel' },
      { firstName: 'Julien', lastName: 'Roche' },
      { firstName: 'Kenji', lastName: 'Takeda' },
      { firstName: 'Marion', lastName: 'Lefèvre' },
      { firstName: 'Élise', lastName: 'Martin' },
      { firstName: 'Thomas', lastName: 'Stern' },
      { firstName: 'Marc', lastName: 'Vidal' },
      { firstName: 'Sarah', lastName: 'Connor' },
      { firstName: 'Paul', lastName: 'Bocuse' },
      { firstName: 'Léa', lastName: 'Dubois' },
    ])
  }
}
