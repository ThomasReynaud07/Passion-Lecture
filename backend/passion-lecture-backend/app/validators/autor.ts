import vine from '@vinejs/vine'

export const autorValidator = vine.compile(
  vine.object({
    lastName: vine.string().trim().maxLength(50),
    firstName: vine.string().trim().maxLength(50),
  })
)
