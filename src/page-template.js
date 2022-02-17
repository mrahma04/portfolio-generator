const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${userName}</h1>
        <h2><a href="https://github.com/${githubName}">Github</a></h2>
    </body>
    </html>
    `
}

module.exports = generatePage