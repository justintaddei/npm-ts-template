module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => {
      return /^WIP(:\s(.|\n)+)?$/.test(commit.trim())
    }
  ]
}
