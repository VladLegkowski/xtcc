# tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "types": ["node", "jest", "@testing-library/jest-dom", "@testing-library/jest-dom/extend-expect"],
    "typeRoots": [
      "node_modules/@types"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": false,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src",
    "cypress",
    "./jest.config.ts",
    "./jest.setup.ts",
  ]
}
```

# style-mock.js

```js
module.export = {};

```

# package.json

```json
{
  "name": "exoticca-test",
  "version": "1.0.0",
  "description": "",
  "default": "index.html",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build",
    "test:unit": "jest --watchAll=false",
    "test:e2e": "cypress run --browser chrome",
    "cypress:open": "cypress open",
    "prettier": "prettier --write ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.24.7",
    "@babel/preset-env": "^7.24.8",
    "@babel/preset-react": "^7.24.7",
    "@babel/preset-typescript": "^7.24.7",
    "@parcel/core": "^2.12.0",
    "@parcel/transformer-js": "^2.12.0",
    "@testing-library/jest-dom": "^6.4.7",
    "@testing-library/react": "^16.0.0",
    "@types/compose-function": "^0.0.33",
    "@types/css-modules": "^1.0.5",
    "@types/jest": "^29.5.12",
    "@typescript-eslint/eslint-plugin": "^7.17.0",
    "@typescript-eslint/parser": "^7.17.0",
    "cypress": "^13.13.1",
    "eslint": "^8.32.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-cypress": "^3.3.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jest": "^28.6.0",
    "eslint-plugin-jsx-a11y": "^6.9.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-testing-library": "^6.2.2",
    "husky": "^9.1.1",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "lint-staged": "^15.2.7",
    "parcel": "^2.12.0",
    "postcss": "^8.4.39",
    "postcss-nested": "^6.2.0",
    "process": "^0.11.10",
    "ts-jest": "^29.2.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "compose-function": "^3.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.25.1"
  },
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx,css,scss,md,mdx}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}

```

# jest.setup.ts

```ts
import '@testing-library/jest-dom';

```

# jest.config.ts

```ts
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./style-mock.js'),
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

```

# cypress.config.ts

```ts
import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1500,
  video: true,
  projectId: '1vjiah',
  e2e: {
    baseUrl: 'http://localhost:1234/',
    excludeSpecPattern: ['**/__examples__'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

```

# README.md

```md
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

```

# .prettierrc

```
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}

```

# .prettierignore

```
node_modules/
coverage/
.eslintrc
README.md
tsconfig.json
package.json

```

# .postcssrc

```
{
    "plugins": {
        "postcss-nested": {}
    }
}
```

# .parcelrc

```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# editor files
# https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore
# User-specific stuff from JetBrains:
.idea/*
.cache/*
.env
dist/*

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
.parcel-cache/
cypress/videos/

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# .eslintrc

```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "extraFileExtensions": [".css"]
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "cypress/globals": true
  },
  "plugins": ["@typescript-eslint", "testing-library", "react-hooks", "prettier", "cypress", "eslint-plugin-cypress", "jest"],
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "rules": {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "react/jsx-curly-newline": "off",
    "no-multiple-empty-lines": [2, {"max": 99999, "maxEOF": 0}],
    "react/require-default-props": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts" // jest setup
        ],
        "optionalDependencies": false
      }
    ],
    "import/order": ["error", {
      "groups": [["index", "sibling", "parent", "internal", "external", "builtin"]],
      "newlines-between": "never"
    }],
    "no-plusplus": "off",
    "no-bitwise": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/export": "off",
    "react/function-component-definition": [
      2,
      {
        "unnamedComponents": "arrow-function"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    "@typescript-eslint/prefer-interface": "off", // also want to use "type"
    "@typescript-eslint/explicit-function-return-type": "off", // annoying to force return type

    /**
     * @description rules of eslint-plugin-react
     */
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".tsx", ".ts", ".js"]
    }], // also want to use with ".tsx"
    "react/prop-types": "off", // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    "react-hooks/rules-of-hooks": "error",
    "jsx-a11y/label-has-associated-control": [ "warn", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jest/expect-expect": [
      1,
      {
        "assertFunctionNames": [
          "expect", "cy.contains", "contains", "cy.should"
        ]
      }
    ],
    /**
     * @description rules of eslint-plugin-prettier
     */
    "prettier/prettier": [
      "error", {
        "singleQuote": true,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "globals": {
    "cy": true
  },
  "overrides": [
    {
      "files": [
        "**/*.test.tsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
}

```

# .eslintignore

```
node_modules/
coverage/
package.json
*.css
reportWebVitals.ts
style-mock.js
```

# .babelrc

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": []
}

```

# src/style.module.css.d.ts

```ts
declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

```

# src/index.tsx

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

# src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Apdex Board</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="index.tsx"></script>
  </body>
</html>

```

# src/index.css

```css
:root {
  /* application */
  --application-background-color: #f5f5f5;
}

/* Styling */
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--application-background-color);
}

```

# .husky/pre-push

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run test:unit

```

# .husky/pre-commit

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

```

# .husky/.gitignore

```
_

```

# src/pages/routing.tsx

```tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withProviders } from './providers/with-providers';

const Home = React.lazy(() => import('./home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/trips/:id',
    element: <Home />,
  },
  {
    path: '/trips/create',
    element: <Home />,
  },
  {
    path: '/trips/:id/edit',
    element: <Home />,
  },
]);

