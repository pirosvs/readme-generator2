// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license == "none") {
    return "";
  } else if (data.license == "MIT") {
    return `<a href="https://img.shields.io/badge/License-MIT-yellow.svg"></a>`;
  } else if (data.license == "GNU GPLv3") {
    return `<a href="https://img.shields.io/badge/License-GPLv3-blue.svg"></a>`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license == "none") {
    return "";
  } else if (data.license == "MIT") {
    return `<a href="https://opensource.org/licenses/MIT"></a>`;
  } else if (data.license == "GNU GPLv3") {
    return `<a href="https://www.gnu.org/licenses/gpl-3.0"></a>`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license == "none") {
    return "";
  } else if (data.license == "MIT") {
    return ;
  } else if (data.license == "GNU GPLv3") {
    return ;
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
  ${data.usage}.

  ## License
  This project is licensed under the ${data.license} license.

  ## Contritbuting
  To contribute to this project, please contact me by ${data.contribution}.

  ## Test
  To test this project, ${data.test}.

  ## Questions
  For any questions, please contact me at ${data.email}. You can also find me on <a href="https://github.com/${data.github}">${data.github}</a>.

  `;
}

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

module.exports = generateMarkdown;
