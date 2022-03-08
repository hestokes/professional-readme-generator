function generateMarkdown(generateMarkdown) {
return `# <${generateMarkdown.title}>

    ## Description
    
    ${generateMarkdown.description}

    
    ## Table of Contents (Optional)
    
    
    * [Installation](#installation)
    * [description](#usage)
    * [Installation](#credits)
    * [Usage](#license)
    * [Contribute](#contribute)
    * [Test](#test)
    * [License](#license)
    * [Credits](#credits)
    * [Username](#username)
    
    ## Installation
    
    ${generateMarkdown.installation}
    
    ## Usage
    
    ${generateMarkdown.usage}
    
    // To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    
    ## Credits
    
    ${generateMarkdown.credits}

    
    ## GitHub Username

    ${generateMarkdown.username}

    ##Contact me here

    ${generateMarkdown.email}

    ## License
    
    ${generateMarkdown.license}
    
    ---
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute
    
    ${generateMarkdown.contribute}
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Tests
    ${generateMarkdown.tests}
    `;
};



module.exports = {generateMarkdown};