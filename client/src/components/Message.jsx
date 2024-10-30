import { useEffect} from "react";
const Message = ({message, setShowAlert})=>{
        useEffect(() => {
                if (message) {
                        console.log("before alter")
                    alert(message);
                    console.log("after alter")
                    setShowAlert(false); // Hide alert after it's shown
                }
            }, [message]); // Run effect when `message` changes
        
            return null; 
}
export default Message;