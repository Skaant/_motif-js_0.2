module.exports = {
  id: 'instance',
  name: 'Instance',
  description: `
Instances are manifestations of a pattern,
an individual matching the pattern specification.
`,
  _temp_doc: `Instances are [patterns](../../wiki/pattern)' individuals.
  
Inside \`motif\` framework's they stands as **representation
of patterns' "concrete" manifestations that can actually stand as
files, folders, functions, parameters (etc.) as well as
various combinations of all of these.
  
They serve as operable interfaces for the individual "entities"
the pattern describes.
  
An instance is created by either :
* One of a pattern's factories,
* A pipeline of patterns' factories combination.

Each instance :
* Holds a [reference](reference) to each of the patterns (1..*) it is combined from,
* Must meet its pattern(s) [specifications](specification),
* `
}