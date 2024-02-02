

const jsonwebtoken = require("jsonwebtoken")
const secret = "tengyp"

const JWT = {

    generate(value,exprires){
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    verify(token){
        try {
            return jsonwebtoken.verify(token, secret)
        } catch (error) {
            return false
        }
        
    }
}

// const token = JWT.generate({name:"yapeng"}, "10s")
// console.log(JWT.verify(token))

module.exports = JWT