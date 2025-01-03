import getThoughts from '../services/getThoughts';
import { useState, useEffect } from "react";
import styles from "../style/viewThought.module.css"; // Import CSS module
import { useLocation } from 'react-router-dom';

const ViewThoughts = () => {
    const sessionUserId = sessionStorage.getItem('userid');
    console.log(`view thoughts: sessionUserId ${sessionUserId}`);
    const [thought, setThought] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await getThoughts();
            console.log(`/client/component/viewthoughts/useeffect data ${data}`);
            setThought(data);
            console.log(data);
        };
        fetch();
    }, []);

    return (
        <> 
            <div className={styles['viewThoughts-container']}>
                <div className={styles['viewThoughts-content']}>
                    {thought.length <= 0 ? (
                        <h1>
                            Thoughts not found! Please navigate to `Home` and write a thought.
                        </h1>
                    ) : (
                        thought.map((x, index) => (
                            <div 
                                key={index} 
                                className={styles['viewThoughts-thoughtContainer']}
                            >
                                <div>
                                    <div className={styles['viewThoughts-thoughtContent']}>
                                        <p>{x.thought}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>                      
        </>
    );
};

export default ViewThoughts;
