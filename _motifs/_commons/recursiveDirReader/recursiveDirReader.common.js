const fs = require('fs')

/** 
 * Recursively list folders & files in the scope tree whom
 *  path is given in parameters.
 * 
 * @param {string} path The scope tree
 * 
 * @note It's part of the `folder` core but
 *  had to be externalized for outside `explorer`s.
 */
const recursiveDirReader = (path, nested = false) => {
    
  const dirents = fs.readdirSync(
    path,
    {
      withFileTypes: true
    }
  )

  return dirents.reduce(
    (
      tree,
      dirent
    ) => {

      const name = dirent.name
      const _path = path + '/' + name
      const id = _path.slice(global.ROOT.length + 1)

      /** The `dirent` is a file */
      if (!dirent.isDirectory()) {

        return nested
          ? {
            ...tree,
            /** Temporary shape of a file.
             * 
             * @todo Replace with pattern `file`.
             */
            [name]: true
          }

          : [
            ...tree,
            id
          ]

      /** The `dirent` is a folder */
      } else {

        /** Exclusion */
        if (dirent.name === '.git'
          || dirent.name === '.vscode'
          || dirent.name === 'node_modules') {

          return tree
        }

        return nested
          ? {
            ...tree,
            [dirent.name]: recursiveDirReader(
              _path,
              nested
            )
          }

          : [
            ...tree,
            id,
            ...recursiveDirReader(
              _path,
              nested
            )
          ]
      }
    },
    nested
      ? {}
      
      : [])
}

module.exports = recursiveDirReader