let path = require('path');

// console.log('path--->', path)

// console.log('__dirname---->', __dirname) // 返回该文件所在的目录的绝对路径
// console.log('__filename---->', __filename) // 返回该文件的绝对路径

//=================path.basename()
// console.log(path.basename('/foo/bar / baz / asdf / quux.html')) //返回 path 的最后一部分
// 第二个参数 忽略文件后缀名
// console.log(path.basename('/foo/bar / baz / asdf / quux.html', '.html'))
//=================  path.extname()方法

//返回 path 的扩展名
// console.log(path.extname('index.html'))
// console.log(path.extname('index.html.md'))
// console.log(path.extname('index.'))
// console.log(path.extname('index'))

//================= // path.parse()方法返回一个对象，其属性表示 path 的重要元素。 尾随的目录分隔符被忽略
// console.log(path.parse('/home/user/dir/file.txt'));

// ================ path.format() 与path.parse()相反
// let pp = {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
// }

// console.log("format == ", path.format(pp))

// ================= path.resolve() 方法将路径或路径片段的序列解析为绝对路径

// console.log(path.resolve('aaa', 'bbb', 'ccc'))
// console.log(path.resolve('/aaa', 'bbb', 'ccc'))// 加斜杠表示根目录
// console.log(path.resolve('/aaa', '/bbb', 'ccc')) //如果有两个根目录后面的会覆盖前面的

// console.log(
//     // \foo\bar\baz\asdf\quux
//     path.resolve('/foo', 'bar', 'baz/asdf', 'quux'),

//     // \foo\bar\baz\asdf
//     path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..'),

//     // \foo\bar\baz\
//     path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..', '..'),
//     path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '../..')

// )
// ================= path.join() 使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
// console.log(path.join('/foo', '/bar', '/baz/asdf', 'quux', '..'))
//\foo\bar\baz\asdf


console.log(path.sep)
console.log(path.delimiter);
