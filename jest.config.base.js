module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/test/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "(test/.*.mock).(jsx?|tsx?)$",
  ],
  projects: ["<rootDir>"],
  coverageDirectory: "<rootDir>/coverage/",
  verbose: true,
};
