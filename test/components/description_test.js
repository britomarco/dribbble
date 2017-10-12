import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/description';

describe('Description' , () => {
  let component;

  beforeEach(() => {
    let props = { params: { id: '' }};
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('container exists', () => {
    expect(component.find('.container')).to.exit;
  });
});
