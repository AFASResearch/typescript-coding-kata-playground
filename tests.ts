import {dummy} from './solution';
import {assert} from 'chai';

describe("Dummy", function() {
  it ("does not do anything", function() {
    assert.isUndefined(dummy());
  });
});
