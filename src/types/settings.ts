export type Settings = {
    version: string,
    logging: Logging,
    website: Website,
    tracker: Tracker,
    net: Net,
    auth: Auth,
    database: Database,
    mail: Mail,
    image_cache: ImageCache,
    api: Api,
    tracker_statistics_importer: TrackerStatisticsImporter
}

export type Metadata = {
    app: string,
    purpose: string,
    schema_version: string,
}

export type Logging = {
    threshold: Threshold,
}

export type Website = {
    name: string
    demo: Demo | null
    terms: Terms
}

export type Demo = {
    warning: string
}

export type Terms = {
    page: TermsPage
    upload: TermsUpload
}

export type TermsPage = {
    title: string
    content: string
}

export type TermsUpload = {
    content_upload_agreement: string
}

export type Tracker = {
    api_url: string
    listed: boolean
    private: boolean
    token: string
    token_valid_seconds: number
    url: string
}

export type Net = {
    base_url: string | null
    bind_address: string
    tsl: Tsl | null
}

export type Auth = {
    email_on_signup: EmailOnSignup
    user_claim_token_pepper: string
    password_constraints: PasswordConstraints
}

export type Database = {
    connect_url: string
}

export type Mail = {
    from: string
    reply_to: string
    smtp: Smtp
}

export type ImageCache = {
    capacity: number
    entry_size_limit: number
    max_request_timeout_ms: number
    user_quota_bytes: number
    user_quota_period_seconds: number
}

export type Api = {
    default_torrent_page_size: number
    max_torrent_page_size: number
}

export type Registration = {
    email: Email
}

export type TrackerStatisticsImporter = {
    port: number
    torrent_info_update_interval: number
}

export type PublicSettings = {
    website_name: string
    tracker_url: string
    tracker_listed: boolean
    tracker_private: boolean
    email_on_signup: EmailOnSignup
    website: Website
}

export type Tsl = {
    ssl_cert_path: string | null
    ssl_key_path: string | null
}

export type PasswordConstraints = {
    max_password_length: number
    min_password_length: number
}

export type Smtp = {
    port: number
    server: string
    credentials: Credentials
}

export type Credentials = {
    password: string
    username: string
}

export enum EmailOnSignup {
    Required = "required",
    Optional = "optional",
    Ignored = "ignored"
}

export enum Threshold {
    Off = "off",
    Error = "error",
    Warn = "warn",
    Info = "info",
    Debug = "debug",
    Trace = "trace",
}

export type Email = {
    required: boolean
    verification_required: boolean
}
