import vine from '@vinejs/vine'

export const commentValidator = vine.compile(
  vine.object({
    content: vine.string().trim().maxLength(100),
    rate: vine.number().min(0).max(5),
  })
)
