const recursiveDirReader = require("../../_commons/recursiveDirReader/recursiveDirReader.common")

/** 
 * Returns one (if an id is given) or
 *  multiple pattern objects.
 * 
 * @param {false|string} id 
 * @param {false|any} debug 
 */
module.exports = (id = false, debug = false) => {

  const list = recursiveDirReader(global.ROOT)
    /** Imported from `/_motif-js_0.1/_motifs/motif/_processors/instances/motif.instances.processor.js` */
    .filter(path =>
      
      path.search(/* motif.folderPathPattern */
        /_motifs\/.*\//) !== -1
          && path.search(
            /.*\.motif\.js/
          ) !== -1)

  if (id) {

    const motifPath = list.find(path =>
      
      path.search(`${ id }/${ id }.motif.js`) !== -1)

    if (debug) {

      console.log({
        path: motifPath,
        ...require(global.ROOT + motifPath)
      })
    }

    return {
      path: motifPath,
      ...require(global.ROOT + motifPath)
    }

  } else {

    if (!debug) {

      return list.map(path => ({
        path,
        ...require(global.ROOT + path)
      }))

    } else {

      console.log(list.map(path => {
        const {
          id,
          name,
          description
        } = require(global.ROOT + path)
        
        return {
          path,
          id,
          name,
          description: description.length + ' characters'
        }
      }))
    }
  }
}