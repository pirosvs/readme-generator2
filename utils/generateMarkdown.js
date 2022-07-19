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
  The purpose of this project is ${d-purpose}.

  This was accomplished through the use of ${d-skills}. The languages used in this project are ${d-language}.

  ## Installation
  ${installation}.

  ## Usage
  ${usage}.

  ## Contritbutions
  To contribute to this project, please contact me by ${contribution}.

  ## Test
  To test this project, ${test}.

  ## License
  badge goes here or at top idk

  ## Questions
  For any questions, please contact me at ${email}. You can also find me on <a href="https://github.com/${github}">${github}</a>.

  `;
}

module.exports = generateMarkdown;
