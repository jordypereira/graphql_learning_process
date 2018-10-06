# Creating a TypeORM Entity

## Adding and storing Users in User.ts

Elke entity is een database table.

- Gebruik uuid ipv id -> string
  Een plugin om uuid's aan te maken: [uuid](https://www.npmjs.com/package/uuid)
  `yarn add uuid`.

Om de typescript query toe te voegen doe je `yarn add -D @types/uuid`

#### No default import

Dan doe je `import * as uuidv4 fron "uuid/v4";`

### @BeforeInsert()

Dit wordt opgeroepen voordat de entity in de database gaat.

### @Colum()

de `: string` is de typescript type.
In de column haakjes moet je de database type defineeren, bv "varchar".  
Als tweede parameter kan je opties meegeven zoals `{ length: 255 }`
::: warning Opgepast
Geef altijd een max length in zodat ze het niet oneindig groot kunnen ingeven.
:::

## De database aanmaken

`"synchronize": true,` in je orncfig file doet dit vanzelf als je de server opstart.

## Defining the schema

Als we dit in schema.graphql zetten krijgen we syntax highlighting.
We hebben nu wel een lib nodig om het te importen: [graphql-import](https://github.com/prisma/graphql-import).
`yarn add graphql-import`.

Een mutation is een soort request waar je data aan meegeeft dat gedefined staat in de haakjes. De uitroepteken is verplicht. De Boolean is wat hij returned.

```graphql
type Mutation {
  register(email: String!, password: String!): Boolean
}
```

## Resolvers

in resolvers.ts
Om de type defs van typescript te krijgen in de resolvers gebruken we een lib: [gql2ts](https://github.com/avantcredit/gql2ts/tree/master/packages/cli) `yarn add -D gql2ts`

voeg dit toe aan je start script:  
`"gen-schema-types": "gql2ts src/schema.graphql -o src/types/schema.d.ts"`

Nu kunnen we de ts type krijgen met GQL.I...
