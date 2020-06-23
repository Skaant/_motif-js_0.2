const fs = require('fs')
const motifIdFile = require('./_files/motifId/motifId.file')

/**
 * 
 * @param {string} id The unique* pattern identifier.
 * @param {string} name The usual pattern name.
 * @param {Object} params Params to be converted in .
 */
module.exports = (
  id,
  name,
  props = {}
) => {

  const {
    rootPath = false
  } = props

  try {

    /** @todo Replace with a folder/file representation */

    /** 1 : <rootPath>/_motifs folder */

    const motifsFolderPath = global.ROOT
      + '/' + rootPath
      + '/_motifs'

    if (!fs.existsSync(motifsFolderPath)) {

      fs.mkdirSync(motifsFolderPath)
    }

    /** 2 : _motifs/<motif_id> folder */

    const motifIdFolderPath = motifsFolderPath + '/' + id

    if (fs.existsSync(motifIdFolderPath)) {

      throw new Error(`Folder "${ motifIdFolderPath }" already exists.`)

    }
    
    fs.mkdirSync(folderPath)

    /** 3 : <motif_id>/<motif_id>.motif.js */

    const motifIdFilePath = folderPath + '/' + id + '.motif.js'

    if (fs.existsSync(motifIdFilePath)) {

      throw new Error(`File "${ motifIdFilePath }" already exists.`)
    }

    fs.writeFileSync(
      motifIdFilePath,
      motifIdFile({
        id,
        name
      })
    )

    console.log(`Pattern "${ id }" succesfully created !\n* File path : "${ scope + '/_motifs/' + id + '/' + id + '.motif.js' }"`)

  } catch (err) {
    
    console.error(err)
  }
}