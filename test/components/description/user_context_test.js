import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/description/user_context';

describe('User Context' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('user context exists', () => {
    expect(component.find('.user_context')).to.exit;
  });

  it('image context exists', () => {
    expect(component.find('.user_context .image-hidpi img')).to.exit;
  });

  it('image context rounded exists', () => {
    expect(component.find('.user_context .image-hidpi img.img-rounded')).to.exit;
  });


  it('description content context exists', () => {
    expect(component.find('.user_context .content')).to.exit;
  });

});
