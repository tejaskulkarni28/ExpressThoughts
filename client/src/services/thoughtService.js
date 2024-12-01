import axios from 'axios';

const thoughtService = async (props, sessionUserId, setMessage) =>{
    try{
        const response = await axios.post('http://localhost:3001/thought/add', {data:{
            thought: props,
            sessionUserId: sessionUserId
        }})
        console.log(response.data.message)
        setMessage(response.data.message)
    }catch(error){
        console.log(error)
        setMessage("Error!")
    }


}
export default thoughtService