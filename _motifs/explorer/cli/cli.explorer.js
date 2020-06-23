const motifGet = require("../../motif/_get/motif.get")

module.exports = (scope, args) => {

  global.ROOT = scope.replace(/\\/g, '/')

  const motifId = args[2]
  const motif = motifGet(motifId)

  const actionKey = args[3]
  const action = motif[actionKey]
  
  action(...args.slice(4))
}