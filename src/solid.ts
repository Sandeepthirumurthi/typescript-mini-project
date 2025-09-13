// src/solid.ts

// S: Single Responsibility - Logger only logs
export class Logger {
  log(message: string): void {
    // In real apps this could write to file/console with timestamps
    console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
  }
}

// I: Interface Segregation & O: Open/Closed: Notifier interface
export interface Notifier {
  send(message: string): void;
}

export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`[Email] ${message}`);
  }
}

export class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`[SMS] ${message}`);
  }
}

// D: Dependency Inversion - NotificationService depends on Notifier abstraction
export class NotificationService {
  constructor(private notifier: Notifier, private logger?: Logger) {}

  notify(message: string): void {
    this.notifier.send(message);
    this.logger?.log(`Notification sent: ${message}`);
  }
}

// L: Liskov Substitution — Shape interface is simple and substitutable
export interface Shape {
  area(): number;
}

export class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}
  area(): number {
    return this.w * this.h;
  }
}

export class Circle implements Shape {
  constructor(private r: number) {}
  area(): number {
    return Math.PI * this.r * this.r;
  }
}
