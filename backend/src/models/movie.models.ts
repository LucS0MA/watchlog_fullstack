export class Movie {
  casting: string;
  director: string;
  posterurl: string;
  synopsis: string;
  title: string;
  year: number;
  constructor(
    casting: string,
    director: string,
    posteurl: string,
    synopsis: string,
    title: string,
    year: number,
  ) {
    this.casting = casting;
    this.director = director;
    this.posterurl = posteurl;
    this.synopsis = synopsis;
    this.title = title;
    this.year = year;
  }
}
