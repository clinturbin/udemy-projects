
// Mocha and Basic Testing

// Install Mocha: npm install mocha --save-dev 
//     (--save-dev saves for development purposes only)
//     We don't need Mocha to run our app on a service like Heroku, just need it locally

// Create tests file in utils directory where we store our test cases
//     utils.test.js => mocha will look through pur app and will run any file with test.js extension

// Create test case (function that runs some code, and if things go well the test passes)

// In package.json => scripts object ("test": "mocha **/*.test.js")

// Run test script => npm test


// Watch and Auto Refresh Tests

// nodemon --exec 'npm test'

// With this you won't have to keep switching to the terminal and rerun npm test

// Inside package.json we can make a new script for this
// "test-watch": "nodemon --exec \"npm test\"""
// Then in terminal ->  npm run test-watch