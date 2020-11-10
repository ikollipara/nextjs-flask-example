/* pages/index.jsx
 * Ian Kollipara
 * 2020.11.10
 * Index Page
*/

import { useEffect, useState } from "react"

const Index = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/get_user")
        .then(res => res.json())
        .then(json => setUser(json))
        .catch(err => console.log(err))
    }, [user])

    return (
        <div>
            <h1>Hello {user && user.username}</h1>
        </div>
    )
}

export default Index;