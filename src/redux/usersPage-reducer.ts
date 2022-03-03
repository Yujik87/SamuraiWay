
type ActionsTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullname: string
    status: string
    location: {city: string, country: string}
}
export type ProfilePageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

/*export type SetUserProfile = {
    type: "SET-USER-PROFILE"
    Profile: []
}*/


//-----------ACTION CREATORS--------
export const followAC = (userId: string) => ({type: "FOLLOW", userId}) as const

export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const

export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users}) as const



let initialState: ProfilePageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}


const usersPageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        default:
            return state
    }

}

export default usersPageReducer