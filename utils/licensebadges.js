// markdown links to license badge images
const licenseBadgeLinks = (license) => {

    let licenseChosen = license;
    let yourLicenseBadge = '';
    if(licenseChosen === "Apache 2.0") {
        yourLicenseBadge = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseChosen === "GNU v3") {
        yourLicenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseChosen === "MIT") {
        yourLicenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseChosen === "Mozilla Public License 2.0") {
        yourLicenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    return yourLicenseBadge;
}

module.exports = {licenseBadgeLinks};




