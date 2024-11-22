const Register = ()=>{
        const [username, setUserName] = useState('');
        const [password, setPassword] = useState('');
        return(
                <>
                        <input type="text" placeholder="new username" />
                        <input type="text" placeholder="new password" />
                        <button>Register</button>
                </>
        )
}