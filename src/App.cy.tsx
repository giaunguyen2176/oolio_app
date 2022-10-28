import App from './App';

const nameSelector = '.my-0.fw-normal';
const priceSelector = '.card-title.pricing-card-title';
const addToCartSelector = '.btn-add-to-cart';
const cartItemSelector = '.cart-item';
const cartTotalSelector = '.cart-total';
const applyCodeSelector = '.btn-apply';
const codeSelector = '.discount-code';

describe('<Products>', () => {
  it('is working', () => {
    cy.intercept('GET', '/api/products', { fixture: 'products.json' });
    cy.intercept('GET', '/api/cart_items', { fixture: 'cartItems.json' });
    cy.intercept('POST', '/api/checkout', { fixture: 'checkout.json' });
    cy.intercept('POST', '/api/cart_items', { fixture: 'cartItem1.json' });
    cy.intercept('DELETE', '/api/cart', {});

    cy.mount(<App />);

    cy.get(nameSelector).should(($names: any) => {
      expect($names).to.have.length(3)
      expect($names.eq(0).text()).to.equal('Small pizza');
      expect($names.eq(1).text()).to.equal('Medium pizza');
      expect($names.eq(2).text()).to.equal('Large pizza');
    });

    cy.get(priceSelector).should(($prices: any) => {
      expect($prices).to.have.length(3)
      expect($prices.eq(0).text()).to.equal('$11.99');
      expect($prices.eq(1).text()).to.equal('$15.99');
      expect($prices.eq(2).text()).to.equal('$21.99');
    });

    cy.get(cartItemSelector).should(($items: any) => {
      expect($items).to.have.length(1);
      expect($items.eq(0).children('.name').text()).to.equal('Large pizza');
      expect($items.eq(0).children('.price').text()).to.equal('$21.99');
      expect($items.eq(0).children('.quantity').text()).to.equal('x1');
      expect($items.eq(0).children('.total').text()).to.equal('$21.99');
    });

    cy.get(addToCartSelector).eq(0).click();

    cy.get(cartItemSelector).should(($items: any) => {
      expect($items).to.have.length(2);
      expect($items.eq(0).children('.name').text()).to.equal('Large pizza');
      expect($items.eq(0).children('.price').text()).to.equal('$21.99');
      expect($items.eq(0).children('.quantity').text()).to.equal('x1');
      expect($items.eq(0).children('.total').text()).to.equal('$21.99');
      expect($items.eq(1).children('.name').text()).to.equal('Small pizza');
      expect($items.eq(1).children('.price').text()).to.equal('$11.99');
      expect($items.eq(1).children('.quantity').text()).to.equal('x3');
      expect($items.eq(1).children('.total').text()).to.equal('$35.97');
    });

    cy.intercept('POST', '/api/cart_items', { fixture: 'cartItem2.json' });
    cy.get(addToCartSelector).eq(1).click();

    cy.get(cartItemSelector).should(($items: any) => {
      expect($items).to.have.length(3);
      expect($items.eq(0).children('.name').text()).to.equal('Large pizza');
      expect($items.eq(0).children('.price').text()).to.equal('$21.99');
      expect($items.eq(0).children('.quantity').text()).to.equal('x1');
      expect($items.eq(0).children('.total').text()).to.equal('$21.99');
      expect($items.eq(1).children('.name').text()).to.equal('Small pizza');
      expect($items.eq(1).children('.price').text()).to.equal('$11.99');
      expect($items.eq(1).children('.quantity').text()).to.equal('x3');
      expect($items.eq(1).children('.total').text()).to.equal('$35.97');
      expect($items.eq(2).children('.name').text()).to.equal('Medium pizza');
      expect($items.eq(2).children('.price').text()).to.equal('$15.99');
      expect($items.eq(2).children('.quantity').text()).to.equal('x2');
      expect($items.eq(2).children('.total').text()).to.equal('$31.98');
    });

    cy.get(addToCartSelector).eq(1).click();

    cy.get(cartTotalSelector).should('have.text', 'Total: $69.99');

    cy.get('input.code').type('MICROSOFT')
    cy.get('input.code').should('have.attr', 'value', 'MICROSOFT')

    cy.get(applyCodeSelector).eq(0).click();

    cy.get('input.code').type('AMAZON')
    cy.get('input.code').should('have.attr', 'value', 'AMAZON')

    cy.get(applyCodeSelector).eq(0).click();

    cy.get(codeSelector).should(($items: any) => {
      expect($items).to.have.length(2);
      expect($items.eq(0).text()).to.equal('MICROSOFT');
      expect($items.eq(1).text()).to.equal('AMAZON');
    });
  });
});