# Express FireBees 🐝

version: 'v0.1.2'

[![Build Status](https://travis-ci.org/Stayfi/express-firebees.svg?branch=master)](https://travis-ci.org/Stayfi/express-firebees)
[![Coverage Status](https://coveralls.io/repos/github/Stayfi/express-firebees/badge.svg?branch=develop)](https://coveralls.io/github/Stayfi/express-firebees?branch=develop)

## Description

Functions for express framework, like Firebase Cloud Functions.

Automaticly generate Express router from functions exported.

So, you just have to add generated router to Express app.

Functions are handled to 'function name' path in the Express app.

## Getting started

### Requirements

- Express

```bash
npm install --save express
```

- Express-firebees

```bash
npm install --save express-firebees
```

### Create a folder when you will save your functions

- Typescript:

```bash
~ mkdir functions
~ cd functions
~ touch index.ts
```

### Initialized Firebees 🐝 with Express

- Typescript: ./app.ts

```javascript
import express from 'express';
import * as functionsIndexed from './index';
const fireBeesRouter = new functions.router(functionsIndexed);

app = express();
[...]
app.use('/firebees', fireBeesRouter.getRouter());

```

## Create your functions

- Typescript: ./http/my-first-function.bee.ts

```javascript
import express from 'express';
import * as functions from 'express-firebees';

export const myFirstFunction = functions.http.onRequest(
  (req: express.Request, res: express.Response) => {
    // Here Function code
    return res.status(200).send('Function done: ' + req.method);
  }
);
```

## Add your functions to Firebees 🐝

Export your functions like :

```javascript
exports.FUNCTION_PATH = myFunctionName;
```

So, you can trigger your function "myFunctionName" with this url : http://localhost:3000/firebees/FUNCTION_PATH

- Typescript: ./index.ts

```javascript
import { myFirstFunction } from './http/my-first-function.bee.http';

exports.myFirstFunction = myFirstFunction;
```

### Check the result

```bash
    $ npm run start
```

Open your browser to : http://localhost:3000/firebees/myFirstFunction

Result :

```
Function done: GET
```
