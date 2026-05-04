import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Book from './book.js'

export default class Autor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
<<<<<<< HEAD
  declare firstName: string

  @column()
  declare lastName: string

  @hasMany(() => Book)
  declare books: HasMany<typeof Book>
=======
  declare nom: string

  @column()
  declare prenom: string
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
