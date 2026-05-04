import vine from '@vinejs/vine'

export const bookValidator = vine.compile(
  vine.object({
    titre: vine.string().trim().maxLength(50),
    pages: vine.number().positive(),
    extrait: vine.string().maxLength(100).optional(),
    resume: vine.string().maxLength(200).optional(),
    editeur: vine.string().maxLength(50),
    annee: vine.number().min(0).max(new Date().getFullYear()),
    image_couverture: vine.string().maxLength(100).optional(),

    auteur_fk: vine.number().exists({ table: 't_auteur', column: 'auteur_id' }),
    user_fk: vine.number().exists({ table: 't_user', column: 'user_id' }),
    categorie_id: vine.number().exists({ table: 't_categoie', column: 'id' }),
  })
)
