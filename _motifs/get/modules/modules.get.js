const recursiveDirReader = require("../../_commons/recursiveDirReader/recursiveDirReader.common")

/**
 * This accesser can only retrieve 
 *  instances of `modules`, or more specialized
 *  patterns like `func` and `data`. 
 * 
 * This restriction of use is made to allow
 *  specific `id`-entified access. */
module.exports = (motif, id = false, transform = false) => {

  if (!motif.folderPathPattern
      || !motif.fileNamePattern) {

    throw new Error('Missing motif folderPathPattern or fileNamePattern')
  }

  /** Retrieve occurences file path */
  const list = recursiveDirReader(global.ROOT)
    .filter(path =>
      
      path.search(motif.folderPathPattern) !== -1
        && path.search(motif.fileNamePattern) !== -1)

  if (id) {

    const path = list.find(path =>
      
      path.search(`${ id }/${ id }.motif.js`) !== -1)

    const instance = {
      path,
      ...require(global.ROOT + path)
    }
    
    return transform
      ? transform(instance)

      : instance

  } else {

    return list.map(path => {

      const instance = {
        path,
        ...require(global.ROOT + path)
      }
      
      return transform
        ? transform(instance)

        : instance
    })

  }
}