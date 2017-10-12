import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/card_caption';

describe('Card Caption' , () => {
  let component;

  beforeEach(() => {
    let props = { title: '', name: '', tags: '', userImage: '', views: '' };
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('card caption exists', () => {
    expect(component.find('.caption')).to.exit;
  });

  it('card caption title exists', () => {
    expect(component.find('.caption .row h3')).to.exit;
  });

  it('card caption views icon exists', () => {
    expect(component.find('.caption .row span i.glyphicon')).to.exit;
  });

});
