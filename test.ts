function getFirstElement<T>(array: T[]) {
  return array[0];
}

const inter = getFirstElement([1, 2, 3, 4]);
const string = getFirstElement(["Asd", "Asd"]);

const input = document.querySelector<HTMLInputElement>(".input");
input?.value;

let names: Array<string> = ["Adam", "Bob"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<number> = {
  name: 2,
};

let stringStore: DataStore<string> = {
  name: "hello",
};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const letsMerge = merge(1, "23");

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}


