const { blackList } = require("./blackList");
const { emailsRegistroControle } = require("./emailsRegistroControle");
const {emailsRegistroControle2505} = require("./emailsRegistroControle2505");



const isIn = blackList.filter((item) => emailsRegistroControle2505.includes(item)).length

// console.table(isIn);
console.log(isIn)
