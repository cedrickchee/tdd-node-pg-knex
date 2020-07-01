process.env.NODE_ENV = 'test'; // sets the NODE_ENV to test so that the correct Knex config is used from knexfile.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// We are using the should assertion style. This is a personal preference.
// You could also use expect or assert.
const should = chai.should();

// This module allows us make http requests from within our test file.
chai.use(chaiHttp);

describe('API Routes', () => {
    describe('GET /api/v1/shows', () => {
        it('should return all shows', (done) => {
            chai.request(server)
                .get('/api/v1/shows')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body.length.should.equal(4);
                    res.body[0].should.have.property('name');
                    res.body[0].name.should.equal('Suits');
                    res.body[0].should.have.property('channel');
                    res.body[0].channel.should.equal('USA Network');
                    res.body[0].should.have.property('genre');
                    res.body[0].genre.should.equal('Drama');
                    res.body[0].should.have.property('rating');
                    res.body[0].rating.should.equal(3);
                    res.body[0].should.have.property('explicit');
                    res.body[0].explicit.should.equal(false);
                    done();
                });
        });
    });
});
