import AddThought from "../components/AddThought";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import '../style/addThought.module.css';
import { sessionItems } from "../services/sessionStorage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import {fetchThoughts} from "../services/feedService";
import {fetchThoughtsWithUsernames} from "../services/feedService";
// import getThoughts from "../services/getThoughts";
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
        const[feed, setFeed] = useState([]);
        const sessionUserId = sessionStorage.getItem('userid');
        const[saved, setSaved] = useState(false);
        console.log(`Home:userid: ${sessionUserId}`)
        useEffect(()=>{
                const fetchAllThoughts = async ()=>{
                        try{
                                const feeds = await fetchThoughtsWithUsernames();
                                // const feeds = await getThoughts();
                                setFeed(feeds.thoughts)
                                console.log("newly fetched feeds: ", feeds)
                        }catch(error){
                                console.log(error)
                        }
                }
                fetchAllThoughts();
                setSaved(false); // set it to false after all the thoughts are fetched.
        },[saved])
        return(
                <>
                <AddThought sessionUserId={sessionUserId} setSaved={setSaved} />

                {
                        feed.map((item, index)=>{
                                return(
                                        <Feed key={index} sessionUserId={sessionUserId} entireThoughtSec = {item} />
                                )
                        })
                }
                {/* <Feed sessionUserId={sessionUserId} /> */}
                </>
        )
}

export default Home;