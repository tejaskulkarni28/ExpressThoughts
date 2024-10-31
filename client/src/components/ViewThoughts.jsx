import getThoughts from '../services/getThoughts';
import {useState, useEffect} from "react";
import viewThought from '../style/viewThought.css';
import thoughts from '../style/thoughts.css';
const ViewThoughts = ()=>{
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
                        <div className='container'>
                                <div className='content'>
                                {
                                        thought.length <= 0 ? <h1>Thoughts not found! Please navigate to `Home` and write a thought.</h1> : 
                                                thought.map((x, index) =>{
                                                        return(
                                                                <div key={index} className='thoughtContainer'>
                                                                        <div>
                                                                                <div className="thoughtContent"><p>{x.thought}</p></div>
                                                                        </div>
                                                                </div>
                                                        )
                                                })
                                        }
                                </div>
                                
                        </div>                      
                </>
        )
}

export default ViewThoughts;