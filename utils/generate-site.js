const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'Style.css file copied successfully!'
            })
        })
    })
}

const sampleHtml = '<h1>This will be overwritten to the file</h1>'

module.exports = { writeFile, copyFile }