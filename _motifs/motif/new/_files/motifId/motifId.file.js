module.exports = ({
  id,
  name
}) =>

`
/** The \`${ id }\` pattern \`motif\` file */
module.exports = {
  id: '${ id }',
  name: '${ name }',
  description: false
}
`