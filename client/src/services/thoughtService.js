import axios from 'axios';

const thoughtService = (props)=>{
    axios.post('http://localhost:3001/thought/add', {data:props})
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        if(err){ 
            console.log("Error: " + err)
        }
    })
}
export default thoughtService