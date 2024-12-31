import { useEffect} from "react";
const Message = ({message, setShowAlert})=>{
        useEffect(() => {
                if (message) {
                    alert(message);
                    setShowAlert(false); // Hide alert after it's shown
                }
            }, [message, setShowAlert]); // Run effect when `message` changes
        
            return null; 
}
export default Message;