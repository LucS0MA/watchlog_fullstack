export class Review {
  comment: string;
  movie_id: number;
  rating: number;
  user_id: number;
  constructor(
    comment: string,
    movie_id: number,
    rating: number,
    user_id: number,
  ) {
    this.comment = comment;
    this.movie_id = movie_id;
    this.rating = rating;
    this.user_id = user_id;
  }
}
