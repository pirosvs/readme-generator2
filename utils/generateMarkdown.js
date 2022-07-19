// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  The purpose of this project is ${data.purpose}.

  This was accomplished through the use of ${data.skills}. The languages used in this project are ${data.language}.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contritbuting)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}.

  ## Usage
  ${data.usage}.

  ## License
  badge goes here or at top idk

  ## Contritbuting
  To contribute to this project, please contact me by ${data.contribution}.

  ## Test
  To test this project, ${data.test}.

  ## Questions
  For any questions, please contact me at ${data.email}. You can also find me on <a href="https://github.com/${data.github}">${data.github}</a>.

  `;
}

module.exports = generateMarkdown;
