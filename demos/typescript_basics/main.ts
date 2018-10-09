const obj = {
  x: "Hello",
  y: 2.2,
};
console.log(obj);

const add: AddFunc = (x, y) => x + y;
type AddFunc = (x: number, y: number) => number;

interface Dog {
  bark: string;
}

interface Cat {
  purr: string;
}

type CatDog = Dog & Cat;
