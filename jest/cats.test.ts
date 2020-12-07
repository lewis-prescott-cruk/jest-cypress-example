import { expect } from 'chai';
const request = require('supertest');

// request = request('https://cat-fact.herokuapp.com');

describe("Cat Facts", () => {
    test('cat type', () => {
      console.log('Cat');
      expect(true).to.be.true;
    });
});
