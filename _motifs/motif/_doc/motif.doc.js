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
      `*Generated the ${ (new Date(Date.now())).toLocaleString() }.*\n\n`
        /** Table of matters */
        + motifs.map(motif => 
          
          `* [\`${ motif.id }\` | ${ motif.name } pattern]`
            + `(#${ motif.id }--${ motif.name.toLowerCase() }-pattern)`)
          .join('\n')
        /** Pattern section */
        + motifs.map(motif =>
`


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