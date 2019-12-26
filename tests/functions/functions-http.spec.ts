import 'mocha';
import { assert } from 'chai';
import http from '../../src/functions/functions-http';
import {
  FunctionHandler,
  TypeFunction
} from '../../src/functions/functions.types';
import { getOnRequestFunctionHandler } from '../inc/test.inc';

describe('#HttpClass: Module exports test ', function() {
  it('#HttpClass: Should export onRequest', function() {
    assert.isDefined(http.onRequest);
  });

  it('#HttpClass: Should HttpClass has "onRequest" property', function() {
    assert.isDefined(http.onRequest);
  });

  it('#HttpClass: Should http.onRequest be a function', function() {
    assert.isFunction(http.onRequest);
  });

  describe('#HttpClass: Should http.onRequest return a FunctionHandler', function() {
    it('#onRequest: Should onRequest(...) return has "functionType" property', function() {
      const functionOnRequest: FunctionHandler = getOnRequestFunctionHandler();
      assert.isDefined(http.onRequest);
    });

    it('#onRequest: Should property functionType equal "http"', function() {
      const functionOnRequest: FunctionHandler = getOnRequestFunctionHandler();
      assert.equal(functionOnRequest.functionType, TypeFunction.HTTP);
    });

    it('#onRequest: Should onRequest(...) return has "functionCode" property', function() {
      const functionOnRequest: FunctionHandler = getOnRequestFunctionHandler();
      assert.isDefined(functionOnRequest.functionCode);
    });

  });

});
