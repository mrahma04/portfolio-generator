const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log('Please enter a GitHub Username!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}

const promptProject = (profileData) => {

    console.log(`
    =================
    Add a New Project
    =================
    `)

    if (!profileData.projects) {
        profileData.projects = []
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description for your project!')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true
                } else {
                    console.log('Please enter a a link to your project!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            defalt: false
        }
        // take the object that is returned, and push it to profileData object
    ]).then(projectAnswers => {
        if (projectAnswers.confirmAddProject) {
            profileData.projects.push(projectAnswers)
            return promptProject(profileData)
        } else {
            profileData.projects.push(projectAnswers)
            return profileData
        }
    })
}

promptUser()
    .then((userAnswers) => promptProject(userAnswers))
    .then(projectAnswers => console.log(projectAnswers))