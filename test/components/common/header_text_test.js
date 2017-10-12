import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/common/header_text';

describe('Header Text' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('header text exists', () => {
    expect(component.find('.header_text')).to.exit;
  });

  it('header text title exists', () => {
    expect(component.find('.header_text h1')).to.exit;
  });

});
