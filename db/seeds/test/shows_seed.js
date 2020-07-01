exports.seed = (knex) => {
    return (
        knex('shows')
            // Deletes ALL existing entries
            .del()

            // Then, inserts seed entries one by one in series
            .then(() =>
                knex('shows').insert({
                    name: 'Suits',
                    channel: 'USA Network',
                    genre: 'Drama',
                    rating: 3,
                    explicit: false,
                })
            )
            .then(() =>
                knex('shows').insert({
                    name: 'Game of Thrones',
                    channel: 'HBO',
                    genre: 'Fantasy',
                    rating: 5,
                    explicit: true,
                })
            )
            .then(() =>
                knex('shows').insert({
                    name: 'South Park',
                    channel: 'Comedy Central',
                    genre: 'Comedy',
                    rating: 4,
                    explicit: true,
                })
            )
            .then(() =>
                knex('shows').insert({
                    name: 'Mad Men',
                    channel: 'AMC',
                    genre: 'Drama',
                    rating: 3,
                    explicit: false,
                })
            )
    );
};
