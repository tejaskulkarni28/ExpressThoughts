import axios from "axios";
export const authLogin =  async(username, plainPassword)=>{

        try{
                const response = await axios.post('http://localhost:3001/auth/login', {
                        username: username,
                        plainpassword: plainPassword
                })
                if(response.status === 200 && response.data.success && response.data.message === "Login successfull"){
                        return true;
                }else{
                        console.log(`authLogin: ${response.status}`)
                        console.log(`authLogin: ${response.data.message}`)
                        console.log(`authLogin: ${response.data.success}`)
                        console.log(`authLogin: ${response.data.error}`)
                        console.log(`authLogin: ${username} and ${plainPassword}`)

                        return false;
                }
        }catch(error){
                console.log(error)
        }
}