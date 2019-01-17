import Comm from './';

/**
 * This is merely a facade on vendor, so I won't test the vendor,
 * but only my implementation.
 */
describe ('Communication facade tests', () => {
  it ('should have communication methods', () => {
    expect(Comm.prototype.get).toBeDefined();
    expect(Comm.prototype.send).toBeDefined();
    expect(Comm.prototype.assign).toBeDefined();
  });
});
