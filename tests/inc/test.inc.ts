import FunctionsRouter from "../../src/functions/functions-router.class";
import { FunctionIndex, HttpFunction, FunctionHandler, TypeFunction } from "../../src/functions/functions.types";
import http from '../../src/functions/functions-http';

export function getNewRouterClass(): FunctionsRouter {
  const functionsIndexed: FunctionIndex = getFunctionsIndexedSample();
  return new FunctionsRouter(functionsIndexed);
}

export function getFunctionsIndexedSample(): FunctionIndex {
  const newHttpFunction: HttpFunction = getHttpFunction();
  const functionHandler: FunctionHandler = { functionType: TypeFunction.HTTP, functionCode: newHttpFunction };
  const functionIndexed: FunctionIndex = {
    functionName: 'sample',
    functionHandler: functionHandler
  };

  return functionIndexed;
}

export function getHttpFunction(): HttpFunction {
  return (res, req) => true;
}

export function getOnRequestFunctionHandler(): FunctionHandler {
  const newHttpFunction: HttpFunction = getHttpFunction();
  const newOnRequestFunctionHandler: FunctionHandler = http.onRequest(newHttpFunction);
  return newOnRequestFunctionHandler;
}
