const recursiveDirReader = require('../../_commons/recursiveDirReader/recursiveDirReader.common')

/** 
 * Recursively list folders & files in the scope tree whom
 *  path is given in parameters.
 * 
 * @param {string} path The scope to cover,
 *  also the folder id
 */
module.exports = (path = false) =>

  recursiveDirReader(
    global.ROOT
      + (path
        ? '/' + path
        
        : ''),
    true
  )