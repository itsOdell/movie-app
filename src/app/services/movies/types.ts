export interface IResults {
  poster_path: string | null;
  adult: boolean;
  overvie: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  video_average: number;
}

export interface IPopularMovie {
  page: number;
  results: IResults[];
  total_results: number;
  total_pages: number;
}
