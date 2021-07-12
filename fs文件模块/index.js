let fs = require('fs')

fs.stat(__dirname, (err, stats) => {
    if (err) {
        console.log('失败')
    }
    console.log(__filename)
    console.log(stats.isFile()); //描述常规文件，则返回 true。
    console.log(stats.isDirectory()); //描述文件系统目录，则返回 true。
})