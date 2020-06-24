const fs = require('fs')
const motifGet = require('../_get/motif.get')

module.exports = (recursive = false) => {

  const readme = fs.readFileSync(
    global.ROOT + '/_readme.md',
    'utf-8'
  )
  const motifs = motifGet()

  fs.writeFileSync(
    global.ROOT + '/README.md',
    readme.replace(
      /\`\/\*\* List of pattern\² instances \*\/\`/,
      motifs.map(motif =>
`
*Generated the ${ (new Date(Date.now())).toLocaleString() }*

### \`${ motif.id }\` | ${ motif.name } pattern

${ motif.description }

#### Instances

${
  motif.get
    ? motif.get()
      .map(item => `* ${ item.id } : \`${ item.path }\``)
      .join('\n')
  
    : '*No instances found*'
}
`)
      .join('\n')
    )
  )
}