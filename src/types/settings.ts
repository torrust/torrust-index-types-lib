export type Settings = {
    log_level: LogLevel,
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
        base_url: string | null
    },
    auth: {
        email_on_signup: EmailOnSignup
        min_password_length: number
        max_password_length: number
        secret_key: string
    },
    database: {
        connect_url: string
    },
    mail: {
        email_verification_enabled: boolean
        from: string
        reply_to: string
        username: string
        password: string
        server: string
        port: number
    },
    image_cache: {
        max_request_timeout_ms: number
        capacity: number
        entry_size_limit: number
        user_quota_period_seconds: number
        user_quota_bytes: number
    },
    api: {
        default_torrent_page_size: number
        max_torrent_page_size: number
    },
    tracker_statistics_importer: {
        torrent_info_update_interval: number
    }
}

export type PublicSettings = {
    website_name: string
    tracker_url: string
    tracker_mode: TrackerMode
    email_on_signup: EmailOnSignup
}

export enum TrackerMode {
    Public,
    Private,
    Whitelisted,
    PrivateWhitelisted
}

export enum EmailOnSignup {
    Required,
    Optional,
    None
}

export enum LogLevel {
    Off,
    Error,
    Warn,
    Info,
    Debug,
    Trace
}