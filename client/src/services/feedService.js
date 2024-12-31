import axios from "axios";
const likeService = async(...props)=>{
        
}
const commentService = async(...props)=>{

}
const fetchThoughts = async()=>{
        try{
                const thoughts = await axios.get('http://localhost:3001/thought/all')
                return  thoughts.data;
        }catch(error){
                return error;
        }

}

export {likeService, commentService, fetchThoughts};