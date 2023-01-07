export type Settings = {
    website: {
        name: string
    },
    tracker: {
        url: string
        mode: TrackerMode
        api_url: string
        token: string
        token_valid_seconds: number
    },
    net: {
        port: number
        base_url: null
    },
    auth: {
        email_on_signup: Requirement,
        min_password_length: number
        max_password_length: number
        secret_key: string
    },
    database: {
        connect_url: string
        torrent_info_update_interval: number
    },
    mail: {
        email_verification_enabled: boolean
        from: string
        reply_to: string
        username: string
        password: string
        server: string
        port: number
    }
}

export type PublicSettings = {
    website_name: string
    tracker_url: string
    tracker_mode: TrackerMode
    email_on_signup: Requirement
}

export enum TrackerMode {
    Public,
    Private,
    Whitelisted,
    PrivateWhitelisted
}

export enum Requirement {
    None,
    Optional,
    Required
}
