# Creating a TypeORM Entity

## Adding and storing Users in User.ts

Each entity is a database table.

- Use uuid instead of id -> string
  A plugin to create uuid's: [uuid](https://www.npmjs.com/package/uuid)
  `yarn add uuid`.

Typescript needs the query for it `yarn add -D @types/uuid`

#### No default import TSLine rule

We can instead use `import * as uuidv4 fron "uuid/v4";`

### @BeforeInsert()

We use this to make the uuid for the entity before it goes in the database.

### @Colum()

The `: string` is the typescript type.
Define the database type in parenthesis, eg "varchar".  
Option go in the second parameter: `{ length: 255 }`
::: warning Tip
Always give a max length so that they cant input endless strings.
:::

## Creating the database

`"synchronize": true,` type this in the ornconfig file so that it puts the tables in the database on server start.

## Defining the schema

With the extension .graphql we get syntax highlighting.
We do need a lib to use the .graphql and import it: [graphql-import](https://github.com/prisma/graphql-import).
`yarn add graphql-import`.

The exclamation mark is used when the variabele needs to be entered.

```graphql
type Mutation {
  register(email: String!, password: String!): Boolean
}
```

## Resolvers

In _resolvers.ts_
To get the typerscript typdefs we'll use another lib: [gql2ts](https://github.com/avantcredit/gql2ts/tree/master/packages/cli) `yarn add -D gql2ts`

Add this to your scripts:  
`"gen-schema-types": "gql2ts src/schema.graphql -o src/types/schema.d.ts"`

Now we get types.
