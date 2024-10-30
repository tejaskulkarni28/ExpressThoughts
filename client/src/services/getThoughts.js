import axios from "axios";

const getThoughts = async(req, res)=>{
        try{
                const response = await axios.get('http://localhost:3001/thought/view')
                console.log(response.data.thoughts)
                return response.data.thoughts;
        }catch(error){
                console.log('getThoughts.js => ', error)
        }
}


export default getThoughts;