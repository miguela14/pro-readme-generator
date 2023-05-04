// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    default:
      return "";
  }
}
renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `
            ## License
            
            This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information. 
            
            ![License](https://img.shields.io/badge/License-${license
              .split(" ")
              .join("%20")}-blue.svg)
            `;
  } else {
    return "";
  }
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

### Description

${data.description}

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation

${data.installation}

### Usage

${data.usage}

### License

This application is covered by the ${data.license} license. 

![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

### Contributing

${data.contribution}

### Tests

${data.tests}

### Questions

For any additional questions, please email me at ${data.questions}. 
You can also check out my GitHub profile at https://github.com/${data.username}.
          `;
}

module.exports = generateMarkdown;
