module.exports = {
	testPathIgnorePattern: ['/node_modules'],
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	testEnvironment: 'jsdom',
};
