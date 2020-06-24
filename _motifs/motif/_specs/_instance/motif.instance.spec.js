const assert = require('assert')
const motifGet = require('../../_get/motif.get')

module.exports = () => {

  const motifs = motifGet()

  motifs.forEach(motif => {

    assert(motif.id)
    console.log('# `' + motif.id + '` pattern')

    assert(motif.name)
    console.log('Name : ' + motif.name)
  })
}