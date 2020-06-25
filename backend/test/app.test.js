const request = require('supertest');
const { app } = require('../app');

describe('GET home', () => {
  it(' home displays hellow world', async (done) => {
    request(app)
      .get('/')
      .expect('200')
      .end((err, res) => {
        done();
      });
  });
});