import vine from '@vinejs/vine'

export const userValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(2).maxLength(50),
    email: vine.string().email().maxLength(50),
    password: vine.string().minLength(8).maxLength(50),
  })
)
