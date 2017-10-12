import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/description/back_button';

describe('Back Button' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('back button exists', () => {
    expect(component.find('.back_button')).to.exit;
  });

  it('back to home exists', () => {
    expect(component.find('.back-to-home')).to.exit;
  });

  it('back icon exists', () => {
    expect(component.find('.back-to-home i.glyphicon')).to.exit;
  });

});
