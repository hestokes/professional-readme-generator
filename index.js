const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require('./utils'); 


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
            default: "npm install"
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
                console.log('Please enter a message regarding user contribution here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How should a user run tests on this project?.',
            name: "tests",
            default: "[Please visit npm Docs for detailed infromation on using npm modules.](https://docs.npmjs.com/)"
        },
        {
            type: 'list',
            message: 'What license would you like to add to your project?. (Required)',
            name: "license",
            choices: [
                "Apache 2.0",
                "GNU v3",
                "MIT",
                "Mozilla Public License 2.0",
                "WTFPL"
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
            name: "email",
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

promptUser()
.then(response => {
    const readME = generateMarkdown(response);

            
    fs.writeFile('dist/readme.md', readME, err => {
    if (err) throw new Error(err);
    
    console.log('Page created! Check out readme.md in this directory to see it!')

});

});

