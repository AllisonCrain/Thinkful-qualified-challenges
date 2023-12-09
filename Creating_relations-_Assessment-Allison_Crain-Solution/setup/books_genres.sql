CREATE TABLE books_genres (
  book_genre_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  book_id INTEGER REFERENCES books(book_id),
  genre_id INTEGER REFERENCES genres(genre_id)
);




