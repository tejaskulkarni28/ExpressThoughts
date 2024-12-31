import axios from "axios";
export const authLogin =  async(username, plainPassword)=>{

        try{
                const response = await axios.post('http://localhost:3001/auth/login', {
                        username: username,
                        plainpassword: plainPassword
                })
                return response;
        }catch(error){
                console.log(error)
        }
}