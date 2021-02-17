exports.seed = (knex, Promise) => {
  return knex('movies').del()
  .then(() => {
    return knex('movies').insert({
      name: 'The Land Before Time',
      genre: 'Fantasy',
      rating: 7,
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Jurassic Park',
      genre: 'Science Fiction',
      rating: 9,
      explicit: true
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Ice Age: Dawn of the Dinosaurs',
      genre: 'Action/Romance',
      rating: 5,
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'The Lord of the Rings: The Return of the King',
      genre: 'Action/Adventure/Drama',
      rating: 9,
      explicit: true
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Star Wars; A New Hope',
      genre: 'Action/Adventure/Fantasy',
      rating: 9,
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 9,
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'The Godfather',
      genre: 'Crime/Drama',
      rating: 9,
      explicit: true
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Forrest Gump',
      genre: 'Romance/Drama',
      rating: 9,
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'The Wolf of Wall Street',
      genre: 'Biography/Crime/Drama',
      rating: 8,
      explicit: false
    });
  })
};