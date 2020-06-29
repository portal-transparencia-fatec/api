var fs = require('fs')

const base64JS = {

  encode: async function (file) {
    return new Promise(function (resolve, reject) {
      try {
        var bitmap = fs.readFileSync(file)
        // convert binary data to base64 encoded string
        resolve(Buffer.from(bitmap).toString('base64'))
      } catch (e) {
        reject(e)
      }
    })
  },

  decode: async function (base64str, newFile) {
    return new Promise(function (resolve, reject) {
      try {
      // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        var bitmap = Buffer.from(base64str, 'base64')
        // write buffer to file
        fs.writeFileSync(newFile, bitmap)
        resolve('decoded!')
      } catch (e) {
        reject(e)
      }
    })
  }
}
module.exports = base64JS