export const Routing = withProviders(() => <RouterProvider router={router} />);

```

# src/pages/home.tsx

```tsx
import React, { useState } from 'react';
import { Card } from '../enteties/card/card';
import { Header } from '../enteties/header/header';
import { Modal } from '../enteties/modal/modal';
import { SearchBar } from '../enteties/search-bar/search-bar';
import { TripView } from '../enteties/trip-view/trip-view';
import { ButtonGroup } from '../shared/ui/button-group/button-group';
import { Button } from '../shared/ui/button/button';
import { H1 } from '../shared/ui/typography/h1';
import { H5 } from '../shared/ui/typography/h5';
import { Trip, TripFilters, TripValue } from '../types/trip';
import styles from './home.module.css';

export const sampleTrips: Trip = {
  qwjoiedjq0w102: {
    id: 'qwjoiedjq0w102',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Portugal',
    completed: false,
    introduction:
      "Classic tour of Portugal's vibrant cities and cultural heritage, including Lisbon, Porto, Fatima and the flamboyant architecture of Sintra.",
    description:
      'Be captivated by the vibrant cities of Portugal on a spellbinding journey through its most inspiring destinations. Explore the lively neighborhoods of Lisbon and the fairytale castles of Sintra before traveling to the holy city of Fatima, filled with enigmatic spiritual landmarks. Finally, uncover the heart of Porto, known for its delicious wine and colorful buildings.',
    itinerary: [
      {
        day: 1,
        location: 'Lisbon',
        description:
          'Explore the oldest parts of the city to admire the ornate architecture or simply enjoy the views of the River Tagus from one of the many riverside cafes and bars.',
      },
      {
        day: 2,
        location: 'Sintra',
        description:
          'Excursion to Sintra, an unforgettable town and UNESCO World Heritage Site, filled with 19th-century Romanticist architecture, fairytale castles and exquisite gardens.',
      },
      {
        day: 3,
        location: 'Obidos',
        description:
          'One of the best-known villages in Portugal thanks to its magical cobblestone streets and charming architecture, enclosed within medieval city walls. Next, visit Nazare, a surfers paradise, home to some of the largest waves in the world.',
      },
      {
        day: 4,
        location: 'Porto',
        description:
          'Uncover the history of the Templars in Portugal, including the beautiful medieval chapel and the ornate cloister, a masterpiece of Renaissance architecture. Explore this fascinating UNESCO World Heritage site before continuing to the city of Coimbra.',
      },
    ],
  },
  qw9eiq0wie1i23112: {
    id: 'qw9eiq0wie1i23112',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Norway',
    completed: false,
    introduction:
      'Lose yourself in the magical beauty of the natural wonders Norway has to offer; from colossal Nordic landscapes such as the otherworldly Fjord of Dreams.',
    description:
      "Embark on an unforgettable journey through Norway's breathtaking landscapes. From the vibrant city of Oslo to the serene beauty of the fjords, experience the unique blend of urban culture and natural wonders. Explore picturesque villages, witness the Northern Lights, and indulge in the rich Viking history that shapes this remarkable country.",
    itinerary: [
      {
        day: 1,
        location: 'Oslo',
        description:
          'Begin your Norwegian adventure in the capital city. Visit the Viking Ship Museum and stroll through the sculpture-filled Vigeland Park.',
      },
      {
        day: 2,
        location: 'Bergen',
        description:
          'Travel to Bergen, the gateway to the fjords. Explore the colorful Bryggen district, a UNESCO World Heritage site, and take the funicular to Mount Fløyen for panoramic views.',
      },
      {
        day: 3,
        location: 'Geirangerfjord',
        description:
          'Journey to the stunning Geirangerfjord, another UNESCO site. Take a fjord cruise to see the Seven Sisters waterfall and enjoy the dramatic scenery.',
      },
      {
        day: 4,
        location: 'Tromsø',
        description:
          "Fly to Tromsø, located in the Arctic Circle. Visit the Arctic Cathedral and, if you're lucky, witness the mesmerizing Northern Lights.",
      },
    ],
  },
  qweqw0ei10021293dsa: {
    id: 'qweqw0ei10021293dsa',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Vietnam & Cambodia',
    completed: true,
    introduction:
      'A fascinating journey of discovery through Vietnam, Cambodia and Thailand!',
    description:
      'Immerse yourself in the rich cultures and stunning landscapes of Southeast Asia. From the bustling streets of Hanoi to the ancient temples of Angkor Wat, this journey takes you through the heart of Vietnam and Cambodia. Experience the vibrant local markets, serene rice paddies, and the warmth of the local people in this unforgettable adventure.',
    itinerary: [
      {
        day: 1,
        location: 'Hanoi, Vietnam',
        description:
          'Arrive in Hanoi and explore the Old Quarter. Visit the Temple of Literature and enjoy a traditional water puppet show.',
      },
      {
        day: 2,
        location: 'Ha Long Bay, Vietnam',
        description:
          'Cruise through the emerald waters of Ha Long Bay, a UNESCO World Heritage site. Explore limestone caves and enjoy fresh seafood on board.',
      },
      {
        day: 3,
        location: 'Hoi An, Vietnam',
        description:
          'Fly to Hoi An, a charming ancient town. Walk through the narrow streets, visit the Japanese Covered Bridge, and enjoy a cooking class.',
      },
      {
        day: 4,
        location: 'Siem Reap, Cambodia',
        description:
          'Travel to Siem Reap, the gateway to Angkor. Watch the sunset over the majestic Angkor Wat temple complex.',
      },
      {
        day: 5,
        location: 'Angkor, Cambodia',
        description:
          'Spend a full day exploring the Angkor Archaeological Park, including Angkor Thom and the Ta Prohm temple.',
      },
    ],
  },
};
function Home() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<TripFilters>(TripFilters.All);
  const [selectedTripId, setSelectedTripId] = React.useState<
    TripValue['id'] | null
  >(null);

  console.log(searchValue);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTripId(null);
  };
  const handleCreateNewTrip = () => {
    openModal();
  };

  const handleDetails = (tripId: TripValue['id']) => {
    setSelectedTripId(tripId);
    openModal();
  };

  const handleEdit = (tripId: TripValue['id']) => {
    console.log('Edit', tripId);
    // Implement logic to edit trip
  };

  const handleDelete = (tripId: TripValue['id']) => {
    console.log('Delete', tripId);
    // Implement logic to delete trip
  };

  const selectedTrip = sampleTrips[selectedTripId];

  return (
    <div className={styles.homePage}>
      <Header onCreateNewTrip={handleCreateNewTrip} />
      <H1>The places you dream of</H1>
      <H5>Let’s live new adventures</H5>
      <SearchBar onClick={setSearchValue} />
      <ButtonGroup value={filter} onClick={setFilter}>
        <Button>All</Button>
        <Button>Upcoming</Button>
        <Button>Completed</Button>
      </ButtonGroup>
      {Object.values(sampleTrips).map((trip) => (
        <Card
          key={trip.id}
          trip={trip}
          handleDetails={handleDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedTrip && (
          <TripView
            trip={selectedTrip}
            onMarkAsCompleted={() => console.log('MarkAsCompleted')}
          />
        )}
      </Modal>
    </div>
  );
}

export default Home;

```

# src/pages/home.module.css

```css
.homePage {
  align-items: center;
  display: flex;
  flex-direction: column;
}

```

# src/types/trip.ts

```ts
export type Itinerary = {
  day: number;
  location: string;
  description: string;
};

export type TripValue = {
  id: string;
  image: string;
  name: string;
  completed: boolean;
  introduction: string;
  description: string;
  itinerary: Itinerary[];
};

export type Trip = {
  [key: string]: TripValue;
};

export enum TripFilters {
  All = 0,
  Upcoming = 1,
  Completed = 2,
}

```

# src/app/App.tsx

```tsx
import React from 'react';
import { Routing } from '../pages/routing';

function App() {
  return <Routing />;
}

export { App };

```

# src/app/App.test.tsx

```tsx
import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test', () => {
  const app = <App />;
  it('test 1', () => {
    render(app);
    expect(screen.queryByText(/apps by host/i)).toBeInTheDocument();
  });
});

