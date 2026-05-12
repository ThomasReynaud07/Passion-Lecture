import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
const { registerValidator, loginValidator } = await import('#validators/auth')

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const registerData = await request.validateUsing(registerValidator)

    const user = await User.create(registerData)

    const token = await User.accessTokens.create(user)

    return response.created({
      user: user.serialize(),
      token: token.toJSON(),
    })
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    const token = await User.accessTokens.create(user)

    return response.ok({
      user: user.serialize(),
      token: token.toJSON(),
    })
  }
}
