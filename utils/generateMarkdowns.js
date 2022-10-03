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
  