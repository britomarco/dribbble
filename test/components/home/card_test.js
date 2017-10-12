import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/card.js';

describe('Card' , () => {
  let component;

  beforeEach(() => {
    let props = { dribbble: {id: '', title: '', tags: [], userImage: '', views_count: '', user: { name: '', avatar_url: '' }, images: { normal: '' } }};
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('card thumbnail exists', () => {
    expect(component.find('.thumbnail')).to.exit;
  });

  it('card thumbnail image exists', () => {
    expect(component.find('.thumbnail img')).to.exit;
  });

});
