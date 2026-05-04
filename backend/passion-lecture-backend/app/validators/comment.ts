import vine from '@vinejs/vine'

export const commentValidator = vine.compile(
  vine.object({
    contenu: vine.string().trim().maxLength(100),
    note: vine.number().min(0).max(5),

    livre_fk: vine.number().exists({ table: 't_livre', column: 'id' }),
    user_fk: vine.number().exists({ table: 't_user', column: 'user_id' }),
  })
)
