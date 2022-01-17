// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Liscense](#liscense)
  * [Contributors](#Contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions:
  ${data.questions}
`;
}

module.exports = generateMarkdown;
