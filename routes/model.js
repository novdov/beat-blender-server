import express from 'express'

import * as modelController from '../controllers/model'

const router = express.Router()

router.post(
  '/sample',
  modelController.sample
)

module.exports = router
