// src/index.ts
import { runControlExamples } from "./control";
import { BankAccount, Dog, Cat } from "./oops";
import { Logger, EmailNotifier, SMSNotifier, NotificationService, Rectangle, Circle, Shape } from "./solid";

function main() {
  console.log("=== TypeScript Mini Project ===");

  // CONTROL
  runControlExamples();

  // OOP
  console.log("\n--- OOP Examples ---");
  const acc = new BankAccount(100);
  console.log("Initial balance:", acc.getBalance());
  acc.deposit(50);
  console.log("After deposit 50:", acc.getBalance());
  try {
    acc.withdraw(30);
    console.log("After withdraw 30:", acc.getBalance());
  } catch (err) {
    console.error("Withdraw failed:", (err as Error).message);
  }

  // Animal polymorphism
  const animals = [new Dog("Rex"), new Cat("Misty")];
  animals.forEach(a => {
    a.makeSound();
    a.move();
  });

  // SOLID
  console.log("\n--- SOLID Examples ---");

  const logger = new Logger();
  const emailSvc = new NotificationService(new EmailNotifier(), logger);
  emailSvc.notify("Welcome to the app (email)");

  const smsSvc = new NotificationService(new SMSNotifier());
  smsSvc.notify("This is an SMS alert");

  // Liskov + Polymorphism with shapes
  const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
  shapes.forEach((s, idx) => {
    console.log(`Shape ${idx} area:`, s.area().toFixed(2));
  });

  console.log("\n=== Done ===");
}

main();
