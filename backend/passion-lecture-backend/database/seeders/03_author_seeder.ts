import Autor from '#models/autor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Autor.createMany([
      { firstname: 'Clara', lastname: 'Montel' },
      { firstname: 'Julien', lastname: 'Roche' },
      { firstname: 'Kenji', lastname: 'Takeda' },
      { firstname: 'Marion', lastname: 'Lefèvre' },
      { firstname: 'Élise', lastname: 'Martin' },
      { firstname: 'Thomas', lastname: 'Stern' },
      { firstname: 'Marc', lastname: 'Vidal' },
      { firstname: 'Sarah', lastname: 'Connor' },
      { firstname: 'Paul', lastname: 'Bocuse' },
      { firstname: 'Léa', lastname: 'Dubois' },
    ])
  }
}
