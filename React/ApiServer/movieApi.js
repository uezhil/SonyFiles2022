import { ResponseChk,ErrorChk  } from "./chkApi";
let url = process.env.REACT_APP_API_URL+"/movies";

export function getMovies(){
    return fetch(url).then(ResponseChk).catch(ErrorChk);
}

export function getMoviebySlug(slug) {
  return fetch(url + "?slug=" + slug)
    .then((response) => {
      if (!response.ok)
        throw new Error("Movie by slug cannot be retrieved ..error");
      return response.json().then((movies) => {
        if (movies.length !== 1)
          throw new Error("Cannot find the movie.." + slug);
        return movies[0];
      });
    })
    .catch(ErrorChk);
}
