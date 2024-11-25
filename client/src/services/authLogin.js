import axios from "axios";
export const authLogin =  async(username, plainPassword)=>{

        try{
                await axios.post('http://localhost:3001/login', {
                        username: username,
                        plainpassword: plainPassword
                })
                // .then((value)=>{
                //         console.log(value)
                //         return value.data;
                // })
                console.log(`authLogin: ${username} and ${plainPassword}`)
        }catch(error){
                console.log(error)
        }
}