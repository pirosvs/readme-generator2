// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([

    // Title header
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },

    // Main section
    {
      type: 'input',
      message: 'What is the purpose of your project?',
      name: 'd-purpose',
    },
    {
      type: 'input',
      message: 'What skills did you use to make this project?',
      name: 'd-skills',
    },
    {
      type: 'input',
      message: 'What languages did you need for this project?',
      name: 'd-language',
    },
    {
      type: 'input',
      message: 'How would you install this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this project?',
      name: 'usage',
    },

    // To improve
    //  -- ask if the user wants to allow contributions
    //  -- if yes ask what method
    //  -- for that method ask what it is (what is your phone number, what email would be best to contact you, etc)
    {
      type: 'input',
      message: 'How would someone contact you to contribute to this project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'How would you test this project?',
      name: 'test',
    },

    // License section
    {
      type: 'checkbox',
      message: 'What license are you using?',
      choices: ["MIT", "GNU GPLv3"],
      name: 'license',
    },

    // Questions section
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
