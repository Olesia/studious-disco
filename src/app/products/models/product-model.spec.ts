import { Product } from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
