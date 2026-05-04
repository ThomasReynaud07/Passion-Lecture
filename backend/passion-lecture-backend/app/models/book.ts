import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Autor from './autor.js'
import Category from './category.js'
import User from './user.js'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare pages: number

  @column()
  declare extract: string

  @column()
  declare resume: string

  @column()
  declare editor: string

  @column()
  declare year: number

  @column()
  declare frontImagePath: string

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare users: BelongsTo<typeof User>

  @column()
  declare categoryId: number

  @belongsTo(() => Category)
  declare categories: BelongsTo<typeof Category>

  @column()
  declare autorId: number

  @belongsTo(() => Autor)
  declare autor: BelongsTo<typeof Autor>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
