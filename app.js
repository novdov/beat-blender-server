import express from 'express'
require('@tensorflow/tfjs-node')

const modelRouter = require('./routes/model')

const app = express()

app.use(express.json())

app.use('/model', modelRouter)
app.get('/', (req, res, next) => {
  res.status(200).send('Hello World from express\n')
})

app.listen(8080)

// const modelUtils = require('./utils/models')
//
// modelUtils
//   .sample(2)
//   .then(samples => {
//     console.log(samples[0])
//   })
