import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user)return <div>please login</div>
    return(
        <div>
            <h1>{user.username}</h1>
            <h2>{user.password}</h2>
        </div>
    )

}

export default Profile