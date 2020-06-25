const motifMotif = require('../../motif/motif.motif')

module.exports = (scope, args) => {

  global.ROOT = scope.replace(/\\/g, '/')

  const motifId = args[2]
  let motif

  if (motifId !== motifMotif.id) {

    motif = motif._get(motifId)

  } else {

    motif = motifMotif
  }

  const actionKey = args[3]
  const action = motif[actionKey]
  
  action(...args.slice(4))
}