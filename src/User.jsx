import React from "react";
import './user.scss'

class User extends React.Component {
    state = {
        userData: null
    }

    componentDidMount() {
        this.fetchUserData()
    }

    componentDidUpdate(prevProps) {
        const prevUser = prevProps.match.params.userId
        const currentUser = this.props.match.params.userId

        if (prevUser !== currentUser ) {
            this.fetchUserData()
        }
    }

    fetchUserData = () => {
        const {match} = this.props
        fetch(`https://api.github.com/users/${match.params.userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error()
            })
            .then(userData => {
                this.setState({
                    userData,
                })
            })
    }

    render() {
        const { userData } = this.state
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
}

export default User