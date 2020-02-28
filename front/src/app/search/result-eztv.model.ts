export interface EztvTorrentModel
{
  id: number;
  hash: string;
  filename: string;
  episode_url: string;
  torrent_url: string;
  magnet_url: string;
  title: string;
  imdb_id: string;
  season: string;
  episode: string;
  small_screenshot: string;
  large_screenshot: string;
  seeds: number;
  peers: number;
  date_released_unix: number;
  size_bytes: string;
}

export interface EztvModel
{
  torrents_count: number;
  limit: number;
  page: number;
  torrents: EztvTorrentModel[];
}
