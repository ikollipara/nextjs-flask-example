/* pages/signup.tsx
 * Ian Kollipara
 * 2020.11.10
 * Sign Up Page
*/

import { useState } from "react"

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (username !== "" && password !== ""){
            fetch("http://localhost:5000/new_user", {
                method: "post",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            .then(res => window.location.replace("http://localhost:3000"))
            .catch(err => console.log(err))

            console.log({
                username: username,
                password: password
            })
        }
    }

    return (
        <div>
            <form>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={e => handleFormSubmit(e)}>Submit</button> 

            </form>
        </div>
    )
}

export default SignUp;