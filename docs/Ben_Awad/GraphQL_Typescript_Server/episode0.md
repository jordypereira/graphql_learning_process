# Setting up a TypeORM Project

## TypeOrm setup

Our ORM will be TypeOrm, which is made to be used with TypeScript.

[TypeOrm Setup](http://typeorm.io/#/)

We volgen de Quick Start guide.  
`npm install typeorm -g`

We'll use Postgres as a database. The guide tells us this is the command we have to use:  
`typeorm init --name graphql-ts-server-boilerplate --database postgres`

We can check all the package version and update them with a tool:  
[npm-check-updates](https://www.npmjs.com/package/npm-check-updates) `npm install -g npm-check-updates`  
After w einstalled it we can update everything with `ncu -a`. This updates the package.json so we have to run `yarn`.

### Database setup

Insert the username and password of our local postgres database in ornconfig.json, together with the database name which we create with `createdb databasename`.

## TypeScript setup

The config resides in tsconfig.json. Let's just 'steal' the code from an other project: [tsconfig](https://github.com/benawad/node-ts-graphql-boilerplate/blob/10_session_express_middleware/tsconfig.json).

TS Lint are rules to write consistent code. TS Lint defines the rules and [Prettier](https://www.npmjs.com/package/prettier) can transform your code after a save or commit. We'll use [tslint](https://github.com/benawad/node-ts-graphql-boilerplate/blob/10_session_express_middleware/tslint.json) and adjust it where needed.

## GraphQL Yoga

[GraphQL Yoga](https://github.com/prisma/graphql-yoga) is a combination of packages:

- apollo-server
- graphql-tools
- graphql playground

`yarn add graphql-yoga`

Quickstart tells us to change our index.ts.  
Our Typescript rules say that every variabele needs to be defined. For now we can give them `: any`.

Run `yarn start` and we can see our app on localhost:4000.
Type hello and we get Hello World back. Perfect.

## Nodemon

[Nodemon](https://www.npmjs.com/package/nodemon) restarts the server if you change code. `yarn add -D nodemon`. Change your startup script to nodemon --exec.
