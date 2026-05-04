import vine from '@vinejs/vine'

export const categoryValidator = vine.compile(
  vine.object({
    nom: vine.string().trim().maxLength(50).unique({ table: 'CATEGORIE', column: 'nom' }),
  })
)
