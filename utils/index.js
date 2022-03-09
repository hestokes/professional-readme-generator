const {licenseBadgeLinks} = require("./licensebadges.js");



function generateMarkdown(generateMarkdown) {


    
return `# <${generateMarkdown.title}>

${licenseBadgeLinks (generateMarkdown.license)}

## Description
    
    ${generateMarkdown.description}

    
    ## Table of Contents (Optional)
    
    
    * [Installation](#installation)
    * [Description](#usage)
    * [Installation](#credits)
    * [Usage](#license)
    * [Contribute](#contribute)
    * [Test](#test)
    * [License](#license)
    * [Credits](#credits)
    * [Questions](#username)
    
    ## Installation
    
    In order to install dependencies fort this app, please utilize ${generateMarkdown.installation} in your terminal. 
    
    ## Usage
    
    ${generateMarkdown.usage}
    
    // To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    
    ## Credits
    
    ${generateMarkdown.credits}

    

    ##Questions

    If you have questions, please contact me at ${generateMarkdown.email}. Or via GitHub at ${generateMarkdown.username}.

    ## License
    
    This respository is licensed under the ${generateMarkdown.license} license.
    
    ---
    
    ## How to Contribute
    
    ${generateMarkdown.contribute}
    
    ## Tests
    
    If you would like to run tests, utilize the following from the command line: ${generateMarkdown.tests}
    `;
};



module.exports = {generateMarkdown};