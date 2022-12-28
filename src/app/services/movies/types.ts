export interface IResults {
  poster_path?: string | null;
  adult?: boolean;
  overvie?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  video_average?: number;
  belongs_to_collection?: null;
  budget?: number;
  genres?: IGenre[];
  homepage?: string;
  imdb_id?: string;
}

interface IGenre {
  id?: number;
  name?: string;
}
interface IDate {
  maximum?: string;
  minimum?: string;
}
export interface IMovie {
  page?: number;
  results?: IResults[];
  dates?: IDate[];
  total_results?: number;
  total_pages?: number;
}

export type IMovieType = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';
