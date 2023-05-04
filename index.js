// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
    },
    {
        type: 'input',
        message: 'Project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Click enter for table of content.',
        name: 'tableOfContents'
    },
    {
        type: 'input',
        message: 'What are your instructions for installation?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Any usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'what licenses does your application have?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Guidelines for contribution?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What instructions do you have in order to test your application?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'what is your GitHub username',
        name: 'username'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, {encoding: 'utf-8'}, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('README file created successfully!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const markdownString = generateMarkdown(answers);
        console.log(markdownString)
        writeToFile('README.md', markdownString);
        
    })
};

// Function call to initialize app

init();
