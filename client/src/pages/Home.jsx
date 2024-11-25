import AddThought from "../components/AddThought";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import '../style/addThought.css';

const Home = ()=>{
        return(
                <>
                <AddThought/>
                <Feed/>
                </>
        )
}

export default Home;