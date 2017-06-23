const contentful = require('contentful')

const cdaClient = contentful.createClient({
  space: 'ib3nej78kkrt',
  accessToken: 'fe7884d88cd226688ec6e142356161fc585e68b92c4040e57c7fadd44636ac86'
})

module.exports = {
  cdaClient
}
