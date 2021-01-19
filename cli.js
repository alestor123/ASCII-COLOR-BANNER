#!/usr/bin/env node
var ispopular = require('./App');
(async () => {
var data = await ispopular(process.argv[2])
if(data) console.log('Yeah its pretty popular')
else console.log('Still Below 5000')
})();
