import axios from "axios";

const likeService = async({tweetUserId, updatedLikes})=>{
        try{
                await axios.post("http://localhost:3001/thought/liked", {
                        tweetUserId,
                        updatedLikes
                })
        }catch(error){
                console.log(error)
        }
}
const commentService = async(...props)=>{

}
// const fetchThoughts = async()=>{
//         try{
//                 const thoughts = await axios.get('http://localhost:3001/thought/all')
//                 return  thoughts.data;
//         }catch(error){
//                 return error;
//         }

// }
const fetchThoughtsWithUsernames = async()=>{
        try{
                const thoughtsWithUsernames = await axios.get('http://localhost:3001/thought/all/withusers')
                return thoughtsWithUsernames.data
        }catch(error){
                return error;
        }
}

export {likeService, commentService, fetchThoughtsWithUsernames};
// export {likeService, commentService, fetchThoughts};
// export {likeService, commentService};