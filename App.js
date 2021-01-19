var axios = require('axios')
module.exports = async name => {
if(!name) throw Error('Name not found')
var data = await axios.get(`https://api.npmjs.org/downloads/point/last-year/${name}`) 
return data.data.downloads>5000
}