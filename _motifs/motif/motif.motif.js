const motifGet = require("./_get/motif.get");
const motifInstanceSpec = require("./_specs/_instance/motif.instance.spec");
const motifDoc = require("./_doc/motif.doc");

module.exports = {
  id: 'motif',
  name: 'Pattern',
  description: `A [pattern](../../wiki/pattern) describes a
repetition of { [properties](../../wiki/properties)
and [methods](wiki/methods) } shared by a set of
individuals : its [instances](../../wiki/instance).`,
  folderPathPattern: /_motifs\/.*\//,
  fileNamePattern: /.*\.motif\.js/,
  get: motifGet,
  /** Urgent to refactor */
  test: () => motifInstanceSpec(),
  doc: () => motifDoc()
}