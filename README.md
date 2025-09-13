# TypeScript Mini Project

A small TypeScript console app demonstrating:
- Control statements
- OOP concepts (encapsulation, abstraction, inheritance, polymorphism)
- SOLID principles (simple examples)

## Setup
# Install node and other packages(package.json)
npm init -y
# dev tools(node module)
npm install --save-dev typescript ts-node-dev @types/node
# (no extra runtime deps needed)(tsconfig.json)
npx tsc --init

# steps to follow
Then open tsconfig.json and replace or set compilerOptions to:
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}

Add scripts to package.json (inside "scripts"):
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

Create this structure:
typescript-mini-project/
├─ package.json
├─ tsconfig.json
├─ README.md
└─ src/
   ├─ index.ts
   ├─ control.ts
   ├─ oop.ts
   └─ solid.ts

# To run the project
Run in dev mode (auto-reload):
npm run dev

Or build and run:
npm run build
npm start