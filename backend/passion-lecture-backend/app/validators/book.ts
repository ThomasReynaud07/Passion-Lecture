import vine from '@vinejs/vine'
export const booksValidator = vine.compile(
  vine.object({
    titre: vine.string().minLength(3).maxLength(255),
    pages: vine.number().min(50).max(600),
    extrait: vine.string().minLength(50).maxLength(255),
    resume: vine.string().minLength(50).maxLength(255),
    annee: vine.number().min(900).max(2026),
    editeur: vine.string().minLength(5).maxLength(255),
    imageCouverture: vine.string().minLength(10).maxLength(255),
  })
)