```

# cypress/support/index.ts

```ts
declare global {}
export {};

```

# cypress/support/e2e.ts

```ts
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

```

# cypress/support/commands.ts

```ts
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

```

# cypress/fixtures/example.json

```json
{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}

```

# cypress/e2e/spec.cy.ts

```ts
context('End to end test for the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('text', () => {
    describe('main page text', () => {
      it('assert text on the page', () => {
        cy.contains(/apps by host/i).should('exist');
        cy.contains(/for user averylongemailadress@companyname.com/i).should(
          'exist'
        );
      });
    });
  });
});

```

# src/pages/providers/with-providers.tsx

```tsx
import React, { Suspense } from 'react';
import compose from 'compose-function';

const providers = (component: () => React.ReactNode) => () => {
  return <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>;
};
export const withProviders = compose(providers);

```

# src/enteties/trip-view/trip-view.tsx

```tsx
import React from 'react';
import { TripValue } from '../../types/trip';
import { H1 } from '../../shared/ui/typography/h1';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import styles from './trip-view.module.css';

interface TripViewProps {
  trip: TripValue;
  onMarkAsCompleted: (tripId: string) => void;
}

export function TripView({ trip, onMarkAsCompleted }: TripViewProps) {
  return (
    <div className={styles.tripView}>
      <img src={trip.image} alt={trip.name} className={styles.image} />
      <H1>{trip.name}</H1>
      {!trip.completed && (
        <Button
          variant="link"
          onClick={() => onMarkAsCompleted(trip.id)}
          disabled={trip.completed}
        >
          Mark as completed ☑️
        </Button>
      )}
      <Text variant="normal" className={styles.introduction}>
        {trip.introduction}
      </Text>
      <Text variant="normal" className={styles.description}>
        {trip.description}
      </Text>
      <h2 className={styles.itineraryTitle}>Itinerary</h2>
      <ul className={styles.itinerary}>
        {trip.itinerary.map((item) => (
          <li key={item.day} className={styles.itineraryItem}>
            <h3 className={styles.itineraryDay}>
              Day {item.day}: {item.location}
            </h3>
            <Text variant="normal">{item.description}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

```

# src/enteties/trip-view/trip-view.module.css

```css
.tripView {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.introduction {
  font-style: italic;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 30px;
}

.itineraryTitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.itinerary {
  list-style-type: none;
  padding: 0;
}

.itineraryItem {
  margin-bottom: 20px;
}

.itineraryDay {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

```

# src/shared/utils/classNames.ts

```ts
function classNames(
  ...args: Array<
    string | string[] | { [key: string]: string | number | boolean }
  >
): string {
  const objClasses =
    typeof args === 'object'
      ? Object.keys(args).filter((key) => args[key])
      : [];
  const allClasses = [...args, ...objClasses].filter(Boolean);
  return allClasses.join(' ');
}

export { classNames };

```

# src/enteties/card/card.tsx

```tsx
import React from 'react';
import { H4 } from '../../shared/ui/typography/h4';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { TripValue } from '../../types/trip';
import styles from './card.module.css';

interface CardProps {
  trip: TripValue;
  handleDetails: (trip: TripValue['id']) => void;
  handleEdit: (trip: TripValue['id']) => void;
  handleDelete: (tripId: TripValue['id']) => void;
}

export function Card({
  trip,
  handleDetails,
  handleEdit,
  handleDelete,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={trip.image} alt={trip.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <H4>{trip.name}</H4>
        <Text variant="normal" className={styles.introduction}>
          {trip.introduction}
        </Text>
        <div className={styles.actions}>
          <Button variant="link" onClick={() => handleDetails(trip.id)}>
            See trip details
          </Button>
          <div className={styles.subactions}>
            <Button variant="link" onClick={() => handleEdit(trip.id)}>
              Edit
            </Button>
            <Button variant="link-danger" onClick={() => handleDelete(trip.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

```

# src/enteties/card/card.module.css

```css
.card {
  display: flex;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 12.875rem;
}

.imageContainer {
  flex: 1;
  max-width: 50%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.introduction {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
}

.subactions {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: auto;
}

```

# src/enteties/modal/modal.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/ui/button/button';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <div className={styles.modalHeader}>
          <Button
            variant="link"
            onClick={onClose}
            className={styles.closeButton}
          >
            &times;
          </Button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

```

# src/enteties/modal/modal.module.css

```css
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 31.25rem;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modalHeader {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: flex-end;
}

.closeButton {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.modalBody {
  margin-top: 1rem;
}

```

# src/enteties/search-bar/search-bar.tsx

```tsx
import React from 'react';
import { Button } from '../../shared/ui/button/button';
import { TextInput } from '../../shared/ui/form/text-input';

type SearchBarProps = {
  onClick: (value: string) => void;
};
export function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = React.useState('');
  const { value, onClick } = props;
  return (
    <TextInput
      value={searchValue}
      onChange={setSearchValue}
      placeholder="Search trips"
      id="search-bar-input"
    >
      <Button icon="search" size="small" onClick={() => onClick(value)}>
        Search
      </Button>
    </TextInput>
  );
}

```

# src/enteties/header/header.tsx

```tsx
import React from 'react';
import styles from './header.module.css';
import { Button } from '../../shared/ui/button/button';

interface HeaderProps {
  onCreateNewTrip: () => void;
}

export function Header({ onCreateNewTrip }: HeaderProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>e</span>
      </div>
      <Button
        variant="secondary"
        size="default"
        onClick={onCreateNewTrip}
        className={styles.createButton}
      >
        Create new trip
      </Button>
    </nav>
  );
}

```

# src/enteties/header/header.module.css

```css
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  max-width: 58rem;
  background: #121212;
  border-radius: 1rem;
}

.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.8125rem;
  background: #FFFFFF;
}

.icon {
  font-size: 1.5rem;
  color: #121212;
  font-weight: bold;
}

```

# src/shared/ui/typography/typography.css

```css
h1, h4, h5, p {
  margin: 0;
  padding: 0;
}

```

# src/shared/ui/typography/text.tsx

```tsx
import React from 'react';
import styles from './text.module.css';

type TextVariant = 'normal' | 'subtle';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}

export function Text({
  children,
  variant = 'normal',
  className = '',
}: TextProps) {
  const textClass = variant === 'subtle' ? styles.subtle : styles.normal;

  return (
    <p className={`${styles.text} ${textClass} ${className}`}>{children}</p>
  );
}

```

# src/shared/ui/typography/text.module.css

```css
.text {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
}

.normal {
  color: #121212;
}

.subtle {
  color: #898989;
}

```

# src/shared/ui/typography/h5.tsx

```tsx
import React from 'react';
import styles from './h5.module.css';

function H5(props: React.PropsWithChildren) {
  const { children } = props;
  return <h5 className={styles.h5}>{children}</h5>;
}

export { H5 };

```

# src/shared/ui/typography/h5.module.css

```css
@import url(./typography.css);

.h5 {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.56rem;
  color: #121212;
}

```

# src/shared/ui/typography/h4.tsx

```tsx
import React from 'react';
import styles from './h4.module.css';

function H4(props: React.PropsWithChildren) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

export { H4 };

```

# src/shared/ui/typography/h4.module.css

```css
@import url(./typography.css);

.h4 {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.88rem;
  color: #121212;
}

```

# src/shared/ui/typography/h1.tsx

```tsx
import React from 'react';
import styles from './h1.module.css';

function H1(props: React.PropsWithChildren) {
  const { children } = props;
  return <h1 className={styles.h1}>{children}</h1>;
}

export { H1 };

```

# src/shared/ui/typography/h1.module.css

```css
@import url(./typography.css);

.h1 {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #121212;
}

```

# src/shared/ui/form/text-input.tsx

```tsx
import React, { ChangeEvent } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  id: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

export function TextInput({
  label,
  id,
  placeholder,
  type = 'text',
  children,
  onChange,
  value,
  ...props
}: TextInputProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <input
        value={value}
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(event.target.value)
        }
        {...props}
      />
      {children}
    </div>
  );
}

```

# src/shared/ui/form/text-area.tsx

```tsx
import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  maxLength?: number;
  initialHeight?: string;
}

export function TextArea({
  label,
  id,
  maxLength,
  initialHeight = '150px',
  placeholder,
  ...props
}: TextAreaProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id} maxLength={maxLength}>
        {label}
      </Label>
      <textarea
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height: initialHeight }}
        {...props}
      />
    </div>
  );
}

```

# src/shared/ui/form/select.tsx

```tsx
import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
}

export function Select({ label, id, ...props }: SelectProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.selectWrapper}>
        <select id={id} className={styles.select} {...props}>
          {[...Array(99)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

```

# src/shared/ui/form/label.tsx

```tsx
import React from 'react';
import styles from './label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  maxLength?: number;
}

export function Label({ htmlFor, children, maxLength, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label} {...props}>
      {children}
      {maxLength && (
        <span className={styles.maxLength}> (max. {maxLength} characters)</span>
      )}
    </label>
  );
}

```

# src/shared/ui/form/label.module.css

```css
.label {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #121212;
  margin-bottom: 0.25rem;
}

.maxLength {
  font-size: 0.875rem;
  color: #6a6a6a;
}

```

# src/shared/ui/form/form-field.module.css

```css
.fieldContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.25rem;
  width: 100%;
  max-width: 36rem;
}

.input,
.textarea,
.select {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #B0B0B0;
  font-size: 1rem;
  line-height: 1.5;
  color: #121212;
}

.input,
.select {
  height: 3rem;
  border-radius: 6.25rem;
}

.fieldContainer button {
  position: absolute;
  right: 0.50rem;
  top : 0.88rem;
}

.textarea {
  border-radius: 1rem;
  resize: vertical;
  min-height: 100px;
}

.input:focus,
.textarea:focus,
.select:focus {
  outline: none;
  border-color: #121212;
}

.input::placeholder,
.textarea::placeholder {
  color: #B0B0B0;
}

.selectWrapper {
  position: relative;
  width: 100%;
}

.selectWrapper::after {
  content: '▼';
  font-size: 1rem;
  color: #121212;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 2rem;
  cursor: pointer;
}

.select::-ms-expand {
  display: none;
}

```

# src/shared/ui/header/Header.tsx

```tsx
import React from 'react';
import styles from './Header.module.css';

function HeaderComponent(props: React.PropsWithChildren) {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}
const Header = React.memo(HeaderComponent);
export { Header };

```

# src/shared/ui/header/Header.module.css

```css
.header {
  display: flex;
  align-items: baseline;
  gap: 0.9375em;

  > *:first-child,
  *:last-child {
    flex-shrink: 0;
  }
}

```

# src/shared/ui/button-group/button-group.tsx

```tsx
import React from 'react';
import { TripFilters } from '../../../types/trip';
import styles from './button-group.module.css';

type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
  value: TripFilters;
  onClick: (value: number) => void;
};

export function ButtonGroup({
  children,
  className = '',
  value,
  onClick,
}: ButtonGroupProps) {
  return (
    <div className={`${styles.buttonGroup} ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement<React.HTMLAttributes<HTMLButtonElement>>(child)
        ) {
          let positionClass = '';
          if (index === 0) {
            positionClass = styles.first;
          } else if (index === React.Children.count(children) - 1) {
            positionClass = styles.last;
          }

          return React.cloneElement(child, {
            className: `${child.props.className || ''} ${styles.groupButton} ${positionClass}`,
            active: index === value,
            onClick: () => onClick(index),
          });
        }
        return child;
      })}
    </div>
  );
}

```

# src/shared/ui/button-group/button-group.module.css

```css
.buttonGroup {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  width: 19.0625rem;
  height: 3rem;
  border: 1px solid #D8D8D8;
  border-radius: 6.25rem;
  overflow: hidden;
}

.groupButton {
  flex: 1;
  border: none;
  transition: background-color 0.3s ease;
}

.groupButton:not(:last-child) {
  border-right: 1px solid #D8D8D8;
}

.groupButton:hover {
  opacity: .7;
}

.groupButton.selected {
  opacity: .8;
}

.groupButton:not(.first):not(.last) {
  border-radius: 0;
}

.first {
  border-radius: 6.25rem 0 0 6.25rem;
}

.last {
  border-radius: 0 6.25rem 6.25rem 0;
}

```

# src/shared/ui/button/button.tsx

```tsx
import React from 'react';
import styles from './button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'search'
  | 'link'
  | 'link-danger';
type ButtonSize = 'default' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  active?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  active,
  ...props
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className} ${active ? styles.active : undefined}`;
  return (
    <button type="button" className={buttonClass} {...props}>
      {children}
    </button>
  );
}

```

# src/shared/ui/button/button.module.css

```css
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
}

.primary {
  background: #121212;
  color: #FFFFFF;
}

.secondary {
  background: #FFFFFF;
  color: #121212;
  border: 1px solid #D8D8D8;
}

.search {
  background: #121212;
  color: #FFFFFF;
}

.default {
  padding: 0.75rem;
  height: 3rem;
  border-radius: 6.25rem;
  font-size: 1rem;
}

.small {
  padding: 0.5rem;
  width: 4.625rem;
  height: 2.25rem;
  border-radius: 6.25rem;
  font-size: 0.875rem;
}

.link, .link-danger {
  background: none;
  padding: 0;
  text-decoration: underline;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  justify-content: normal;
}

.link {
  color: #121212; /* Base/Polar Night */
}

.link-danger {
  color: #C93957; /* Red/Red Desert Medium */
}

.link:hover, .link-danger:hover {
  opacity: 0.8;
}

.link:active, .link-danger:active {
  opacity: 0.6;
}

.button:hover {
  opacity: 0.9;
}

.button:active {
  opacity: 0.8;
}

.button:disabled {
  opacity: 0.9;
}

.active {
  opacity: 0.6;
}

```

