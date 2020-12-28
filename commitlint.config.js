module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => {
      return commit === 'WIP' || /^WIP:\s(.|\n)+$/.test(commit)
    }
  ]
}
