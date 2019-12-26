import express from 'express';

export type HttpFunction = (
  res: express.Request,
  req: express.Response
) => void;

export enum TypeFunction {
  HTTP = 'http'
}

export type FunctionHandler = {
  functionType: TypeFunction;
  functionCode: HttpFunction;
};

export type FunctionIndex = {
  functionName: string;
  functionHandler: FunctionHandler;
};
