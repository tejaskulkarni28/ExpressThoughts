const bcrypt = require('bcrypt')

const encryptPassword = async(plainPassword) => {
        const saltRounds = 10; // the cost factor for hashing
        const encryptedPassword = await bcrypt.hash(plainPassword, saltRounds)
        return encryptedPassword
}
// encryptPassword("test1").then((value)=>{
//         console.log(value)
// })
const verifyPassword = async(plainPassword, hashedPassword)=>{
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
}

module.exports = {encryptPassword, verifyPassword}

