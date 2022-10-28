import { Products } from './Products';

const nameSelector = '.my-0.fw-normal';
const priceSelector = '.card-title.pricing-card-title';

describe('<Products>', () => {
  it('display products', () => {
    cy.intercept('GET', '/api/products', { fixture: 'products.json' });
    cy.mount(<Products />);

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
  });
});