import vine from '@vinejs/vine'

export const autorValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().maxLength(50),
    firstname: vine.string().trim().maxLength(50),
  })
)
