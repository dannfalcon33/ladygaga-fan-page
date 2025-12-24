
export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  HISTORY = 'history',
  ALBUMS = 'albums',
  CONCERTS = 'concerts',
  VIDEOS = 'videos',
  CONTACT = 'contact'
}

export interface NavOption {
  id: Section;
  label: string;
}

export interface AlbumData {
  title: string;
  year: string;
  image: string;
  description: string;
  tracklist?: string[];
  genre?: string;
}
