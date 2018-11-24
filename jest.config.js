const path = require("path")

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: path.resolve(__dirname, 'setupTests.js')
};