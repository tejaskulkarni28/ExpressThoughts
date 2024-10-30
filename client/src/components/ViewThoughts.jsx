import getThoughts from '../services/getThoughts';
import {useState, useEffect} from "react";
const ViewThoughts = ()=>{
        let count = 1;
        const[thought, setThought] = useState([])
        useEffect(()=>{
                const fetch = async()=>{
                        const data = await getThoughts();
                        setThought(data)
                        console.log(data)
                }
                fetch()
        },[])
        return(
                // fragment thing
                <> 
                                        {
                                                thought.map((x, index) =>{
                                                        return(
                                                                <div key={index}>
                                                                {count++}
                                                                <div>{x._id}</div>
                                                                <div>{x.thought}</div>
                                                                </div>
                                                        )
                                                })
                                        }
                </>
        )
}

export default ViewThoughts;