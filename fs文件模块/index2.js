let fs = require('fs')
let path = require('path');
// 异步地读取文件的全部内容。 fs.readFile()
fs.writeFile(path.join(__dirname, '2.txt'), '呵呵', (err, data) => {
    if (err) {
        console.log('失败')
    } else {
        console.log('成功')
    };

})