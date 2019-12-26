import 'mocha';
import { assert } from 'chai';
import * as functions from '../src/index';

describe('#Functions: Module exports test ', function() {
  it('#Functions: Should export http', function() {
    assert.isDefined(functions.http);
  });

  it('#Functions: Should export router', function() {
    assert.isDefined(functions.router);
  });
});
