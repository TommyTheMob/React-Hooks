import React, {useState, useEffect} from "react";
import './user.scss'

const User = ({ match }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error()
            })
            .then(userData => {
                setUserData(userData)
            })
    }, [match.params.userId])
    

    if (!userData) {
        return null
    }
    const { name, location, avatar_url } = userData
    return (
        <div className="user">
            <img
                src={avatar_url}
                alt="User Avatar"
                className="user__avatar"
            />
            <div className="user__info">
                <span className="user__name">{ name }</span>
                <span className="user__location">{ location }</span>
            </div>
        </div>
    )
}


export default User