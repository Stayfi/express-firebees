import { HttpFunction, FunctionHandler, TypeFunction } from './functions.types';

export default {
  onRequest: (newHttpFunction: HttpFunction): FunctionHandler => {
    const onRequestFunction: FunctionHandler = {
      functionType: TypeFunction.HTTP,
      functionCode: newHttpFunction
    };

    return onRequestFunction;
  }
};
