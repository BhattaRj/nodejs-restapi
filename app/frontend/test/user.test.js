const chai = require('chai')
const expect = chai.expect
const request = require('supertest');
const app = require('./../../../index');

describe('GET /api/status', function () {
    it('Check the server status', function (done) {
        request(app)
            .get('/api/status')
            .expect(200, done);
    });
});

describe('GET /user', function () {
    it('List all user', function (done) {
        request(app)
            .get('/api/user')
            .expect(200, done);
    });
});
