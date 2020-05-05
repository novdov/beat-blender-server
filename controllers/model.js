import * as modelUtils from '../utils/models'

exports.sample = (req, res, next) => {
  const numSamples = req.body.numSamples
  const temperature = req.body.temperature

  modelUtils
    .sample(numSamples, temperature)
    .then(result => {
      console.log(result)
      res.status(201).json({
        samples: result,
        message: `Total ${numSamples} sampled`
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
