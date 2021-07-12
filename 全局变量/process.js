
// 剪刀石头布
console.log(process.argv);

let pro = process.argv[2];
// jiandao     shitou    bu
if (pro === "jiandao" || pro === "shitou" || pro === "bu") {
    let coper = ''
    let a = Math.random() * 3
    if (a < 1) {
        coper = "jiandao"
        console.log("jiandao")
    } else if (a > 2) {
        coper = "shitou"
        console.log('shitou')
    } else {
        coper = "bu"
        console.log("bu")
    }
    if (pro === coper) {
        console.log("平局")
    } else if (
        (pro === "jiandao" && coper === "bu") ||
        (pro === "bu" && coper === "shitou") ||
        (pro === "shitou" && coper === "jiandao")
    ) {
        console.log("玩家胜")
    } else {
        console.log("玩家败")
    }
} else {
    console.log("输入错误")
}