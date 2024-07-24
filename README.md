![image](https://user-images.githubusercontent.com/17318500/220427659-6a340aa6-19a4-4cdb-95a2-7f48646555cf.png)

## Prerequisites

- node<sub><sup>`v20.10.0`</sup></sub>
- npm<sub><sup>`v10.2.3`</sup></sub>

## Install

1. Run `npm install`.

## Running the application

1. Run `npm start` to start the client.
2. Check it out under:  `http://localhost:1234/`.

### The Application


### General Approach

* The architecture is loosely based on feature sliced design architecture.
* The app bundler is `ParcelJs`.
* The application is written in `Typescript`.
* The styles are written in `CSS`, using `PostCss` `css modules`.
* Apart of the `React` itself, I used only one module - `React Router`. Although it is an overkill for this app, its a good fundamental in case the app has to grow and display more interfaces.

### Testing

**Unit testing** `npm run test:unit`  | `Jest` &  `@testing-library/react`.

**e2e testing** `npm run test:e2e` | `Cypress`

Currently, there are test only for the main business logic and a happy path for e2e.

### Libs/tools used

* [Typescript](https://www.typescriptlang.org/)
* [ES2019](https://262.ecma-international.org/10.0/)
* [React](https://facebook.github.io/react/)
* [React Router](https://reactrouter.com/en/main)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [Cypress](https://www.cypress.io/)
* [ESLint](http://eslint.org/)
* [Feature slice design](https://feature-sliced.design/)

## License

The MIT License (MIT)
