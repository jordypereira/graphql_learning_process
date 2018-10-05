# Setup FeatherJS Apollo Server met GraphQL

## Setup project

Install the featherjs cli  
`npm install -g @feathersjs/cli`

create the project

```bash
mkdir project
cd project
feathers generate
```

## Add babel es2015 support

Hij gebruikt de oude babel maar wij moeten dus op [de documentatie](https://babeljs.io/docs/en/usage) gaan zoeken hoe het nu moet.

`yarn add @babel/core @babel/cli @babel/preset-env @babel/node`

_babel.config.js_

```javascript
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
```

Nu kunnen we met `npx babel src/` een source oproepen en dan krijgen we een javascript output.  
`npx babel-node src/` compiled uw code en runt het dan met node.

## Apollo Server, GraphQL and GraphQL Tools

[apollo-server doc](https://www.apollographql.com/docs/apollo-server/getting-started.html)

Apollo-server en graphQL-tools geven bij het installeren aan welke versie van graphQL ze nodig hebben. apollo-server kan de nieuwste versie gebruiken maar de nieuwste dat graphql-tool kan gebruiken is op het moment 0.13.1.

`yarn add apollo-server graphql@^0.13.1 graphql-tools`

## Create GraphQL Service

`feathers generate service`

Daarna moeten we een paar aanpassingen maken in `src/services/graphql/graphql.service.js`

## Maak GraphQL Resolvers en Scheme

Apollo Server heeft een schema (TypeDefs) en Resolvers nodig om gecreeerd te worden. We zullen deze in aparte files aanmaken.

## Define de Schema String

in scheme.js maken we een lange string met alle Type Definities. Dit is vooral de schema dat de gebruiker gebruikt.

```javascript
const typeDefs = `
  type Taco {
    _id: String
    meat: String
    cheese: String
    salsa: String
  }

  type RootQuery {
    allTacos: [Taco]
    tacos(meat: String!): [Taco]
    taco(_id: String!): [Taco]
  }

  type RootMutation {
    createTaco(meat: String!, cheese: String, salsa: String): Taco
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default typeDefs;
```

## Maak de Resolver

In `resolvers.js` maken we alle query's dat de database oproept.

```javascript
export default function Resolvers(app) {
  const Tacos = app.service("tacos");

  return {
    RootQuery: {
      allTacos(root, args, context) {
        return Tacos.find({});
      },
      tacos(root, { meat }, context) {
        return Tacos.find({
          query: {
            meat,
          },
        });
      },
      taco(root, { _id }, context) {
        return Tacos.get(_id);
      },
    },
    RootMutation: {
      createTaco(root, data, context) {
        return Tacos.create(data, context);
      },
    },
  };
}
```

## Maak de database

`feathers generate service` en kies dan voor NeDB.  
Feathers slaat dan alles vanzelf op.
