/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MainsController = () => import('#controllers/mains_controller')

router.get('/', [MainsController, 'index'])
