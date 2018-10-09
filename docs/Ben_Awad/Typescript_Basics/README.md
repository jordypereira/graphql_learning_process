# Typescript Basics

## Install Typescript globally

`npm i -g typescript` Make typescript files with the extension .ts and then compile it to .js.  
`tsc main.ts` Creates a main.js in the same folder. The default compiles it to the most standard javascript version.

## Variables

Typescript knows by default which type a variable is if you declare it. `const nmb = 12` Will be a number, which can be both an int or double.

You can also explicitly set the type of variables: `const nmb: number = 12`

For objects you have to declare each variable inside it.

```ts
const obj: { x: number; y: number } = {
  x: 5,
  y: 7,
};
```

This can get long so we can use an Interface.

### Interface

An Interface declares object fields. You can then use this interface to declare the type of an object.

```ts
interface objInterface {
  x: Number;
  y: Number;
}
```

Notice the difference because that you have to use semicolons and no equals sign.  
If you want to add a 3th variable thats optional, you have to put in the interface: `z?: number;`

```ts
const obj: objInterface = {
  x: 5,
  y: 7,
};
```

## Error handling

Now Typescript will throw an error when we declare anything else than a Number to the variable. Even when you don't explicity declare a type it will take the type of the first declaration.

A solution if you're not sure yet what the type will be is to use the `: any` type.  
`const objOrAnything: any = 5:`

## Functions

`const add = (x: number, y: number) => x + y;` it assumes the return is a number
or  
`const add: (x: number, y: number) => number = (x, y) => x + y;` we declare everything

This time we can use a Type for cleaner code

### Type

`type AddFunc = (x: number, y: number) => number;`  
And use it like `const add: AddFunc = (x, y) => x + y;`

## The newest ES syntax

TypeScript also let's you use the newest javascript out of the box, like destrucuring, spread, ..

#### Destructuring example

So if you expect an object with a and b like  
`const add = (nums: {a: number, b: number}) => nums.a + nums.b;`  
You can destructure it to make it look like this  
`const add = ({ a, b }: {a: number, b: number}) => a + b;`

## Unions

### Multiple types: |

If you want a variable to be multiple types, you can use the `|`.  
`let maybeNum: number | string = 5;`  
Or equal to a function type we made  
`let maybeNum: number | string | AddFunc = 5;`

### Concat: &

Concat interfaces in a type:  
`type CatDog = Dog & Cat`  
Will have both types of Dog & Cat in one interface.

```ts
const dogCat: CatDog = {
  bark: "I am barking.",
  purr: "purrrr",
};
```

Or let the type be a mix of interfaces and types:  
`type CatDog = Dog & Cat | number | string`

## Check the type: typeof

```ts
if (typeof dogCat === "string") {
  console.log("This is a string");
}
```

## Casting

Casting is changing the type of a var. You can use the types declared if it's possible to cast or use any if it's not able to.  
`add(dogCat as any, dogCat as any)`

## Summary

So seems it's just an extra tool to help identify errors before you commit your code, or work around it with :any.
I'm still kindof confused about when to use type or when to use an interface. So let me just search about that.

### Interface vs Type

> “type aliases can act sort of like interfaces, however, there are some subtle differences.”

It seems to be mostly the same untill you write very advanced Typescript. But here's a recap I found on [medium](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c):

- type aliases can act sort of like interfaces, however, there are 3 important differences ( union types, declaration merging)
- use whatever suites you and your team, just be consistent
- always use interface for public API's definition when authoring a library or 3rd party ambient type definitions
- consider using type for your React Component Props and State

So i'm just gonna use types. It's shorter.
