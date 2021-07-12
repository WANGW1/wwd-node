
let fs = require('fs');
let path = require('path');
// 异步地读取文件的全部内容。 fs.readFile()
fs.readFile(path.join(__dirname, '1.txt'), 'utf8', (err, data) => {
    if (err) return;
    console.log('data ---->', data);
    console.log('data ---->', data.toString());
})