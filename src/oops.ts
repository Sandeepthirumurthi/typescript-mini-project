// src/oop.ts

// Encapsulation: BankAccount hides internal balance
export class BankAccount {
  private balance: number;

  constructor(initial: number) {
    if (initial < 0) throw new Error("Initial balance cannot be negative");
    this.balance = initial;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be greater than 0");
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Withdraw must be greater than 0");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Abstraction + Inheritance + Polymorphism
export abstract class Animal {
  constructor(protected name: string) {}
  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} moves around`);
  }
}

export class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name}: Woof!`);
  }
}

export class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name}: Meow!`);
  }
}
