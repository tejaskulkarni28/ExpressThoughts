import {useState} from "react"
import thoughtService from "../services/thoughtService";
const AddThought = ()=>{
    const[state, setState] = useState();
    const handleSubmit= (event)=>{
        console.log(event);
        event.preventDefault();
        console.log(state + " handleSubmit()")
        thoughtService(state)
    }
    return(
        <div className="">
            <div className="">
                    <input type="text" onChange={(event)=>{setState(event.target.value)}} placeholder="Type your any thought which comes to mind.."/>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default AddThought;