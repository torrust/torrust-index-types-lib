export type TokenResponse = {
    token: string
    username: string
    admin: boolean
}

export type UserProfile = {
    user_id: number
    username: string
    email: string
    email_verified: boolean
    bio: string
    avatar: string
}
