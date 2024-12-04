module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

//my testing was not working cause my code was in es6 and jest speaks commonJS. i added babel to help solve this miscommunication. this code imports the function then tests. i started by writing this first to try the TDD approach.