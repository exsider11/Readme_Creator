// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Enter Title of README.md',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Enter method of Installation',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Enter Usage of project',
        type: 'input'
    },
    {
        name: 'licenses',
        message: 'Enter licenses',
        type: 'list',
        choices: ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0', 'BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','BSD 4-clause "Original" or "Old" license','BSD Zero-Clause license','Creative Commons license family','Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution ShareAlike 4.0','Do What The F*ck You Want To Public License','Educational Community License v2.0','Eclipse Public License 1.0','Eclipse Public License 2.0','European Union Public License 1.1','GNU Affero General Public License v3.0','GNU General Public License family','GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c', 'Microsoft Public Licens','MIT','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','The Unlicense','zLib License']
    },
    {
        name: 'contributors',
        message: 'Enter contributors',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Enter tests performed',
        type: 'input'
    },
    {
        name: 'questions',
        message: 'Enter questions if any',
        type: 'input'
    },
    {
        name: 'githubName',
        message: 'What is your github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'what is your email?',
        type:'input'
    }
];
// TODO: Create a function to write README file
function licenseIcon(license) {
    if(license = "Apache license 2.0"){
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    }
    else if(license = 'Artistic license 2.0'){  
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)"
    }
    else if(license = 'BSD 2-clause "Simplified" license'){
      return "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"
    }
    else if(license = 'BSD 3-clause "New" or "Revised" license'){
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
    else if(license = 'Creative Commons Attribution 4.0'){
      return "![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)"
    }
    else if(license = 'Creative Commons Attribution ShareAlike 4.0'){
      return "![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)"
    }
    else if(license = 'Eclipse Public License 1.0'){
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
    }
    else if(license = 'GNU General Public License v2.0'){
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)"
    }
    else if(license = 'GNU General Public License v3.0'){
      return "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
    }
    else if(license = 'GNU Lesser General Public License v3.0'){
      return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)"
    }
    else if(license = 'Mozilla Public License 2.0'){
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
    }
    else if(license = 'zLib License'){
      return "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)"
    }
    else{
      return "";
    }
  }
  function licenseLink(license) {
    if(license = "Apache license 2.0"){
      return "(https://opensource.org/licenses/Apache-2.0)";
    }
    else if(license = 'Artistic license 2.0'){
      return "(https://opensource.org/licenses/Artistic-2.0)"
    }
    else if(license = 'BSD 2-clause "Simplified" license'){
      return "(https://opensource.org/licenses/BSD-2-Clause)"
    }
    else if(license = 'BSD 3-clause "New" or "Revised" license'){
      return "(https://opensource.org/licenses/BSD-3-Clause)"
    }
    else if(license = 'Creative Commons Attribution 4.0'){
      return "(https://creativecommons.org/licenses/by/4.0/)"
    }
    else if(license = 'Creative Commons Attribution ShareAlike 4.0'){
      return "(https://creativecommons.org/licenses/by-sa/4.0/)"
    }
    else if(license = 'Eclipse Public License 1.0'){
      return "(https://opensource.org/licenses/EPL-1.0)"
    }
    else if(license = 'GNU General Public License v2.0'){
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }
    else if(license = 'GNU General Public License v3.0'){
      return "(https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if(license = 'GNU Lesser General Public License v3.0'){
      return "(https://www.gnu.org/licenses/lgpl-3.0)"
    }
    else if(license = 'Mozilla Public License 2.0'){
      return "(https://opensource.org/licenses/MPL-2.0)"
    }
    else if(license = 'zLib License'){
      return "(https://opensource.org/licenses/Zlib)"
    }
    else{
        return ""
    }
  }
function writeToFile(fileName, data) {
    var badge = "";
    if(data.licenses = "Apache license 2.0"){
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    fs.appendFile(`${fileName}.md`,
    `#Table of Conents\n##installation\n##usage\n##licenses\n##contributors\n##tests\n##questions\n#Installation processes\n##${data.installation}\n#Useage of project\n##${data.usage}\n#Licenses used\n##${data.licenses}${licenseIcon(data.licenses)}\n###Licence Link${licenseLink(data.licenses)}\n#Contributors\n##${data.contributors}\n#Test Done\n##${data.tests}\n#Questions\n##${data.questions}\n##If you have any more questions contact me at\n###${data.githubName}\n###${data.email}`
    , (err) =>
    err ? console.error(err) : console.log('README.md Made!'))
}
// TODO: Create a function to initialize app
function init() {    
    return inquirer.prompt(questions).then((answers) =>{
        writeToFile(answers.title, answers);
})}
// Function call to initialize app
init();
