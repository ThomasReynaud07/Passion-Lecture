import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titre: string

  @column()
  declare pages: number

  @column()
  declare categorie: string

  @column()
  declare extrait: string

  @column()
  declare resume: string

  @column()
  declare editeur: string

  @column()
  declare annee: number

  @column()
  declare imageCouverture: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
