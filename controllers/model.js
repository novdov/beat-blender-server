import * as modelUtils from '../utils/models'

exports.sample = (req, res, next) => {
  console.log(req.body)
  const numSamples = req.body.numSamples
  const temperature = req.body.temperature

  modelUtils
    .sample(numSamples, temperature)
    .then(result => {
      console.log(result)
      res.status(201).json({
        samples: result,
        message: numSamples.toString() + ' sampled'
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
