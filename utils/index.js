function generateMarkdown(generateMarkdown) {
return `# <${generateMarkdown.title}>

    ## Description
    
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    ${generateMarkdown.description}
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Title](#installation)
    - [description](#usage)
    - [Installation](#credits)
    - [Usage](#license)
    - [Contribute](#contribute)
    - [Test](#test)
    - [License](#license)
    - [Credits](#credits)
    - [Username](#username)
    
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
    
    Need to look at this one!! Deal with populating this piece.
// LICENSE
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
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