let a = function () {
    console.log("嗨嗨嗨")
}

let b = "嘿嘿嘿";

let obj = {
    a: "哈哈哈",
    c: function () {
        console.log("咳咳咳")
    }
}

// module.exports.aa = a
// module.exports = a
// exports.a = a

// module.exports.ss    空对象
// module.exports.ss = b    返回 object
// module.exports = b    返回 string
// exports.ss = b       返回 object


module.exports.ss = obj
module.exports = obj // 断开

console.log("exports ---->", exports)  // 默认指向空对象

// module.exports.ss === exports
// 想让 exports 指向 obj 

exports = module.exports = obj

console.log("exports ---->", exports) // 指向obj对象
