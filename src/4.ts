class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    console.log(`Your key ${key.getSignature()}`);
  }
}

abstract class House {
  public tenants: any[];
  public door: boolean;
  constructor(key: Key) {
    this.tenants = [];
    this.door = false;
  }
  comeIn(tenant: string) {
    if (this.door === true) {
      this.tenants.push(tenant);
    } else {
      return console.log(`Door closed`);
    }
  }
  abstract openDoor(key): void;
}

class MyHouse extends House {
  openDoor(key) {
    if (key === Math.random()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key();
key.getSignature();

// const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
person.getKey();

house.openDoor(person.getKey());

house.comeIn(person);
