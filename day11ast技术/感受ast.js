const parse = require('@babel/parser')
// JS 转 ast语法树
jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";`
let ast = parse.parse(jscode);
console.log(ast);
// console.log(JSON.stringify(ast,null,'\t'))



