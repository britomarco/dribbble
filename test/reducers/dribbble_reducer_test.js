import { expect } from '../test_helper';
import dribbbleReducer from '../../src/reducers/dribbble_reducer';
import { POPULAR_DRIBBBLE_SHOTS, FIND_DRIBBBLE_BY_ID } from '../../src/actions/types';

describe('Dribbble Reducer', () => {

  it('handles action with unknown type', () => {
    expect(dribbbleReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type POPULAR_DRIBBBLE_SHOTS', () => {
    const action = { type: POPULAR_DRIBBBLE_SHOTS, payload: { data : [ {dribbble: 'my dribbble'} ]} };
    expect(dribbbleReducer({}, action)).to.eql([{dribbble: 'my dribbble'}]);
  });

  it('handles action of type FIND_DRIBBBLE_BY_ID', () => {
    const action = { type: FIND_DRIBBBLE_BY_ID, payload: { data : [ {dribbble: 'my dribbble'} ]} };
    expect(dribbbleReducer({}, action)).to.eql([ {"0":{ dribbble: 'my dribbble'}}]);
  });

});
