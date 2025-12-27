import{addToCart, cart, loadFromStorage} from '../../data/cart.js';


describe('test suite addToCart', () => {
  it('adds an existing to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    
    loadFromStorage();
  });
  it('adds a new product to the cart', () => {
    addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCallTimes(1);
    expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
  });
});