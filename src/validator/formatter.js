const trim=function(){
        const string="   Hello World   "
        // console.log(string)
        console.log(string.trim())
}
const changetoLowerCase=function(){
    const string="HELLO WORLD"
    console.log(string.toLowerCase())
}
const changetoUpperCase=function(){
    const string="hello world"
    console.log(string.toUpperCase())
}

module.exports.trim=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changetoUpperCase