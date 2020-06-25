const motifMotif = require('../motif.motif')
const modulesGet = require("../../get/modules/modules.get")

/** 
 * Returns one (if an id is given) or
 *  multiple pattern objects.
 * 
 * @param {false|string} id 
 * @param {false|any} debug 
 */
module.exports = (id = false, recursive = false, debug = false) =>

  modulesGet(
    motifMotif,
    id,
    debug ?
      instance => {
        
        console.log(instance)

        return instance
      }

      : false
  )