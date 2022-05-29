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
  return   `# ${data.Title}
  ## Description
  ${data.description}


  ## Table of Contents
  - [${title}](#${descriptor(title)})
    - [Description](#-description)
    - [Table of Contents](#-table-of-contents)
    - [Installation](#-installation)
    - [Usage](#-usage)
    - [License](#-license)
    - [Contributing](#-contributing)
    - [Tests](#-tests)
    - [Credits](#-credits)
    - [Questions](#-questions)

  # ${data.Github}
  # ${data.License}


`;
}

module.exports = generateMarkdown;
