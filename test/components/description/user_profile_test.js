import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/description/user_profile';

describe('User Profile' , () => {
  let component;

  beforeEach(() => {
    let props = { avatar: '', name: '', bio: '', links: { twitter: '', web: '' }};
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('user profile exists', () => {
    expect(component.find('.user-profile')).to.exit;
  });

  it('user profile image exists', () => {
    expect(component.find('.user-profile img')).to.exit;
  });

  it('user profile title exists', () => {
    expect(component.find('.user-profile h4')).to.exit;
  });

  it('user profile description exists', () => {
    expect(component.find('.user-profile p')).to.exit;
  });

});
