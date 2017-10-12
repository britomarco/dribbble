import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/cards.js';

describe('Cards' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('card list exists', () => {
    expect(component.find('.card-list')).to.exit;
  });

});
