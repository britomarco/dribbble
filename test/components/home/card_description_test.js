import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/card_description';

describe('Card Description' , () => {
  let component;

  beforeEach(() => {
    let props = { name: '', tags: '', userImage: '' };
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('card description exists', () => {
    expect(component.find('.description')).to.exit;
  });

  it('card description image exists', () => {
    expect(component.find('.description img')).to.exit;
  });

  it('card description name exists', () => {
    expect(component.find('.description span')).to.exit;
  });

});
