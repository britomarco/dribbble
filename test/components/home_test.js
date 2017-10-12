import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/home';

describe('Home' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('container exists', () => {
    expect(component.find('.container')).to.exit;
  });
});
