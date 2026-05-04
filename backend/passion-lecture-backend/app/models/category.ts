import { DateTime } from 'luxon'
<<<<<<< HEAD
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Book from './book.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
=======
import { BaseModel, column } from '@adonisjs/lucid/orm'
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
<<<<<<< HEAD
  declare name: string

  @hasMany(() => Book)
  declare books: HasMany<typeof Book>
=======
  declare nom: string
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
