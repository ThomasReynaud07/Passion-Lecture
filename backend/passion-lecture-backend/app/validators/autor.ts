import vine from '@vinejs/vine'

export const autorValidator = vine.compile(
  vine.object({
    nom: vine.string().trim().maxLength(50),
    prenom: vine.string().trim().maxLength(50),
  })
)
