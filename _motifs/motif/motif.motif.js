const motifGet = require("./_get/motif.get");
const motifInstanceSpec = require("./_specs/_instance/motif.instance.spec");

module.exports = {
  id: 'motif',
  name: 'Pattern',
  description: `A [pattern](../../wiki/pattern) describes a
repetition of { [properties](../../wiki/properties)
and [methods](wiki/methods) } shared by a set of
individuals : its [instances](../../wiki/instance).`,
  get: motifGet,
  /** Urgent to refactor */
  test: () => motifInstanceSpec()
}