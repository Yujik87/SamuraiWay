
type ActionsTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export type UserType = {
    id: number
    followed: boolean
    fullname: string
    status: string
    location: {city: string, country: string}
}
export type ProfilePageType = {
    users: Array<UserType>
    profile: []

}
export type SetUserProfile = {
    type: "SET-USER-PROFILE"
    Profile: []
}


//-----------ACTION CREATORS--------
export const followAC = (userId: any) => ({type: "FOLLOW", userId}) as const

export const unfollowAC = (userId: any) => ({type: "UNFOLLOW", userId}) as const

export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users}) as const



let initialState: ProfilePageType = {
    users: [
        {id: 1, photoUrl: '', followed: false, fullname: 'Dmitry', status: 'I`m boss!', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 1, followed: true, fullname: 'Alex', status: 'I`m boss!', location: {city: 'Moscow', country: 'Russia'}},
        {id: 1, followed: false, fullname: 'Bob', status: 'I`m boss!', location: {city: 'Kiev', country: 'Ukraine'}},
    ],
    profile: [],

}


const usersPageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                        else return u
                 })}
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    else return u
                })}
        case 'SET-USERS':
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }

}

export default usersPageReducer