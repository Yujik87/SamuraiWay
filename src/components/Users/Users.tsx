import React from 'react';
import styles from './Users.module.css';
import axios from "axios";

let Users = (props: any) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                debugger
                props.setUsers(response.data.items);
            })
    }

    props.setUsers([
        {id: 1, photoUrl: '', followed: false, fullname: 'Dmitry', status: 'I`m boss!', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 1, photoUrl: '', followed: true, fullname: 'Alex', status: 'I`m boss!', location: {city: 'Moscow', country: 'Russia'}},
        {id: 1, photoUrl: '', followed: false, fullname: 'Bob', status: 'I`m boss!', location: {city: 'Kiev', country: 'Ukraine'}},
    ])

    return <div>
        {
            props.users.map((u: any) =>
                <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;