import AddThought from "../components/AddThought";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import '../style/addThought.module.css';
import { sessionItems } from "../services/sessionStorage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Home = ()=>{
        // the below code was showing me null for the first render
        // therefore I need to handle the first render which is initialValue of sessionStorage
        // const userid = sessionItems.userid;
        // console.log(`Home:userid: ${userid}`)

        // therefore 
        // const[userid, setUserId] = useState(null);
        // useEffect(()=>{
        //         const storedUserId = sessionItems.userid;
        //         // const storedUserId = sessionStorage.getItem('userid')
        //         setUserId(storedUserId);
        // },[])
        // if(userid === null){
        //         return <div>Loading....</div>
        // }

        // const sessionUserId = useLocation().state.userid;
        const sessionUserId = sessionStorage.getItem('userid');
        console.log(`Home:userid: ${sessionUserId}`)
        return(
                <>
                <AddThought sessionUserId={sessionUserId}/>


                <Feed sessionUserId={sessionUserId} />
                </>
        )
}

export default Home;