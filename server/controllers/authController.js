const {encryptPassword, verifyPassword} = require('../auth/bcrypt')

const encryptedPassword = async(plainPassword)=>{
        const result = await encryptPassword(plainPassword);
        return result;
}
const verifiedPassword = async(plainPassword, hashedPassword)=>{
        const result = await verifyPassword(plainPassword, hashedPassword)
        return result;
}

module.exports = {
        encryptedPassword,
        verifiedPassword
}

