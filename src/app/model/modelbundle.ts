interface Rating {
  Source: string;
  Value: string;
}

interface MovieFullInformations {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Plot: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  imdbID: string;
  Type: string;
}

interface MovieShortInformations {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface SearchResponse {
  Search: MovieShortInformations[];
}

export {
  Rating,
  MovieFullInformations,
  MovieShortInformations,
  SearchResponse,
};
