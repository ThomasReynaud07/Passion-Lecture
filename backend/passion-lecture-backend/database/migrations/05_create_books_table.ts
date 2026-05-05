import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').unique
      table.integer('pages')
      table.string('extract')
      table.string('resume')
      table.string('editor')
      table.integer('year').unsigned
      table.string('front_image_path')
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .integer('autor_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('autors')
        .onDelete('CASCADE')
      table
        .integer('category_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
