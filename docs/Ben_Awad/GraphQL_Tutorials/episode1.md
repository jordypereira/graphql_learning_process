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

He's using an older Babel version and syntax but we'll just have to look in [the documentation](https://babeljs.io/docs/en/usage) how it's done.

`yarn add @babel/core @babel/cli @babel/preset-env @babel/node`

- Babel core is the core Babel package
- Babel cli is used to run babel commands from the terminal
- Babel preset-env is the latest env rules combined in a preset
- Babel node is needed to run node and compile babel together in one command, babel-node

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

So the command `npx babel src/` just outputs the compiled code in the terminal.  
But `npx babel-node src/` compiles it and runs the node dev server!

## Apollo Server, GraphQL and GraphQL Tools

[apollo-server doc](https://www.apollographql.com/docs/apollo-server/getting-started.html)

Apollo-server and graphQL-tools output when installing which GraphQL version they need. Apollo-server can use the newest version but the tools need 0.13.1, so we will be installing that one.

`yarn add apollo-server graphql-tools`
`yarn add graphql@^0.13.1`

## Create GraphQL Service

`feathers generate service`

Then we make some adjustments in `src/services/graphql/graphql.service.js`.

## GraphQL Resolvers en Schema

The ApolloServer instance needs a resolver and schema passed in. We will make these in seperate files and import them.

## Define de Schema String

In schema.js we can write everything in one string. I assume this one is used to define the options the User can request.

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

## Create the Resolver

In `resolvers.js` we make the querys that do the database calls.

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

## Make the database

`feathers generate service` and choose for NeDB.  
Feathers does the rest.

## Test it

And it doesn't work after trying to fix it for a while. Let's move on.
