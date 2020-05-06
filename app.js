import express from 'express'
require('@tensorflow/tfjs-node')

const modelRouter = require('./routes/model')

const app = express()

app.use(express.json())

app.use('/model', modelRouter)
app.get('/', (req, res, next) => {
  res.status(200).send('Beat blender server is running\n')
})

app.listen(8080)
