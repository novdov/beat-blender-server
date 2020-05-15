import fs from 'fs'
import path from 'path'

const modelConfigPath = path.join(__dirname, '..', 'model_config.json')
const loadedJson = JSON.parse(fs.readFileSync(modelConfigPath).toString())

module.exports = loadedJson
