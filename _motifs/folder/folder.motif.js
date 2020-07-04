module.exports = {
  id: 'folder',
  name: 'Folder',
  description: 
`
A folder is identified by an id,
which is also its path in the directory.

Based on the \`composite\` pattern,
it can recursively hold several
\`folder\` and \`file\` components.
`,
  get: require('./_get/folder.get')
}