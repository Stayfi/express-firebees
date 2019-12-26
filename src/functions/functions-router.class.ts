import express from 'express';
import {
  FunctionIndex,
  FunctionHandler,
  TypeFunction
} from './functions.types';

const router = express.Router();

export default class FunctionsRouter {
  private functionsIndexed: {};
  private router: express.Router = router;
  private httpFunctions: Array<FunctionIndex> = [];

  constructor(functionsIndexed: {}) {
    this.functionsIndexed = functionsIndexed;
    this.initFunctions();
    this.initRouter();
  }

  public getRouter(): express.Router {
    return this.router;
  }

  private initFunctions(): boolean {
    if (
      typeof this.functionsIndexed === 'object' &&
      Object.keys(this.functionsIndexed).length > 0
    ) {
      Object.entries(this.functionsIndexed).forEach((functionIdx, index) => {
        const functionIndexed: FunctionIndex = {
          functionName: functionIdx[0],
          functionHandler: functionIdx[1] as FunctionHandler
        };
        switch (functionIndexed.functionHandler.functionType) {
          case TypeFunction.HTTP:
            this.httpFunctions.push(functionIndexed);
            break;
          default:
            break;
        }
      });
      return true;
    }
    return false;
  }

  private initRouter(): void {
    this.initHttpFunctionsRouter();
  }

  private initHttpFunctionsRouter(): void {
    this.httpFunctions.forEach(functionIndexed => {
      this.router.all(
        '/' + functionIndexed.functionName,
        (req: express.Request, res: express.Response) =>
          functionIndexed.functionHandler.functionCode(req, res)
      );
    });
  }
}
