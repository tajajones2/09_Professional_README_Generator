function renderLicenseBadge(license) {
    var badge = "";
    switch (license) {
      case "Apache":
        badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
        break;
      case "Boost":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "BSD 3":
        badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
        break;
      case "CC0":
        badge = "https://licensebuttons.net/l/zero/1.0/80x15.png";
        break;
      case "Eclipse":
        badge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
        break;
      case "GNU GPL v3":
        badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
        break;
      case "IBM":
        badge = "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
        break;
      case "ISC":
        badge = "https://img.shields.io/badge/License-ISC-blue.svg)";
        break;
      case "MIT":
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
      case "Mozilla":
        badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
        break;
      case "SIL":
        badge = "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg";
        break;
      case "Unlicense":
        badge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
        break;
    }
    return badge;
  }
  
  
function renderLicenseLink(license) {
    var link = "";
    switch (license) {
      case "Apache":
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
      case "Boost":
        link = "https://www.boost.org/LICENSE_1_0.txt";
        break;
      case "BSD 3":
        link = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "CC0":
        link = "http://creativecommons.org/publicdomain/zero/1.0/";
        break;
      case "Eclipse":
        link = "https://opensource.org/licenses/EPL-1.0";
        break;
      case "GNU GPL v3":
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "IBM":
        link = "https://opensource.org/licenses/IPL-1.0";
        break;
      case "ISC":
        link = "https://opensource.org/licenses/ISC";
        break;
      case "MIT":
        link = "https://opensource.org/licenses/MIT";
        break;
      case "Mozilla":
        link = "https://opensource.org/licenses/MPL-2.0";
        break;
      case "SIL":
        link = "https://opensource.org/licenses/OFL-1.1";
        break;
      case "Unlicense":
        link = "http://unlicense.org/";
        break;
    }
    return link;
  }