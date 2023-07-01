import http, { Server } from 'http';
import { expect } from 'chai';
import app from '../src/index';

describe('Backend API', () => {
  let server: Server;

  before((done) => {
    server = app.listen(0, done);
  });

  after(() => {
    server.close();
  });

  it('should get all duties', (done) => {
    http.get('http://localhost:3000/api/duties', (res) => {
      expect(res.statusCode).to.equal(200);

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const duties = JSON.parse(data);
        expect(duties).to.be.an('array');
        expect(duties).to.have.lengthOf(0);
        done();
      });
    });
  });

  it('should create a new duty', (done) => {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path: '/api/duties',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      (res) => {
        expect(res.statusCode).to.equal(201);
        done();
      }
    );

    req.write(JSON.stringify({ title: 'Test Duty' }));
    req.end();
  });

  it('should delete a duty', (done) => {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path: '/api/duties/1',
        method: 'DELETE',
      },
      (res) => {
        expect(res.statusCode).to.equal(204);
        done();
      }
    );

    req.end();
  });
});
