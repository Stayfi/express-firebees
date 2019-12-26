import 'mocha';
import { assert } from 'chai';
import FunctionsRouter from '../../src/functions/functions-router.class';
import { FunctionIndex, HttpFunction, FunctionHandler, TypeFunction } from '../../src/functions/functions.types';
import { getNewRouterClass } from '../inc/test.inc';

describe('#RouterClass: Module exports test ', function() {
  it('#RouterClass: Should export router', function() {
    assert.isDefined(FunctionsRouter);
  });

  it('#RouterClass: Should router be instance of FunctionsRouter', function() {
    assert.equal(FunctionsRouter.name, 'FunctionsRouter');
  });

  it('#RouterClass: Should getRouter() return router', function() {
    const router: FunctionsRouter = getNewRouterClass();
    assert.equal(router.getRouter().name, 'router');
  });

  it('#RouterClass: Should initFunctions() return false when no functions indexed', function() {
    const router: FunctionsRouter = new FunctionsRouter({});
    assert.isFalse(router['initFunctions']());
  });

  it('#RouterClass: Should initFunctions() return true when functions indexed', function() {
    const router: FunctionsRouter = getNewRouterClass();
    assert.isTrue(router['initFunctions']());
  });

  it('#RouterClass: Should initHttpFunctionsRouter() is a function', function() {
    const router: FunctionsRouter = getNewRouterClass();
    assert.isFunction(router['initHttpFunctionsRouter']);
  });

});

