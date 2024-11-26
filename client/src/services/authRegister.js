import axios from "axios"

export const authRegister = async(username, plainPassword)=>{
        try{
                const response = await axios.post('http://localhost:3001/auth/register',
                        {
                                username:username,
                                plainpassword: plainPassword
                        }
                )
                console.log(`authRegister: ${response}`)
                return false;
        }catch(error){
                console.log(error)
        }
}