import axios from 'axios';

const thoughtService = async (props, setMessage) =>{
    try{
        const response = await axios.post('http://localhost:3001/thought/add', {data:props})
        console.log(response.data.message)
        setMessage(response.data.message)
    }catch(error){
        console.log(error)
        setMessage("Error!")
    }


}
export default thoughtService