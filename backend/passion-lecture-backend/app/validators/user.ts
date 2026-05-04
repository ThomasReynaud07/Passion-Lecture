import vine from '@vinejs/vine'

export const userValidator = vine.compile(
  vine.object({
    nom: vine.string().trim().minLength(2).maxLength(50),
    email: vine.string().email().maxLength(50).unique({ table: 't_user', column: 'email' }),
    mot_de_pass: vine.string().minLength(8).maxLength(50),
  })
)
