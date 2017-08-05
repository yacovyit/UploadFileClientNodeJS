var FormData = require('form-data');
var fs = require('fs');
 
var form = new FormData();

form.append('file', fs.createReadStream('/Users/yacovyitzhak/Documents/tmp/A.Beautiful.Mind.2001.1080p.BluRay.H264.AAC-RARBG.mp4'));
form.submit({
  host: 'localhost',
  port: '8080',
  path: '/myapp/file/upload',
  headers: {'x-test-header': 'test-header-value'}
}, function(err, res) {
  console.log(res.statusCode);
});
