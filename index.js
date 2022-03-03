const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require('./utils'); 

//inquirer to generate readme questions
const response = generateMarkdown({
    
    installation: 'besides',
    usage: 'besies2'

})
console.log(response);

const promptUser = () => {
 return inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the title of your project? (Required)',
            name: "title",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter the title of your project!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please write a description of your project. (Required)',
            name: "description",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please describe your project here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?. (Required)',
            name: "installation",
            default: "To install dependencies, please run: npm install from the command line."
        },
        {
            type: 'input',
            message: 'How should your project be used? (Required)',
            name: "usage",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter a description of your projects usage here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How should a user contribute to your project?. (Required)',
            name: "contribute",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter how a user can contribute here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How should a user run tests on this project?. (Required)',
            name: "tests",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please inform user of how to run tests here!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            message: 'What license would you like to add to your project?. (Required)',
            name: "license",
            choices: [
                "MIT",
                "Apache License",
                "GPL license",
                "GNU General Public License (GPL) 2.0"
            ]
        },
        {
            type: 'input',
            message: 'Who would you like to thank/credit for their help with this project?.',
            name: "credits",
            default: 'I want to thank God, Google, my instructors, and my family, for making this project possible.'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?. (Required)',
            name: "username",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter your GitHub username here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address if a user has questions?. (Required)',
            name: "tests",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter your email here!');
                return false;
                }
            }
        }

    ]
)};


// fs.writeFile('dist/readme.md', 'hello world', (err) => {});