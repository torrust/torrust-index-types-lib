export type Torrent = {
    torrent_id: number
    uploader: string
    info_hash: string
    title: string
    description: string
    category: TorrentCategory
    upload_date: string
    file_size: number
    seeders: number
    leechers: number
    files: Array<TorrentFile>
    trackers: Array<string>
    magnet_link: string
    tags: Array<TorrentTag>
}

export type TorrentCompact = {
    category_id: number
    date_uploaded: string
    description: string
    file_size: number
    info_hash: string
    leechers: number
    seeders: number
    title: string
    torrent_id: number
    uploader: string
}

export type TorrentCategory = {
    category_id: number
    name: string
    num_torrents: number
}

export type TorrentTag = {
    tag_id: number
    name: string
}

export type TorrentFile = {
    path: Array<string>
    length: number
    md5sum: number
}
