# GraphQL Typescript Server Boilerplate

## TypeOrm

Voor dit project gaan we TypeORM gebruiken.
[TypeOrm Setup](http://typeorm.io/#/)

We volgen de Quick Start guide.  
`npm install typeorm -g`

We gaan Postgres als database gebruiken dus in je project doe je de volgende commando om het project aan te maken:  
`typeorm init --name graphql-ts-server-boilerplate --database postgres`

Hij wilt dan dat we alle packages op hun versie gaan checken met een tool
[npm-check-updates](https://www.npmjs.com/package/npm-check-updates) `npm install -g npm-check-updates`  
Dan check en update je met `ncu -a`. Dit update enkel de package.json dus moeten we `yarn` nog runnen.

### database setup

In ornconfig.json geef je je username en paswoord van je lokale postgres in, samen met de database naam.  
Als postgres correct is ingesteld kan je gewoon createdb _databasename_ doen.

## TypeScript

De config zit in tsconfig.json. We gaan de code nemen van andere projecten, namelijk [tsconfig](https://github.com/benawad/node-ts-graphql-boilerplate/blob/10_session_express_middleware/tsconfig.json).

TS Lint is nodig om alle code gelijk te maken. TS Lint stelt de regels op en [Prettier](https://www.npmjs.com/package/prettier) past je code aan na een save/commit (zelf in te stellen). We gebruiken [tslint](https://github.com/benawad/node-ts-graphql-boilerplate/blob/10_session_express_middleware/tslint.json)

## GraphQL Yoga

[GraphQL Yoga](https://github.com/prisma/graphql-yoga) is een combinatie van alle packages die je normaal gebruikt:

- apollo-server
- graphql-tools
- graphql playground

`yarn add graphql-yoga`

Vervang de content van index.ts door de Quickstart.  
Voor de Typescript rules moeten we elke variabele nog een type geven. Je kan ze gewoon op `: any` zetten.

Als we nu `yarn start` doen kunnen we onze app testen op localhost:4000.
Type hello en je krijgt Hello World terug. Perfect.

## Nodemon

[Nodemon](https://www.npmjs.com/package/nodemon) restart de server als je code veranderd. `yarn add -D nodemon`. Verander je startup script naar nodemon --exec.
