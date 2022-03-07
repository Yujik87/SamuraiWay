
type ActionsTypes =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount>

export type UserType = {
    id: string
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
    //location: {city: string, country: string}
}
export type ProfilePageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

/*export type SetUserProfile = {
    type: "SET-USER-PROFILE"
    Profile: []
}*/


//-----------ACTION CREATORS--------
export const follow = (userId: string) => ({type: "FOLLOW", userId}) as const

export const unfollow = (userId: string) => ({type: "UNFOLLOW", userId}) as const

export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users}) as const

export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const

export const setTotalUsersCount = (totalCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalCount}) as const



let initialState: ProfilePageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}
        default:
            return state
    }

}

export default usersPageReducer