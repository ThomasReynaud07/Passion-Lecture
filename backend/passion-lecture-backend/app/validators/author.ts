import vine from '@vinejs/vine'

export const authorValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().maxLength(50),
    firstname: vine.string().trim().maxLength(50),
  })
)
