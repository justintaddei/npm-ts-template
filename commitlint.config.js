module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => {
      console.log('commit :>> ', commit)
      console.log('/^WIP(:s[.\n]+)?$/.test(commit) :>> ', /^WIP(:\s[.\n]+)?$/.test(commit))
      return /^WIP(:\s[.\n]+)?$/.test(commit)
    }
  ]
}
