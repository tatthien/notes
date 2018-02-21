/**
 * Generate _redirect file after building static files
 */
const fs = require('fs')
const path = require('path')

let redirectContent = '/*    /index.html   200'

let filePath = path.resolve(__dirname, '../../dist/_redirects')

fs.writeFile(filePath, redirectContent, (err) => {
  if (err) throw err;
  console.log('The _reidrects file was successfully created.')
});