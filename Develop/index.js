// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log("project name required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message:'please enter a discription of your project.',
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'please leave a step by step description on how to get the develop enviroment running. (required!)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('please enter instalation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions or examples for use. (required!)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'What liscense is being used? (if none select N/A)',
            choices: ['N/A', 'Boost', 'Eclipse', 'MIT']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'who are the contrubitors?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'what commands are needed to run tests?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'contact info for questions (required)',
            validate: (inquireInput) => {
                if (inquireInput) {
                    return true;
                } else {
                    console.log('please enter contact info!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter email (required!)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('please eneter email address!');
                    return false;
                }
            } 
        }       
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return (console.log);
        } else {
            console.log('README file created!')
        };
    });
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
};

// Function call to initialize app
init();
