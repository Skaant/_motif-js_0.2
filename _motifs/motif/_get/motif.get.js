const recursiveDirReader = require("../../_commons/recursiveDirReader/recursiveDirReader.common")

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

      console.log(list.map(path => ({
        path,
        ...require(global.ROOT + path)
      })))
    }
  }
}