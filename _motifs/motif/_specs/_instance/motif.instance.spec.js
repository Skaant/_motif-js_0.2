const assert = require('assert')
const motifMotif = require('../../motif.motif')

module.exports = () => {

  const motifs = motifMotif.get()

  motifs.forEach(motif => {

    assert(motif.id)
    console.log('# `' + motif.id + '` pattern')

    assert(motif.name)
    console.log('Name : ' + motif.name)
  })
}