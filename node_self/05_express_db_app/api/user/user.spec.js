const should = require('should');
const request = require('supertest');
const app = require('../../app');
const syncDatabase = require('../../bin/sync-database');
const models = require('../../models.js'); 

describe('PUT/users/:id', () => {
    before('sync database', (done) => {
        syncDatabase().then(() => {
            done();
        });
    });
    const users = [
        {name: 'alice'},
        {name: 'bek'},
        {name: 'chris'}
    ];
    before('insert 3 users into database', (done) => {
        models.User.bulkCreate(users).then(() => done());
    });
    it.only('should return 200 status code', (done) => {
        request(app)
            .put('/users/1')
            .send({
                name: 'foo'
            })
            .expect(200)
            .end((err, res) => {
                if (err) throw err;

                done();
            });
    });
    after('clear up database', (done) => {
          syncDatabase().then(() => done());
    });
});
