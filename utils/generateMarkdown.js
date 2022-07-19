// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "none") {
    return "";
  } else if (data.license == "MIT") {
    let badge = `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>`;
    return badge;
  } else if (data.license == "GNU GPLv3") {
    let badge = `<img src="https://img.shields.io/badge/License-GPLv3-blue.svg"/>`;
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == "none") {
    return "";
  } else if (data.license == "MIT") {
    let badgeLink = `<a href="https://opensource.org/licenses/MIT"></a>`
    return badgeLink;
  } else if (data.license == "GNU GPLv3") {
    let badgeLink = `<a href="https://www.gnu.org/licenses/gpl-3.0"></a>`;
    return badgeLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license == "none") {
    return "";
  } else {
    return `
    ## License
    ${renderLicenseBadge(data)}
    This project is licensed under the ${data.license} license.
    `;
  }
}

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
  ${data.usage}.` 

  + renderLicenseSection(data) + 

  // ## License
  // This project is licensed under the ${data.license} license.

  `## Contritbuting
  To contribute to this project, please contact me by ${data.contribution}.

  ## Test
  To test this project, ${data.test}.

  ## Questions
  For any questions, please contact me at ${data.email}. You can also find me on <a href="https://github.com/${data.github}">Github</a>.

  `;
}

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

module.exports = generateMarkdown;
