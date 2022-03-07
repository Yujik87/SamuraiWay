import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar_male.png'
import {UserType} from "../../redux/usersPage-reducer";
import { NavLink } from 'react-router-dom';


type usersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

let Users = (props: usersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>

        {
            props.users.map((u) =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         <div>{'u.location.country'}</div>
                         <div>{'u.location.city'}</div>
                     </span>
                </span>
                </div>)
        }
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p ? styles.selectedPage : ""}
                      onClick={() => {
                          props.onPageChanged(p)
                      }}>{p} </span>
            )}

        </div>
    </div>
}
export default Users;