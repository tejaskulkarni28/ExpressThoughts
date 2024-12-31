import axios from 'axios';

const thoughtService = async (props, sessionUserId, setMessage, setSaved) =>{
    try{
        const response = await axios.post('http://localhost:3001/thought/add', {data:{
            thought: props,
            sessionUserId: sessionUserId
        }})
        console.log(response.data.message)
        setSaved(true);
        setMessage(response.data.message)
    }catch(error){
        console.log(error)
        setMessage(error)
        setSaved(false);
    }


}
export default thoughtService