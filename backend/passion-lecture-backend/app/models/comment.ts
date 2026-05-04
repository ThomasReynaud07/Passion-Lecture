import { DateTime } from 'luxon'
<<<<<<< HEAD
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Book from './book.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
=======
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from './user.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
<<<<<<< HEAD
  declare content: string

  @column()
  declare rate: number

  @column()
  declare bookId: number

  @belongsTo(() => Book)
  declare books: BelongsTo<typeof Book>
=======
  declare contenu: string

  @column()
  declare note: number
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c

  @column()
  declare userId: number

<<<<<<< HEAD
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

=======
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
<<<<<<< HEAD
=======

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
>>>>>>> 5bdf6d035b2b99bc98c5278b60237f548dab189c
}
