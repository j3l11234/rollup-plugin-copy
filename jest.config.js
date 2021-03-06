module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/tests/fixtures/build',
    '<rootDir>/tests/fixtures/dist',
    '<rootDir>/tests/fixtures/lib',
    '<rootDir>/tests/fixtures/src/existing.js'
  ]
}
