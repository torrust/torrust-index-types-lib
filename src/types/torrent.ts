import { Category } from "./category";
import { TorrentTag } from "./tag";

export type TorrentResponse = {
    torrent_id: number
    uploader: string
    info_hash: string
    title: string
    description: string | null
    category: Category
    upload_date: string
    file_size: number
    seeders: number
    leechers: number
    files: Array<TorrentFile>
    trackers: Array<string>
    magnet_link: string
    tags: Array<TorrentTag>
}

export type TorrentListing = {
    torrent_id: number
    uploader: string
    info_hash: string
    title: string
    description: string | null
    category_id: number
    date_uploaded: string
    file_size: number
    leechers: number
    seeders: number
}

export type TorrentFile = {
    path: Array<string>
    length: number
    md5sum: string | null
}
