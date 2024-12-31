import axios from "axios"

export const authRegister = async(username, plainPassword)=>{
        try{
                const response = await axios.post('http://localhost:3001/auth/register',
                        {
                                username:username,
                                plainpassword: plainPassword
                        }
                )
                return response;
        }catch(error){
                console.error(`Error in authRegister: ${error}`);
                throw error;
        }
}