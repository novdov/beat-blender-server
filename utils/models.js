const model = require('@magenta/music/node/music_vae')

const globalAny = global
globalAny.performance = Date
globalAny.fetch = require('node-fetch')

const musicVAESampler = new model.MusicVAE(
  'https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/drums_2bar_lokl_small'
)
const musicVAEInterpolator = new model.MusicVAE(
  'https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/drums_2bar_hikl_small'
)

/**
 * Sample sequence from the model prior.
 * Reference: https://github.com/magenta/magenta-js/blob/master/music/src/music_vae/model.ts#L1120
 *
 * @param numSamples: integer.The number of samples to return
 * @param temperature: float. The softmax temperature to use when sampling.
 * @returns An array of sampled `NoteSequence` objects.
 */
const sample = (numSamples, temperature = 0.9) => {
  if (!musicVAESampler.isInitialized()) {
    musicVAESampler
      .initialize()
      .then(() => {
        console.log('MusicVAE sampler is now initialized')
      })
  }
  return musicVAESampler
    .sample(numSamples, temperature)
    .then(samples => {
      return samples
    })
}

/**
 * Interpolate between the input `NoteSequence` object.
 * Reference: https://github.com/magenta/magenta-js/blob/master/music/src/music_vae/model.ts#L839
 *
 * @param inputSequences: An array of 2 or 4 `NoteSequence`s to interpolate
 * between.
 * @param numOutput: The number of pairwise interpolation sequences to
 * return, including the reconstructions.
 * @returns An array of sampled `NoteSequence` objects.
 */
const interpolate = ([inputSequences], numOutput) => {
  if (!musicVAEInterpolator.isInitialized()) {
    musicVAEInterpolator
      .initialize()
      .then(() => {
        console.log('MusicVAE interpolator is now initialized')
      })
  }
  return musicVAEInterpolator
    .initialize()
    .interpolate(inputSequences, numOutput)
}

module.exports = {
  sample: sample,
  interpolate: interpolate
}
