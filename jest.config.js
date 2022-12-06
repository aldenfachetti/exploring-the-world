module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.tsx'],
  modulePaths: ['<rootDir>/src/']
  // transformIgnorePatterns: [
  //   './node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)'
  // ]
}
