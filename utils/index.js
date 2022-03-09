const {licenseBadgeLinks} = require("./licensebadges.js");


function generateMarkdown(generateMarkdown) {

return `# <${generateMarkdown.title}>

${licenseBadgeLinks (generateMarkdown.license)}



    
## Table of Contents
    

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)


## Description
    
${generateMarkdown.description}

## Installation

In order to install dependencies for this app, please utilize ${generateMarkdown.installation} in your terminal. 


## Usage

${generateMarkdown.usage}


## Tests

If you would like to run tests on this app, please utilize the instructions provided here: ${generateMarkdown.tests} 


## Questions

If you have questions about this app, please contact me at ${generateMarkdown.email}.  Or via GitHub at [${generateMarkdown.username}](https://github.com/${generateMarkdown.username}).


## Credits

${generateMarkdown.credits}


## Contributing
    
${generateMarkdown.contribute}


## License

This respository is licensed under the ${generateMarkdown.license} license.

---
`;
};



module.exports = {generateMarkdown};