const recursiveDirReader = require('../../_commons/recursiveDirReader/recursiveDirReader.common')

module.exports = (scope, args) => {

  global.ROOT = scope.replace(/\\/g, '/')

  const motifId = args[2]
  // @todo try catch
  const motif = require(global.ROOT + '/'
    + recursiveDirReader(global.ROOT)
      .find(id =>
        
        id.includes(motifId + '.motif.js')))

  const actionKey = args[3]
  const action = motif[actionKey]
  
  action(...args.slice(4) || [])
}