import type { HttpContext } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/api_response.js'

export default class MainsController {
  async index({ response }: HttpContext) {
    return ApiResponse.ok(response, null, 'Profile update successfully')
  }
}
