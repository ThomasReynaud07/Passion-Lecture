import vine from '@vinejs/vine'
export const booksValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3).maxLength(255),
    pages: vine.number().min(50).max(600),
    extract: vine.string().minLength(50).maxLength(255),
    resume: vine.string().minLength(50).maxLength(255),
    year: vine.number().min(900).max(2026),
    editor: vine.string().minLength(5).maxLength(255),
    frontImagePath: vine.string().minLength(10).maxLength(255),
    authorId: vine.number().exists({ table: 'authors', column: 'id' }),
    categoryId: vine.number().exists({ table: 'categories', column: 'id' }),
  })
)
