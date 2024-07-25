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
    "node_modules/@types/node/globals.global.d.ts"
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
    "json:server": "npx json-server db.json",
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
    "@types/uuid": "^10.0.0",
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
    "json-server": "^1.0.0-beta.1",
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
    "clsx": "^2.1.1",
    "compose-function": "^3.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-error-boundary": "^4.0.13",
    "react-hook-form": "^7.52.1",
    "react-router-dom": "^6.25.1",
    "uuid": "^10.0.0"
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

# db.json

```json
{
  "travels": [
    {
      "id": "1",
      "title": "Portugal",
      "description": "Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!",
      "photo_url": "https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg",
      "status": "todo",
      "itinerary": [
        {
          "day": 1,
          "location": "Lisbon",
          "description": "Explore the Alfama neighborhood and visit São Jorge Castle."
        },
        {
          "day": 2,
          "location": "Lisbon",
          "description": "Visit the Jerónimos Monastery and the Monument to the Discoveries."
        }
      ]
    },
    {
      "id": "2",
      "title": "Hawaii",
      "description": "Embark on a tropical escapade to Hawaii, where the lush landscapes of Oahu, the volcanic wonders of Maui, and the serene beaches of Kauai beckon. Immerse yourself in the Aloha spirit, savor the flavors of traditional Hawaiian cuisine, and witness the breathtaking beauty of the Pacific archipelago. Hawaii invites you to experience the perfect blend of paradise and adventure.",
      "photo_url": "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg",
      "status": "todo",
      "itinerary": [
        {
          "day": 1,
          "location": "Honolulu, Oahu",
          "description": "Explore the vibrant city of Honolulu, visit Waikiki Beach, and hike to the summit of Diamond Head for panoramic views."
        },
        {
          "day": 2,
          "location": "North Shore, Oahu",
          "description": "Discover the legendary North Shore, known for its big waves, explore Haleiwa town, and relax on the scenic beaches."
        }
      ]
    },
    {
      "id": "3",
      "title": "China",
      "description": "Explore China, from the bustling streets of Beijing to the ancient wonders of the Great Wall. Delight your senses with exquisite Chinese cuisine, explore temples in Xi'an, immerse yourself in the modernity of Shanghai, and create unforgettable memories in this destination full of history and beauty. China invites you to experience a unique journey, where rich tradition meets 21st-century innovation.",
      "photo_url": "https://content.skyscnr.com/m/6a82667a63ac12a3/original/GettyImages-156384414.jpg",
      "status": "todo",
      "itinerary": []
    },
    {
      "id": "4",
      "title": "Japan",
      "description": "Embark on a captivating journey to Japan, where the seamless blend of ancient traditions and modern innovation awaits. Immerse yourself in Tokyo's vibrant streets, explore historic temples in Kyoto, and savor the delicate flavors of authentic Japanese cuisine. From the iconic Mount Fuji to the serene gardens of Kanazawa, Japan invites you to discover a captivating blend of cultural richness and natural beauty.",
      "photo_url": "https://humanidades.com/wp-content/uploads/2017/07/japon-7-e1571188423405-800x415.jpg",
      "status": "todo",
      "itinerary": [
        {
          "day": 1,
          "location": "Tokyo",
          "description": "Experience the vibrant energy of Shibuya Crossing and visit the historic Meiji Shrine."
        },
        {
          "day": 2,
          "location": "Tokyo",
          "description": "Explore the high-tech district of Akihabara and indulge in sushi at Tsukiji Fish Market."
        }
      ]
    },
    {
      "id": "5",
      "title": "Mexico",
      "description": "Embark on an immersive journey through Mexico, where the vibrant culture of Mexico City beckons, the ancient wonders of Chichen Itza await, and the spicy delights of Mexican cuisine tantalize your taste buds. From the historic charm of Oaxaca to the pristine beaches of Tulum, Mexico invites you to delve into a rich tapestry of experiences that showcase its diverse landscapes and cultural treasures.",
      "photo_url": "https://cdn.britannica.com/60/92960-050-327CF926/pyramid-Mayan-Chichen-Itza-Mex.jpg",
      "status": "todo",
      "itinerary": []
    },
    {
      "id": "6",
      "title": "South Koreaa",
      "description": "Explore the enchanting landscapes and rich cultural heritage of South Korea. From the bustling streets of Seoul to the historic sites of Gyeongju, and the serene beauty of Jeju Island, South Korea invites you on an immersive journey through its vibrant cities and picturesque landscapes.",
      "photo_url": "https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg",
      "status": "done",
      "itinerary": [
        {
          "day": 1,
          "location": "Seoul",
          "description": "Discover the modern charm of Seoul with visits to Gyeongbokgung Palace and the bustling Dongdaemun Design Plaza."
        },
        {
          "day": 2,
          "location": "Seoul",
          "description": "Explore the vibrant neighborhoods of Insadong and Myeongdong, known for their traditional markets and trendy shops."
        },
        {
          "day": 3,
          "location": "Gyeongju",
          "description": "Immerse yourself in the ancient history of Gyeongju by visiting Bulguksa Temple and the historic Seokguram Grotto."
        },
        {
          "day": 4,
          "location": "Gyeongju",
          "description": "Stroll through the picturesque streets of the Yangdong Folk Village and visit the beautiful Anapji Pond."
        }
      ]
    }
  ]
}
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
![image](https://private-user-images.githubusercontent.com/17318500/352107907-25fd86ad-52cc-45c4-91e1-872c2d24703b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE5MTEzNzAsIm5iZiI6MTcyMTkxMTA3MCwicGF0aCI6Ii8xNzMxODUwMC8zNTIxMDc5MDctMjVmZDg2YWQtNTJjYy00NWM0LTkxZTEtODcyYzJkMjQ3MDNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI1VDEyMzc1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQxNDYxY2M1OTAxNTQ4ZjEyMzIzMTVhYzkzMzBjMmQ1ZTIwNjg2OWQwMTA3ZGIyNDEwMDAxZmExZjk3N2E4YzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DaUyCZqUVx6OR8HxptMg8GrESks5a8m0R2eIQBwVuHE)

## Prerequisites

- node<sub><sup>`v20.10.0`</sup></sub>
- npm<sub><sup>`v10.2.3`</sup></sub>

## Install

1. Run `npm install`.

## Running the application

1. Run `json:server` and then `npm start` to start the client.
2. Check it out under:  `http://localhost:1234/`.

### The Application
Dream Travels is your space to add wild destinations and keep the flame of your past adventures alive. It's like your own dream journal, but with a passport!


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
import { App } from './app/app';

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

```

# src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Dream Travels</title>
    <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✈️</text></svg>">
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

# coverage/lcov.info

```info
TN:
SF:src/index.tsx
FNF:0
FNH:0
DA:5,0
DA:6,0
DA:7,0
LF:3
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/style.module.css.d.ts
FNF:0
FNH:0
LF:0
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/api/trips.tsx
FN:10,apiCall
FN:29,getTrips
FN:33,getTrip
FN:39,createTrip
FN:49,updateTrip
FN:59,deleteTrip
FNF:6
FNH:6
FNDA:10,apiCall
FNDA:2,getTrips
FNDA:2,getTrip
FNDA:2,createTrip
FNDA:2,updateTrip
FNDA:2,deleteTrip
DA:3,1
DA:14,10
DA:15,10
DA:16,5
DA:17,0
DA:19,5
DA:21,5
DA:30,2
DA:36,2
DA:40,2
DA:50,2
DA:60,2
LF:12
LH:11
BRDA:16,0,0,0
BRDA:16,0,1,5
BRDA:24,1,0,5
BRDA:24,1,1,0
BRF:4
BRH:2
end_of_record
TN:
SF:src/app/app.tsx
FN:13,(anonymous_0)
FN:20,(anonymous_1)
FN:31,(anonymous_2)
FN:38,(anonymous_3)
FN:40,App
FNF:5
FNH:0
FNDA:0,(anonymous_0)
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
FNDA:0,(anonymous_3)
FNDA:0,App
DA:9,0
DA:14,0
DA:21,0
DA:32,0
DA:38,0
DA:41,0
LF:6
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/enteties/card/card.tsx
FN:15,Card
FN:29,(anonymous_1)
FN:33,(anonymous_2)
FN:36,(anonymous_3)
FNF:4
FNH:0
FNDA:0,Card
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
FNDA:0,(anonymous_3)
DA:16,0
DA:18,0
DA:29,0
DA:33,0
DA:36,0
LF:5
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/enteties/header/header.tsx
FN:9,Header
FNF:1
FNH:0
FNDA:0,Header
DA:10,0
DA:12,0
LF:2
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/enteties/modal/modal.tsx
FN:12,Modal
FN:16,(anonymous_1)
FN:17,(anonymous_2)
FN:28,(anonymous_3)
FN:34,(anonymous_4)
FN:46,(anonymous_5)
FNF:6
FNH:5
FNDA:3,Modal
FNDA:3,(anonymous_1)
FNDA:1,(anonymous_2)
FNDA:3,(anonymous_3)
FNDA:3,(anonymous_4)
FNDA:0,(anonymous_5)
DA:13,3
DA:14,3
DA:16,3
DA:17,3
DA:18,1
DA:19,1
DA:23,3
DA:24,2
DA:25,2
DA:28,3
DA:29,3
DA:30,3
DA:34,3
DA:35,3
DA:36,2
DA:40,3
DA:42,2
DA:46,0
LF:18
LH:17
BRDA:18,0,0,1
BRDA:18,0,1,0
BRDA:23,1,0,2
BRDA:23,1,1,1
BRDA:35,2,0,2
BRDA:35,2,1,1
BRDA:35,3,0,3
BRDA:35,3,1,2
BRDA:40,4,0,1
BRDA:40,4,1,2
BRF:10
BRH:9
end_of_record
TN:
SF:src/enteties/search-bar/search-bar.tsx
FN:10,SearchBar
FN:13,(anonymous_1)
FNF:2
FNH:2
FNDA:3,SearchBar
FNDA:2,(anonymous_1)
DA:11,3
DA:13,3
DA:14,2
DA:17,3
LF:4
LH:4
BRF:0
BRH:0
end_of_record
TN:
SF:src/enteties/trip-form/trip-form.tsx
FN:20,TripForm
FN:37,(anonymous_1)
FN:43,(anonymous_2)
FN:57,(anonymous_3)
FN:66,(anonymous_4)
FN:99,(anonymous_5)
FN:118,(anonymous_6)
FN:127,(anonymous_7)
FNF:8
FNH:0
FNDA:0,TripForm
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
FNDA:0,(anonymous_3)
FNDA:0,(anonymous_4)
FNDA:0,(anonymous_5)
FNDA:0,(anonymous_6)
FNDA:0,(anonymous_7)
DA:21,0
DA:22,0
DA:23,0
DA:24,0
DA:25,0
DA:26,0
DA:37,0
DA:38,0
DA:39,0
DA:40,0
DA:43,0
DA:44,0
DA:48,0
DA:52,0
DA:57,0
DA:58,0
DA:59,0
DA:60,0
DA:62,0
DA:66,0
DA:67,0
DA:68,0
DA:69,0
DA:71,0
DA:75,0
DA:100,0
DA:118,0
DA:128,0
LF:28
LH:0
BRDA:27,0,0,0
BRDA:27,0,1,0
BRDA:44,1,0,0
BRDA:44,1,1,0
BRDA:45,2,0,0
BRDA:45,2,1,0
BRDA:78,3,0,0
BRDA:78,3,1,0
BRDA:81,4,0,0
BRDA:81,4,1,0
BRDA:135,5,0,0
BRDA:135,5,1,0
BRF:12
BRH:0
end_of_record
TN:
SF:src/enteties/trip-view/trip-view.tsx
FN:9,TripView
FN:15,(anonymous_1)
FN:20,(anonymous_2)
FN:41,(anonymous_3)
FNF:4
FNH:0
FNDA:0,TripView
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
FNDA:0,(anonymous_3)
DA:10,0
DA:11,0
DA:12,0
DA:13,0
DA:15,0
DA:16,0
DA:17,0
DA:20,0
DA:21,0
DA:22,0
DA:26,0
DA:42,0
LF:12
LH:0
BRDA:21,0,0,0
BRDA:21,0,1,0
BRDA:31,1,0,0
BRDA:31,1,1,0
BRF:4
BRH:0
end_of_record
TN:
SF:src/pages/home.tsx
FN:15,Home
FN:21,(anonymous_1)
FN:30,(anonymous_2)
FN:36,(anonymous_3)
FN:38,(anonymous_4)
FN:46,(anonymous_5)
FN:55,(anonymous_6)
FN:59,(anonymous_7)
FN:60,(anonymous_8)
FNF:9
FNH:0
FNDA:0,Home
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
FNDA:0,(anonymous_3)
FNDA:0,(anonymous_4)
FNDA:0,(anonymous_5)
FNDA:0,(anonymous_6)
FNDA:0,(anonymous_7)
FNDA:0,(anonymous_8)
DA:16,0
DA:17,0
DA:18,0
DA:19,0
DA:21,0
DA:22,0
DA:23,0
DA:24,0
DA:26,0
DA:30,0
DA:31,0
DA:32,0
DA:34,0
DA:36,0
DA:38,0
DA:40,0
DA:44,0
DA:46,0
DA:56,0
DA:59,0
DA:60,0
LF:21
LH:0
BRDA:34,0,0,0
BRDA:34,0,1,0
BRDA:34,0,2,0
BRF:3
BRH:0
end_of_record
TN:
SF:src/providers/with-providers.tsx
FN:5,(anonymous_0)
FN:5,(anonymous_1)
FNF:2
FNH:0
FNDA:0,(anonymous_0)
FNDA:0,(anonymous_1)
DA:5,0
DA:6,0
DA:12,0
LF:3
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/button/button.tsx
FN:20,Button
FNF:1
FNH:1
FNDA:5,Button
DA:28,5
DA:30,5
DA:38,5
LF:3
LH:3
BRDA:23,0,0,3
BRDA:24,1,0,2
BRDA:25,2,0,5
BRF:3
BRH:3
end_of_record
TN:
SF:src/shared/ui/button-group/button-group.tsx
FN:12,ButtonGroup
FN:17,(anonymous_1)
FN:31,(anonymous_2)
FNF:3
FNH:0
FNDA:0,ButtonGroup
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
DA:13,0
DA:15,0
DA:18,0
DA:21,0
DA:22,0
DA:23,0
DA:24,0
DA:25,0
DA:28,0
DA:31,0
DA:34,0
LF:11
LH:0
BRDA:13,0,0,0
BRDA:18,1,0,0
BRDA:18,1,1,0
BRDA:22,2,0,0
BRDA:22,2,1,0
BRDA:24,3,0,0
BRDA:24,3,1,0
BRDA:29,4,0,0
BRDA:29,4,1,0
BRF:9
BRH:0
end_of_record
TN:
SF:src/shared/ui/form/label.tsx
FN:9,Label
FNF:1
FNH:1
FNDA:3,Label
DA:10,3
DA:12,3
LF:2
LH:2
BRDA:15,0,0,3
BRDA:15,0,1,0
BRF:2
BRH:1
end_of_record
TN:
SF:src/shared/ui/form/select.tsx
FN:10,Select
FN:18,(anonymous_1)
FNF:2
FNH:0
FNDA:0,Select
FNDA:0,(anonymous_1)
DA:11,0
DA:13,0
DA:19,0
LF:3
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/form/text-area.tsx
FN:5,(anonymous_0)
FNF:1
FNH:0
FNDA:0,(anonymous_0)
DA:5,0
DA:6,0
DA:7,0
DA:25,0
LF:4
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/form/text-input.tsx
FN:5,(anonymous_0)
FNF:1
FNH:1
FNDA:3,(anonymous_0)
DA:5,1
DA:14,3
DA:16,3
DA:33,1
LF:4
LH:4
BRDA:10,0,0,3
BRF:1
BRH:1
end_of_record
TN:
SF:src/shared/ui/header/Header.tsx
FN:6,Header
FNF:1
FNH:0
FNDA:0,Header
DA:7,0
DA:8,0
LF:2
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/typography/h1.tsx
FN:8,H1
FNF:1
FNH:0
FNDA:0,H1
DA:9,0
DA:10,0
LF:2
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/typography/h4.tsx
FN:8,H4
FNF:1
FNH:0
FNDA:0,H4
DA:9,0
DA:10,0
LF:2
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/typography/h5.tsx
FN:8,H5
FNF:1
FNH:0
FNDA:0,H5
DA:9,0
DA:10,0
LF:2
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/shared/ui/typography/text.tsx
FN:13,Text
FNF:1
FNH:0
FNDA:0,Text
DA:14,0
DA:15,0
DA:17,0
LF:3
LH:0
BRDA:14,0,0,0
BRDA:14,1,0,0
BRDA:15,2,0,0
BRDA:15,2,1,0
BRF:4
BRH:0
end_of_record
TN:
SF:src/types/trip.ts
FNF:0
FNH:0
LF:0
LH:0
BRF:0
BRH:0
end_of_record
TN:
SF:src/utils/utils.tsx
FN:3,(anonymous_0)
FN:11,(anonymous_1)
FN:15,(anonymous_2)
FNF:3
FNH:0
FNDA:0,(anonymous_0)
FNDA:0,(anonymous_1)
FNDA:0,(anonymous_2)
DA:3,0
DA:7,0
DA:9,0
DA:10,0
DA:12,0
DA:16,0
LF:6
LH:0
BRDA:7,0,0,0
BRDA:7,0,1,0
BRDA:12,1,0,0
BRDA:12,1,1,0
BRDA:12,1,2,0
BRDA:16,2,0,0
BRDA:16,2,1,0
BRF:7
BRH:0
end_of_record

```

# coverage/coverage-final.json

```json
{"/Users/vlad.legkovskii/Desktop/exoticca-test/src/index.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/index.tsx","statementMap":{"0":{"start":{"line":5,"column":18},"end":{"line":5,"column":48}},"1":{"start":{"line":6,"column":13},"end":{"line":6,"column":45}},"2":{"start":{"line":7,"column":0},"end":{"line":11,"column":2}}},"fnMap":{},"branchMap":{},"s":{"0":0,"1":0,"2":0},"f":{},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/style.module.css.d.ts": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/style.module.css.d.ts","statementMap":{},"fnMap":{},"branchMap":{},"s":{},"f":{},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/api/trips.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/api/trips.tsx","statementMap":{"0":{"start":{"line":3,"column":16},"end":{"line":3,"column":47}},"1":{"start":{"line":14,"column":2},"end":{"line":26,"column":3}},"2":{"start":{"line":15,"column":21},"end":{"line":15,"column":46}},"3":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"4":{"start":{"line":17,"column":6},"end":{"line":17,"column":64}},"5":{"start":{"line":19,"column":4},"end":{"line":19,"column":33}},"6":{"start":{"line":21,"column":4},"end":{"line":25,"column":6}},"7":{"start":{"line":30,"column":2},"end":{"line":30,"column":34}},"8":{"start":{"line":36,"column":2},"end":{"line":36,"column":43}},"9":{"start":{"line":40,"column":2},"end":{"line":46,"column":5}},"10":{"start":{"line":50,"column":2},"end":{"line":56,"column":5}},"11":{"start":{"line":60,"column":2},"end":{"line":62,"column":5}}},"fnMap":{"0":{"name":"apiCall","decl":{"start":{"line":10,"column":15},"end":{"line":10,"column":22}},"loc":{"start":{"line":13,"column":27},"end":{"line":27,"column":1}},"line":13},"1":{"name":"getTrips","decl":{"start":{"line":29,"column":22},"end":{"line":29,"column":30}},"loc":{"start":{"line":29,"column":63},"end":{"line":31,"column":1}},"line":29},"2":{"name":"getTrip","decl":{"start":{"line":33,"column":22},"end":{"line":33,"column":29}},"loc":{"start":{"line":35,"column":30},"end":{"line":37,"column":1}},"line":35},"3":{"name":"createTrip","decl":{"start":{"line":39,"column":22},"end":{"line":39,"column":32}},"loc":{"start":{"line":39,"column":77},"end":{"line":47,"column":1}},"line":39},"4":{"name":"updateTrip","decl":{"start":{"line":49,"column":22},"end":{"line":49,"column":32}},"loc":{"start":{"line":49,"column":77},"end":{"line":57,"column":1}},"line":49},"5":{"name":"deleteTrip","decl":{"start":{"line":59,"column":22},"end":{"line":59,"column":32}},"loc":{"start":{"line":59,"column":73},"end":{"line":63,"column":1}},"line":59}},"branchMap":{"0":{"loc":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"type":"if","locations":[{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},{"start":{},"end":{}}],"line":16},"1":{"loc":{"start":{"line":24,"column":8},"end":{"line":24,"column":79}},"type":"cond-expr","locations":[{"start":{"line":24,"column":33},"end":{"line":24,"column":38}},{"start":{"line":24,"column":41},"end":{"line":24,"column":79}}],"line":24}},"s":{"0":1,"1":10,"2":10,"3":5,"4":0,"5":5,"6":5,"7":2,"8":2,"9":2,"10":2,"11":2},"f":{"0":10,"1":2,"2":2,"3":2,"4":2,"5":2},"b":{"0":[0,5],"1":[5,0]},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"06f910f30bfad252e80140a692defac52dd02cd9"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/app/app.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/app/app.tsx","statementMap":{"0":{"start":{"line":9,"column":15},"end":{"line":37,"column":2}},"1":{"start":{"line":14,"column":6},"end":{"line":14,"column":24}},"2":{"start":{"line":21,"column":10},"end":{"line":21,"column":36}},"3":{"start":{"line":32,"column":10},"end":{"line":32,"column":36}},"4":{"start":{"line":38,"column":23},"end":{"line":38,"column":78}},"5":{"start":{"line":38,"column":43},"end":{"line":38,"column":77}},"6":{"start":{"line":41,"column":2},"end":{"line":41,"column":21}}},"fnMap":{"0":{"name":"(anonymous_0)","decl":{"start":{"line":13,"column":12},"end":{"line":13,"column":13}},"loc":{"start":{"line":13,"column":24},"end":{"line":15,"column":5}},"line":13},"1":{"name":"(anonymous_1)","decl":{"start":{"line":20,"column":16},"end":{"line":20,"column":17}},"loc":{"start":{"line":20,"column":38},"end":{"line":22,"column":9}},"line":20},"2":{"name":"(anonymous_2)","decl":{"start":{"line":31,"column":16},"end":{"line":31,"column":17}},"loc":{"start":{"line":31,"column":38},"end":{"line":33,"column":9}},"line":31},"3":{"name":"(anonymous_3)","decl":{"start":{"line":38,"column":37},"end":{"line":38,"column":38}},"loc":{"start":{"line":38,"column":43},"end":{"line":38,"column":77}},"line":38},"4":{"name":"App","decl":{"start":{"line":40,"column":9},"end":{"line":40,"column":12}},"loc":{"start":{"line":40,"column":15},"end":{"line":42,"column":1}},"line":40}},"branchMap":{},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"f":{"0":0,"1":0,"2":0,"3":0,"4":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/card/card.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/card/card.tsx","statementMap":{"0":{"start":{"line":16,"column":60},"end":{"line":16,"column":65}},"1":{"start":{"line":18,"column":2},"end":{"line":43,"column":4}},"2":{"start":{"line":29,"column":48},"end":{"line":29,"column":70}},"3":{"start":{"line":33,"column":50},"end":{"line":33,"column":69}},"4":{"start":{"line":36,"column":57},"end":{"line":36,"column":78}}},"fnMap":{"0":{"name":"Card","decl":{"start":{"line":15,"column":16},"end":{"line":15,"column":20}},"loc":{"start":{"line":15,"column":39},"end":{"line":44,"column":1}},"line":15},"1":{"name":"(anonymous_1)","decl":{"start":{"line":29,"column":42},"end":{"line":29,"column":43}},"loc":{"start":{"line":29,"column":48},"end":{"line":29,"column":70}},"line":29},"2":{"name":"(anonymous_2)","decl":{"start":{"line":33,"column":44},"end":{"line":33,"column":45}},"loc":{"start":{"line":33,"column":50},"end":{"line":33,"column":69}},"line":33},"3":{"name":"(anonymous_3)","decl":{"start":{"line":36,"column":51},"end":{"line":36,"column":52}},"loc":{"start":{"line":36,"column":57},"end":{"line":36,"column":78}},"line":36}},"branchMap":{},"s":{"0":0,"1":0,"2":0,"3":0,"4":0},"f":{"0":0,"1":0,"2":0,"3":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/header/header.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/header/header.tsx","statementMap":{"0":{"start":{"line":10,"column":30},"end":{"line":10,"column":35}},"1":{"start":{"line":12,"column":2},"end":{"line":21,"column":4}}},"fnMap":{"0":{"name":"Header","decl":{"start":{"line":9,"column":16},"end":{"line":9,"column":22}},"loc":{"start":{"line":9,"column":43},"end":{"line":22,"column":1}},"line":9}},"branchMap":{},"s":{"0":0,"1":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/modal/modal.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/modal/modal.tsx","statementMap":{"0":{"start":{"line":13,"column":40},"end":{"line":13,"column":45}},"1":{"start":{"line":14,"column":19},"end":{"line":14,"column":47}},"2":{"start":{"line":16,"column":2},"end":{"line":32,"column":24}},"3":{"start":{"line":17,"column":25},"end":{"line":21,"column":5}},"4":{"start":{"line":18,"column":6},"end":{"line":20,"column":7}},"5":{"start":{"line":19,"column":8},"end":{"line":19,"column":18}},"6":{"start":{"line":23,"column":4},"end":{"line":26,"column":5}},"7":{"start":{"line":24,"column":6},"end":{"line":24,"column":57}},"8":{"start":{"line":25,"column":6},"end":{"line":25,"column":46}},"9":{"start":{"line":28,"column":4},"end":{"line":31,"column":6}},"10":{"start":{"line":29,"column":6},"end":{"line":29,"column":60}},"11":{"start":{"line":30,"column":6},"end":{"line":30,"column":45}},"12":{"start":{"line":34,"column":2},"end":{"line":38,"column":15}},"13":{"start":{"line":35,"column":4},"end":{"line":37,"column":5}},"14":{"start":{"line":36,"column":6},"end":{"line":36,"column":31}},"15":{"start":{"line":40,"column":2},"end":{"line":40,"column":27}},"16":{"start":{"line":40,"column":15},"end":{"line":40,"column":27}},"17":{"start":{"line":42,"column":2},"end":{"line":63,"column":4}},"18":{"start":{"line":46,"column":24},"end":{"line":46,"column":43}}},"fnMap":{"0":{"name":"Modal","decl":{"start":{"line":12,"column":16},"end":{"line":12,"column":21}},"loc":{"start":{"line":12,"column":41},"end":{"line":64,"column":1}},"line":12},"1":{"name":"(anonymous_1)","decl":{"start":{"line":16,"column":12},"end":{"line":16,"column":13}},"loc":{"start":{"line":16,"column":18},"end":{"line":32,"column":3}},"line":16},"2":{"name":"(anonymous_2)","decl":{"start":{"line":17,"column":25},"end":{"line":17,"column":26}},"loc":{"start":{"line":17,"column":51},"end":{"line":21,"column":5}},"line":17},"3":{"name":"(anonymous_3)","decl":{"start":{"line":28,"column":11},"end":{"line":28,"column":12}},"loc":{"start":{"line":28,"column":17},"end":{"line":31,"column":5}},"line":28},"4":{"name":"(anonymous_4)","decl":{"start":{"line":34,"column":12},"end":{"line":34,"column":13}},"loc":{"start":{"line":34,"column":18},"end":{"line":38,"column":3}},"line":34},"5":{"name":"(anonymous_5)","decl":{"start":{"line":46,"column":17},"end":{"line":46,"column":18}},"loc":{"start":{"line":46,"column":24},"end":{"line":46,"column":43}},"line":46}},"branchMap":{"0":{"loc":{"start":{"line":18,"column":6},"end":{"line":20,"column":7}},"type":"if","locations":[{"start":{"line":18,"column":6},"end":{"line":20,"column":7}},{"start":{},"end":{}}],"line":18},"1":{"loc":{"start":{"line":23,"column":4},"end":{"line":26,"column":5}},"type":"if","locations":[{"start":{"line":23,"column":4},"end":{"line":26,"column":5}},{"start":{},"end":{}}],"line":23},"2":{"loc":{"start":{"line":35,"column":4},"end":{"line":37,"column":5}},"type":"if","locations":[{"start":{"line":35,"column":4},"end":{"line":37,"column":5}},{"start":{},"end":{}}],"line":35},"3":{"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":34}},"type":"binary-expr","locations":[{"start":{"line":35,"column":8},"end":{"line":35,"column":14}},{"start":{"line":35,"column":18},"end":{"line":35,"column":34}}],"line":35},"4":{"loc":{"start":{"line":40,"column":2},"end":{"line":40,"column":27}},"type":"if","locations":[{"start":{"line":40,"column":2},"end":{"line":40,"column":27}},{"start":{},"end":{}}],"line":40}},"s":{"0":3,"1":3,"2":3,"3":3,"4":1,"5":1,"6":3,"7":2,"8":2,"9":3,"10":3,"11":3,"12":3,"13":3,"14":2,"15":3,"16":1,"17":2,"18":0},"f":{"0":3,"1":3,"2":1,"3":3,"4":3,"5":0},"b":{"0":[1,0],"1":[2,1],"2":[2,1],"3":[3,2],"4":[1,2]},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"551686db7d65c69534d6fca3681b4703c2fdb1cb"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/search-bar/search-bar.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/search-bar/search-bar.tsx","statementMap":{"0":{"start":{"line":11,"column":37},"end":{"line":11,"column":46}},"1":{"start":{"line":13,"column":19},"end":{"line":15,"column":3}},"2":{"start":{"line":14,"column":4},"end":{"line":14,"column":30}},"3":{"start":{"line":17,"column":2},"end":{"line":30,"column":4}}},"fnMap":{"0":{"name":"SearchBar","decl":{"start":{"line":10,"column":16},"end":{"line":10,"column":25}},"loc":{"start":{"line":10,"column":55},"end":{"line":31,"column":1}},"line":10},"1":{"name":"(anonymous_1)","decl":{"start":{"line":13,"column":19},"end":{"line":13,"column":20}},"loc":{"start":{"line":13,"column":54},"end":{"line":15,"column":3}},"line":13}},"branchMap":{},"s":{"0":3,"1":3,"2":2,"3":3},"f":{"0":3,"1":2},"b":{},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"41be296df61079e8dceb2fbee97bf79da87258e0"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-form/trip-form.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-form/trip-form.tsx","statementMap":{"0":{"start":{"line":21,"column":19},"end":{"line":21,"column":32}},"1":{"start":{"line":22,"column":19},"end":{"line":22,"column":32}},"2":{"start":{"line":23,"column":17},"end":{"line":23,"column":28}},"3":{"start":{"line":24,"column":15},"end":{"line":24,"column":38}},"4":{"start":{"line":25,"column":40},"end":{"line":25,"column":61}},"5":{"start":{"line":26,"column":46},"end":{"line":35,"column":4}},"6":{"start":{"line":37,"column":21},"end":{"line":41,"column":3}},"7":{"start":{"line":38,"column":4},"end":{"line":38,"column":26}},"8":{"start":{"line":39,"column":4},"end":{"line":39,"column":18}},"9":{"start":{"line":40,"column":4},"end":{"line":40,"column":18}},"10":{"start":{"line":43,"column":2},"end":{"line":50,"column":26}},"11":{"start":{"line":44,"column":4},"end":{"line":49,"column":5}},"12":{"start":{"line":48,"column":6},"end":{"line":48,"column":27}},"13":{"start":{"line":52,"column":37},"end":{"line":55,"column":4}},"14":{"start":{"line":57,"column":23},"end":{"line":64,"column":3}},"15":{"start":{"line":58,"column":4},"end":{"line":63,"column":5}},"16":{"start":{"line":59,"column":6},"end":{"line":59,"column":50}},"17":{"start":{"line":60,"column":6},"end":{"line":60,"column":19}},"18":{"start":{"line":62,"column":6},"end":{"line":62,"column":46}},"19":{"start":{"line":66,"column":21},"end":{"line":73,"column":3}},"20":{"start":{"line":67,"column":4},"end":{"line":72,"column":5}},"21":{"start":{"line":68,"column":6},"end":{"line":68,"column":29}},"22":{"start":{"line":69,"column":6},"end":{"line":69,"column":19}},"23":{"start":{"line":71,"column":6},"end":{"line":71,"column":44}},"24":{"start":{"line":75,"column":2},"end":{"line":138,"column":4}},"25":{"start":{"line":100,"column":12},"end":{"line":123,"column":18}},"26":{"start":{"line":118,"column":31},"end":{"line":118,"column":44}},"27":{"start":{"line":128,"column":14},"end":{"line":128,"column":79}}},"fnMap":{"0":{"name":"TripForm","decl":{"start":{"line":20,"column":16},"end":{"line":20,"column":24}},"loc":{"start":{"line":20,"column":27},"end":{"line":139,"column":1}},"line":20},"1":{"name":"(anonymous_1)","decl":{"start":{"line":37,"column":21},"end":{"line":37,"column":22}},"loc":{"start":{"line":37,"column":27},"end":{"line":41,"column":3}},"line":37},"2":{"name":"(anonymous_2)","decl":{"start":{"line":43,"column":18},"end":{"line":43,"column":19}},"loc":{"start":{"line":43,"column":24},"end":{"line":50,"column":3}},"line":43},"3":{"name":"(anonymous_3)","decl":{"start":{"line":57,"column":23},"end":{"line":57,"column":24}},"loc":{"start":{"line":57,"column":45},"end":{"line":64,"column":3}},"line":57},"4":{"name":"(anonymous_4)","decl":{"start":{"line":66,"column":21},"end":{"line":66,"column":22}},"loc":{"start":{"line":66,"column":43},"end":{"line":73,"column":3}},"line":66},"5":{"name":"(anonymous_5)","decl":{"start":{"line":99,"column":22},"end":{"line":99,"column":23}},"loc":{"start":{"line":100,"column":12},"end":{"line":123,"column":18}},"line":100},"6":{"name":"(anonymous_6)","decl":{"start":{"line":118,"column":25},"end":{"line":118,"column":26}},"loc":{"start":{"line":118,"column":31},"end":{"line":118,"column":44}},"line":118},"7":{"name":"(anonymous_7)","decl":{"start":{"line":127,"column":21},"end":{"line":127,"column":22}},"loc":{"start":{"line":128,"column":14},"end":{"line":128,"column":79}},"line":128}},"branchMap":{"0":{"loc":{"start":{"line":27,"column":19},"end":{"line":34,"column":5}},"type":"binary-expr","locations":[{"start":{"line":27,"column":19},"end":{"line":27,"column":23}},{"start":{"line":27,"column":27},"end":{"line":34,"column":5}}],"line":27},"1":{"loc":{"start":{"line":44,"column":4},"end":{"line":49,"column":5}},"type":"if","locations":[{"start":{"line":44,"column":4},"end":{"line":49,"column":5}},{"start":{},"end":{}}],"line":44},"2":{"loc":{"start":{"line":45,"column":6},"end":{"line":46,"column":53}},"type":"binary-expr","locations":[{"start":{"line":45,"column":6},"end":{"line":45,"column":42}},{"start":{"line":46,"column":6},"end":{"line":46,"column":53}}],"line":45},"3":{"loc":{"start":{"line":78,"column":31},"end":{"line":78,"column":63}},"type":"cond-expr","locations":[{"start":{"line":78,"column":38},"end":{"line":78,"column":48}},{"start":{"line":78,"column":51},"end":{"line":78,"column":63}}],"line":78},"4":{"loc":{"start":{"line":81,"column":13},"end":{"line":81,"column":67}},"type":"cond-expr","locations":[{"start":{"line":81,"column":20},"end":{"line":81,"column":51}},{"start":{"line":81,"column":54},"end":{"line":81,"column":67}}],"line":81},"5":{"loc":{"start":{"line":135,"column":31},"end":{"line":135,"column":65}},"type":"cond-expr","locations":[{"start":{"line":135,"column":38},"end":{"line":135,"column":49}},{"start":{"line":135,"column":52},"end":{"line":135,"column":65}}],"line":135}},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"f":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-view/trip-view.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-view/trip-view.tsx","statementMap":{"0":{"start":{"line":10,"column":15},"end":{"line":10,"column":30}},"1":{"start":{"line":11,"column":19},"end":{"line":11,"column":32}},"2":{"start":{"line":12,"column":17},"end":{"line":12,"column":28}},"3":{"start":{"line":13,"column":40},"end":{"line":13,"column":61}},"4":{"start":{"line":15,"column":21},"end":{"line":18,"column":3}},"5":{"start":{"line":16,"column":4},"end":{"line":16,"column":26}},"6":{"start":{"line":17,"column":4},"end":{"line":17,"column":18}},"7":{"start":{"line":20,"column":2},"end":{"line":24,"column":18}},"8":{"start":{"line":21,"column":4},"end":{"line":23,"column":5}},"9":{"start":{"line":22,"column":6},"end":{"line":22,"column":27}},"10":{"start":{"line":26,"column":2},"end":{"line":52,"column":4}},"11":{"start":{"line":42,"column":12},"end":{"line":47,"column":17}}},"fnMap":{"0":{"name":"TripView","decl":{"start":{"line":9,"column":16},"end":{"line":9,"column":24}},"loc":{"start":{"line":9,"column":27},"end":{"line":53,"column":1}},"line":9},"1":{"name":"(anonymous_1)","decl":{"start":{"line":15,"column":21},"end":{"line":15,"column":22}},"loc":{"start":{"line":15,"column":27},"end":{"line":18,"column":3}},"line":15},"2":{"name":"(anonymous_2)","decl":{"start":{"line":20,"column":18},"end":{"line":20,"column":19}},"loc":{"start":{"line":20,"column":24},"end":{"line":24,"column":3}},"line":20},"3":{"name":"(anonymous_3)","decl":{"start":{"line":41,"column":30},"end":{"line":41,"column":31}},"loc":{"start":{"line":42,"column":12},"end":{"line":47,"column":17}},"line":42}},"branchMap":{"0":{"loc":{"start":{"line":21,"column":4},"end":{"line":23,"column":5}},"type":"if","locations":[{"start":{"line":21,"column":4},"end":{"line":23,"column":5}},{"start":{},"end":{}}],"line":21},"1":{"loc":{"start":{"line":31,"column":9},"end":{"line":35,"column":9}},"type":"binary-expr","locations":[{"start":{"line":31,"column":9},"end":{"line":31,"column":31}},{"start":{"line":32,"column":10},"end":{"line":34,"column":19}}],"line":31}},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"f":{"0":0,"1":0,"2":0,"3":0},"b":{"0":[0,0],"1":[0,0]}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/pages/home.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/pages/home.tsx","statementMap":{"0":{"start":{"line":16,"column":19},"end":{"line":16,"column":32}},"1":{"start":{"line":17,"column":16},"end":{"line":17,"column":39}},"2":{"start":{"line":18,"column":40},"end":{"line":18,"column":60}},"3":{"start":{"line":19,"column":30},"end":{"line":19,"column":74}},"4":{"start":{"line":21,"column":23},"end":{"line":28,"column":3}},"5":{"start":{"line":22,"column":4},"end":{"line":27,"column":5}},"6":{"start":{"line":23,"column":6},"end":{"line":23,"column":31}},"7":{"start":{"line":24,"column":6},"end":{"line":24,"column":20}},"8":{"start":{"line":26,"column":6},"end":{"line":26,"column":27}},"9":{"start":{"line":30,"column":24},"end":{"line":42,"column":34}},"10":{"start":{"line":31,"column":21},"end":{"line":31,"column":41}},"11":{"start":{"line":32,"column":27},"end":{"line":32,"column":61}},"12":{"start":{"line":34,"column":4},"end":{"line":41,"column":5}},"13":{"start":{"line":36,"column":8},"end":{"line":36,"column":65}},"14":{"start":{"line":36,"column":44},"end":{"line":36,"column":63}},"15":{"start":{"line":38,"column":8},"end":{"line":38,"column":65}},"16":{"start":{"line":38,"column":44},"end":{"line":38,"column":63}},"17":{"start":{"line":40,"column":8},"end":{"line":40,"column":30}},"18":{"start":{"line":44,"column":2},"end":{"line":66,"column":4}},"19":{"start":{"line":46,"column":37},"end":{"line":46,"column":61}},"20":{"start":{"line":56,"column":8},"end":{"line":62,"column":10}},"21":{"start":{"line":59,"column":37},"end":{"line":59,"column":64}},"22":{"start":{"line":60,"column":34},"end":{"line":60,"column":66}}},"fnMap":{"0":{"name":"Home","decl":{"start":{"line":15,"column":9},"end":{"line":15,"column":13}},"loc":{"start":{"line":15,"column":16},"end":{"line":67,"column":1}},"line":15},"1":{"name":"(anonymous_1)","decl":{"start":{"line":21,"column":23},"end":{"line":21,"column":24}},"loc":{"start":{"line":21,"column":53},"end":{"line":28,"column":3}},"line":21},"2":{"name":"(anonymous_2)","decl":{"start":{"line":30,"column":32},"end":{"line":30,"column":33}},"loc":{"start":{"line":30,"column":38},"end":{"line":42,"column":3}},"line":30},"3":{"name":"(anonymous_3)","decl":{"start":{"line":36,"column":37},"end":{"line":36,"column":38}},"loc":{"start":{"line":36,"column":44},"end":{"line":36,"column":63}},"line":36},"4":{"name":"(anonymous_4)","decl":{"start":{"line":38,"column":37},"end":{"line":38,"column":38}},"loc":{"start":{"line":38,"column":44},"end":{"line":38,"column":63}},"line":38},"5":{"name":"(anonymous_5)","decl":{"start":{"line":46,"column":31},"end":{"line":46,"column":32}},"loc":{"start":{"line":46,"column":37},"end":{"line":46,"column":61}},"line":46},"6":{"name":"(anonymous_6)","decl":{"start":{"line":55,"column":25},"end":{"line":55,"column":26}},"loc":{"start":{"line":56,"column":8},"end":{"line":62,"column":10}},"line":56},"7":{"name":"(anonymous_7)","decl":{"start":{"line":59,"column":25},"end":{"line":59,"column":26}},"loc":{"start":{"line":59,"column":37},"end":{"line":59,"column":64}},"line":59},"8":{"name":"(anonymous_8)","decl":{"start":{"line":60,"column":22},"end":{"line":60,"column":23}},"loc":{"start":{"line":60,"column":34},"end":{"line":60,"column":66}},"line":60}},"branchMap":{"0":{"loc":{"start":{"line":34,"column":4},"end":{"line":41,"column":5}},"type":"switch","locations":[{"start":{"line":35,"column":6},"end":{"line":36,"column":65}},{"start":{"line":37,"column":6},"end":{"line":38,"column":65}},{"start":{"line":39,"column":6},"end":{"line":40,"column":30}}],"line":34}},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"f":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"0":[0,0,0]}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/providers/with-providers.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/providers/with-providers.tsx","statementMap":{"0":{"start":{"line":5,"column":18},"end":{"line":11,"column":1}},"1":{"start":{"line":5,"column":56},"end":{"line":11,"column":1}},"2":{"start":{"line":6,"column":2},"end":{"line":10,"column":4}},"3":{"start":{"line":12,"column":29},"end":{"line":12,"column":47}}},"fnMap":{"0":{"name":"(anonymous_0)","decl":{"start":{"line":5,"column":18},"end":{"line":5,"column":19}},"loc":{"start":{"line":5,"column":56},"end":{"line":11,"column":1}},"line":5},"1":{"name":"(anonymous_1)","decl":{"start":{"line":5,"column":56},"end":{"line":5,"column":57}},"loc":{"start":{"line":5,"column":62},"end":{"line":11,"column":1}},"line":5}},"branchMap":{},"s":{"0":0,"1":0,"2":0,"3":0},"f":{"0":0,"1":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button/button.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button/button.tsx","statementMap":{"0":{"start":{"line":28,"column":6},"end":{"line":28,"column":11}},"1":{"start":{"line":30,"column":30},"end":{"line":36,"column":3}},"2":{"start":{"line":38,"column":2},"end":{"line":42,"column":4}}},"fnMap":{"0":{"name":"Button","decl":{"start":{"line":20,"column":16},"end":{"line":20,"column":22}},"loc":{"start":{"line":20,"column":43},"end":{"line":43,"column":1}},"line":20}},"branchMap":{"0":{"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":23}},"type":"default-arg","locations":[{"start":{"line":23,"column":14},"end":{"line":23,"column":23}}],"line":23},"1":{"loc":{"start":{"line":24,"column":4},"end":{"line":24,"column":20}},"type":"default-arg","locations":[{"start":{"line":24,"column":11},"end":{"line":24,"column":20}}],"line":24},"2":{"loc":{"start":{"line":25,"column":4},"end":{"line":25,"column":18}},"type":"default-arg","locations":[{"start":{"line":25,"column":16},"end":{"line":25,"column":18}}],"line":25}},"s":{"0":5,"1":5,"2":5},"f":{"0":5},"b":{"0":[3],"1":[2],"2":[5]},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"d72196f4197fa8c28e5a5ddfbd8f74ae45917aad"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button-group/button-group.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button-group/button-group.tsx","statementMap":{"0":{"start":{"line":13,"column":55},"end":{"line":13,"column":60}},"1":{"start":{"line":15,"column":2},"end":{"line":37,"column":4}},"2":{"start":{"line":18,"column":8},"end":{"line":33,"column":9}},"3":{"start":{"line":21,"column":30},"end":{"line":21,"column":32}},"4":{"start":{"line":22,"column":10},"end":{"line":26,"column":11}},"5":{"start":{"line":23,"column":12},"end":{"line":23,"column":41}},"6":{"start":{"line":24,"column":17},"end":{"line":26,"column":11}},"7":{"start":{"line":25,"column":12},"end":{"line":25,"column":40}},"8":{"start":{"line":28,"column":10},"end":{"line":32,"column":13}},"9":{"start":{"line":31,"column":27},"end":{"line":31,"column":41}},"10":{"start":{"line":34,"column":8},"end":{"line":34,"column":21}}},"fnMap":{"0":{"name":"ButtonGroup","decl":{"start":{"line":12,"column":16},"end":{"line":12,"column":27}},"loc":{"start":{"line":12,"column":53},"end":{"line":38,"column":1}},"line":12},"1":{"name":"(anonymous_1)","decl":{"start":{"line":17,"column":36},"end":{"line":17,"column":37}},"loc":{"start":{"line":17,"column":54},"end":{"line":35,"column":7}},"line":17},"2":{"name":"(anonymous_2)","decl":{"start":{"line":31,"column":21},"end":{"line":31,"column":22}},"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":41}},"line":31}},"branchMap":{"0":{"loc":{"start":{"line":13,"column":20},"end":{"line":13,"column":34}},"type":"default-arg","locations":[{"start":{"line":13,"column":32},"end":{"line":13,"column":34}}],"line":13},"1":{"loc":{"start":{"line":18,"column":8},"end":{"line":33,"column":9}},"type":"if","locations":[{"start":{"line":18,"column":8},"end":{"line":33,"column":9}},{"start":{},"end":{}}],"line":18},"2":{"loc":{"start":{"line":22,"column":10},"end":{"line":26,"column":11}},"type":"if","locations":[{"start":{"line":22,"column":10},"end":{"line":26,"column":11}},{"start":{"line":24,"column":17},"end":{"line":26,"column":11}}],"line":22},"3":{"loc":{"start":{"line":24,"column":17},"end":{"line":26,"column":11}},"type":"if","locations":[{"start":{"line":24,"column":17},"end":{"line":26,"column":11}},{"start":{},"end":{}}],"line":24},"4":{"loc":{"start":{"line":29,"column":26},"end":{"line":29,"column":53}},"type":"binary-expr","locations":[{"start":{"line":29,"column":26},"end":{"line":29,"column":47}},{"start":{"line":29,"column":51},"end":{"line":29,"column":53}}],"line":29}},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"f":{"0":0,"1":0,"2":0},"b":{"0":[0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/label.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/label.tsx","statementMap":{"0":{"start":{"line":10,"column":58},"end":{"line":10,"column":63}},"1":{"start":{"line":12,"column":2},"end":{"line":19,"column":4}}},"fnMap":{"0":{"name":"Label","decl":{"start":{"line":9,"column":16},"end":{"line":9,"column":21}},"loc":{"start":{"line":9,"column":41},"end":{"line":20,"column":1}},"line":9}},"branchMap":{"0":{"loc":{"start":{"line":15,"column":7},"end":{"line":17,"column":7}},"type":"binary-expr","locations":[{"start":{"line":15,"column":7},"end":{"line":15,"column":16}},{"start":{"line":16,"column":8},"end":{"line":16,"column":80}}],"line":15}},"s":{"0":3,"1":3},"f":{"0":3},"b":{"0":[3,0]},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"b7653dccde1d32c5a79976f9670fd7cde209ce69"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/select.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/select.tsx","statementMap":{"0":{"start":{"line":11,"column":39},"end":{"line":11,"column":44}},"1":{"start":{"line":13,"column":2},"end":{"line":26,"column":4}},"2":{"start":{"line":19,"column":12},"end":{"line":21,"column":21}}},"fnMap":{"0":{"name":"Select","decl":{"start":{"line":10,"column":16},"end":{"line":10,"column":22}},"loc":{"start":{"line":10,"column":43},"end":{"line":27,"column":1}},"line":10},"1":{"name":"(anonymous_1)","decl":{"start":{"line":18,"column":30},"end":{"line":18,"column":31}},"loc":{"start":{"line":19,"column":12},"end":{"line":21,"column":21}},"line":19}},"branchMap":{},"s":{"0":0,"1":0,"2":0},"f":{"0":0,"1":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-area.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-area.tsx","statementMap":{"0":{"start":{"line":5,"column":24},"end":{"line":23,"column":2}},"1":{"start":{"line":6,"column":62},"end":{"line":6,"column":67}},"2":{"start":{"line":7,"column":2},"end":{"line":22,"column":4}},"3":{"start":{"line":25,"column":0},"end":{"line":25,"column":34}}},"fnMap":{"0":{"name":"(anonymous_0)","decl":{"start":{"line":5,"column":35},"end":{"line":5,"column":36}},"loc":{"start":{"line":5,"column":51},"end":{"line":23,"column":1}},"line":5}},"branchMap":{},"s":{"0":0,"1":0,"2":0,"3":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-input.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-input.tsx","statementMap":{"0":{"start":{"line":5,"column":25},"end":{"line":31,"column":2}},"1":{"start":{"line":14,"column":6},"end":{"line":14,"column":11}},"2":{"start":{"line":16,"column":2},"end":{"line":30,"column":4}},"3":{"start":{"line":33,"column":0},"end":{"line":33,"column":36}}},"fnMap":{"0":{"name":"(anonymous_0)","decl":{"start":{"line":5,"column":36},"end":{"line":5,"column":37}},"loc":{"start":{"line":5,"column":52},"end":{"line":31,"column":1}},"line":5}},"branchMap":{"0":{"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":17}},"type":"default-arg","locations":[{"start":{"line":10,"column":11},"end":{"line":10,"column":17}}],"line":10}},"s":{"0":1,"1":3,"2":3,"3":1},"f":{"0":3},"b":{"0":[3]},"_coverageSchema":"1a1c01bbd47fc00a2c39e90264f33305004495a9","hash":"5c7e30b28e5654f99ae08e304af0ebbf0e978d11"}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/header/Header.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/header/Header.tsx","statementMap":{"0":{"start":{"line":7,"column":23},"end":{"line":7,"column":28}},"1":{"start":{"line":8,"column":2},"end":{"line":8,"column":63}}},"fnMap":{"0":{"name":"Header","decl":{"start":{"line":6,"column":16},"end":{"line":6,"column":22}},"loc":{"start":{"line":6,"column":43},"end":{"line":9,"column":1}},"line":6}},"branchMap":{},"s":{"0":0,"1":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h1.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h1.tsx","statementMap":{"0":{"start":{"line":9,"column":23},"end":{"line":9,"column":28}},"1":{"start":{"line":10,"column":2},"end":{"line":10,"column":51}}},"fnMap":{"0":{"name":"H1","decl":{"start":{"line":8,"column":9},"end":{"line":8,"column":11}},"loc":{"start":{"line":8,"column":28},"end":{"line":11,"column":1}},"line":8}},"branchMap":{},"s":{"0":0,"1":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h4.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h4.tsx","statementMap":{"0":{"start":{"line":9,"column":23},"end":{"line":9,"column":28}},"1":{"start":{"line":10,"column":2},"end":{"line":10,"column":51}}},"fnMap":{"0":{"name":"H4","decl":{"start":{"line":8,"column":9},"end":{"line":8,"column":11}},"loc":{"start":{"line":8,"column":29},"end":{"line":11,"column":1}},"line":8}},"branchMap":{},"s":{"0":0,"1":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h5.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h5.tsx","statementMap":{"0":{"start":{"line":9,"column":23},"end":{"line":9,"column":28}},"1":{"start":{"line":10,"column":2},"end":{"line":10,"column":51}}},"fnMap":{"0":{"name":"H5","decl":{"start":{"line":8,"column":9},"end":{"line":8,"column":11}},"loc":{"start":{"line":8,"column":28},"end":{"line":11,"column":1}},"line":8}},"branchMap":{},"s":{"0":0,"1":0},"f":{"0":0},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/text.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/text.tsx","statementMap":{"0":{"start":{"line":14,"column":59},"end":{"line":14,"column":64}},"1":{"start":{"line":15,"column":20},"end":{"line":15,"column":72}},"2":{"start":{"line":17,"column":2},"end":{"line":17,"column":79}}},"fnMap":{"0":{"name":"Text","decl":{"start":{"line":13,"column":16},"end":{"line":13,"column":20}},"loc":{"start":{"line":13,"column":39},"end":{"line":18,"column":1}},"line":13}},"branchMap":{"0":{"loc":{"start":{"line":14,"column":20},"end":{"line":14,"column":38}},"type":"default-arg","locations":[{"start":{"line":14,"column":30},"end":{"line":14,"column":38}}],"line":14},"1":{"loc":{"start":{"line":14,"column":40},"end":{"line":14,"column":54}},"type":"default-arg","locations":[{"start":{"line":14,"column":52},"end":{"line":14,"column":54}}],"line":14},"2":{"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":72}},"type":"cond-expr","locations":[{"start":{"line":15,"column":43},"end":{"line":15,"column":56}},{"start":{"line":15,"column":59},"end":{"line":15,"column":72}}],"line":15}},"s":{"0":0,"1":0,"2":0},"f":{"0":0},"b":{"0":[0],"1":[0],"2":[0,0]}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/types/trip.ts": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/types/trip.ts","statementMap":{},"fnMap":{},"branchMap":{},"s":{},"f":{},"b":{}}
,"/Users/vlad.legkovskii/Desktop/exoticca-test/src/utils/utils.tsx": {"path":"/Users/vlad.legkovskii/Desktop/exoticca-test/src/utils/utils.tsx","statementMap":{"0":{"start":{"line":3,"column":27},"end":{"line":20,"column":1}},"1":{"start":{"line":7,"column":2},"end":{"line":7,"column":28}},"2":{"start":{"line":7,"column":15},"end":{"line":7,"column":28}},"3":{"start":{"line":9,"column":27},"end":{"line":9,"column":47}},"4":{"start":{"line":10,"column":2},"end":{"line":19,"column":4}},"5":{"start":{"line":12,"column":6},"end":{"line":18,"column":7}},"6":{"start":{"line":16,"column":10},"end":{"line":17,"column":67}}},"fnMap":{"0":{"name":"(anonymous_0)","decl":{"start":{"line":3,"column":27},"end":{"line":3,"column":28}},"loc":{"start":{"line":6,"column":13},"end":{"line":20,"column":1}},"line":6},"1":{"name":"(anonymous_1)","decl":{"start":{"line":11,"column":4},"end":{"line":11,"column":5}},"loc":{"start":{"line":12,"column":6},"end":{"line":18,"column":7}},"line":12},"2":{"name":"(anonymous_2)","decl":{"start":{"line":15,"column":8},"end":{"line":15,"column":9}},"loc":{"start":{"line":16,"column":10},"end":{"line":17,"column":67}},"line":16}},"branchMap":{"0":{"loc":{"start":{"line":7,"column":2},"end":{"line":7,"column":28}},"type":"if","locations":[{"start":{"line":7,"column":2},"end":{"line":7,"column":28}},{"start":{},"end":{}}],"line":7},"1":{"loc":{"start":{"line":12,"column":6},"end":{"line":18,"column":7}},"type":"binary-expr","locations":[{"start":{"line":12,"column":6},"end":{"line":12,"column":57}},{"start":{"line":13,"column":6},"end":{"line":13,"column":63}},{"start":{"line":14,"column":6},"end":{"line":18,"column":7}}],"line":12},"2":{"loc":{"start":{"line":16,"column":10},"end":{"line":17,"column":67}},"type":"binary-expr","locations":[{"start":{"line":16,"column":10},"end":{"line":16,"column":64}},{"start":{"line":17,"column":10},"end":{"line":17,"column":67}}],"line":16}},"s":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"f":{"0":0,"1":0,"2":0},"b":{"0":[0,0],"1":[0,0,0],"2":[0,0]}}
}

```

# coverage/clover.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<coverage generated="1721911200193" clover="3.2.0">
  <project timestamp="1721911200193" name="All files">
    <metrics statements="158" coveredstatements="41" conditionals="59" coveredconditionals="16" methods="64" coveredmethods="16" elements="281" coveredelements="73" complexity="0" loc="158" ncloc="158" packages="18" files="25" classes="25"/>
    <package name="src">
      <metrics statements="3" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
      <file name="index.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/index.tsx">
        <metrics statements="3" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
        <line num="5" count="0" type="stmt"/>
        <line num="6" count="0" type="stmt"/>
        <line num="7" count="0" type="stmt"/>
      </file>
      <file name="style.module.css.d.ts" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/style.module.css.d.ts">
        <metrics statements="0" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
      </file>
    </package>
    <package name="src.api">
      <metrics statements="12" coveredstatements="11" conditionals="4" coveredconditionals="2" methods="6" coveredmethods="6"/>
      <file name="trips.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/api/trips.tsx">
        <metrics statements="12" coveredstatements="11" conditionals="4" coveredconditionals="2" methods="6" coveredmethods="6"/>
        <line num="3" count="1" type="stmt"/>
        <line num="14" count="10" type="stmt"/>
        <line num="15" count="10" type="stmt"/>
        <line num="16" count="5" type="cond" truecount="1" falsecount="1"/>
        <line num="17" count="0" type="stmt"/>
        <line num="19" count="5" type="stmt"/>
        <line num="21" count="5" type="stmt"/>
        <line num="30" count="2" type="stmt"/>
        <line num="36" count="2" type="stmt"/>
        <line num="40" count="2" type="stmt"/>
        <line num="50" count="2" type="stmt"/>
        <line num="60" count="2" type="stmt"/>
      </file>
    </package>
    <package name="src.app">
      <metrics statements="6" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="5" coveredmethods="0"/>
      <file name="app.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/app/app.tsx">
        <metrics statements="6" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="5" coveredmethods="0"/>
        <line num="9" count="0" type="stmt"/>
        <line num="14" count="0" type="stmt"/>
        <line num="21" count="0" type="stmt"/>
        <line num="32" count="0" type="stmt"/>
        <line num="38" count="0" type="stmt"/>
        <line num="41" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.card">
      <metrics statements="5" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="4" coveredmethods="0"/>
      <file name="card.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/card/card.tsx">
        <metrics statements="5" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="4" coveredmethods="0"/>
        <line num="16" count="0" type="stmt"/>
        <line num="18" count="0" type="stmt"/>
        <line num="29" count="0" type="stmt"/>
        <line num="33" count="0" type="stmt"/>
        <line num="36" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.header">
      <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
      <file name="header.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/header/header.tsx">
        <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="10" count="0" type="stmt"/>
        <line num="12" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.modal">
      <metrics statements="18" coveredstatements="17" conditionals="10" coveredconditionals="9" methods="6" coveredmethods="5"/>
      <file name="modal.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/modal/modal.tsx">
        <metrics statements="18" coveredstatements="17" conditionals="10" coveredconditionals="9" methods="6" coveredmethods="5"/>
        <line num="13" count="3" type="stmt"/>
        <line num="14" count="3" type="stmt"/>
        <line num="16" count="3" type="stmt"/>
        <line num="17" count="3" type="stmt"/>
        <line num="18" count="1" type="cond" truecount="1" falsecount="1"/>
        <line num="19" count="1" type="stmt"/>
        <line num="23" count="3" type="cond" truecount="2" falsecount="0"/>
        <line num="24" count="2" type="stmt"/>
        <line num="25" count="2" type="stmt"/>
        <line num="28" count="3" type="stmt"/>
        <line num="29" count="3" type="stmt"/>
        <line num="30" count="3" type="stmt"/>
        <line num="34" count="3" type="stmt"/>
        <line num="35" count="3" type="cond" truecount="4" falsecount="0"/>
        <line num="36" count="2" type="stmt"/>
        <line num="40" count="3" type="cond" truecount="2" falsecount="0"/>
        <line num="42" count="2" type="stmt"/>
        <line num="46" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.search-bar">
      <metrics statements="4" coveredstatements="4" conditionals="0" coveredconditionals="0" methods="2" coveredmethods="2"/>
      <file name="search-bar.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/search-bar/search-bar.tsx">
        <metrics statements="4" coveredstatements="4" conditionals="0" coveredconditionals="0" methods="2" coveredmethods="2"/>
        <line num="11" count="3" type="stmt"/>
        <line num="13" count="3" type="stmt"/>
        <line num="14" count="2" type="stmt"/>
        <line num="17" count="3" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.trip-form">
      <metrics statements="28" coveredstatements="0" conditionals="12" coveredconditionals="0" methods="8" coveredmethods="0"/>
      <file name="trip-form.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-form/trip-form.tsx">
        <metrics statements="28" coveredstatements="0" conditionals="12" coveredconditionals="0" methods="8" coveredmethods="0"/>
        <line num="21" count="0" type="stmt"/>
        <line num="22" count="0" type="stmt"/>
        <line num="23" count="0" type="stmt"/>
        <line num="24" count="0" type="stmt"/>
        <line num="25" count="0" type="stmt"/>
        <line num="26" count="0" type="stmt"/>
        <line num="37" count="0" type="stmt"/>
        <line num="38" count="0" type="stmt"/>
        <line num="39" count="0" type="stmt"/>
        <line num="40" count="0" type="stmt"/>
        <line num="43" count="0" type="stmt"/>
        <line num="44" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="48" count="0" type="stmt"/>
        <line num="52" count="0" type="stmt"/>
        <line num="57" count="0" type="stmt"/>
        <line num="58" count="0" type="stmt"/>
        <line num="59" count="0" type="stmt"/>
        <line num="60" count="0" type="stmt"/>
        <line num="62" count="0" type="stmt"/>
        <line num="66" count="0" type="stmt"/>
        <line num="67" count="0" type="stmt"/>
        <line num="68" count="0" type="stmt"/>
        <line num="69" count="0" type="stmt"/>
        <line num="71" count="0" type="stmt"/>
        <line num="75" count="0" type="stmt"/>
        <line num="100" count="0" type="stmt"/>
        <line num="118" count="0" type="stmt"/>
        <line num="128" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.enteties.trip-view">
      <metrics statements="12" coveredstatements="0" conditionals="4" coveredconditionals="0" methods="4" coveredmethods="0"/>
      <file name="trip-view.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/enteties/trip-view/trip-view.tsx">
        <metrics statements="12" coveredstatements="0" conditionals="4" coveredconditionals="0" methods="4" coveredmethods="0"/>
        <line num="10" count="0" type="stmt"/>
        <line num="11" count="0" type="stmt"/>
        <line num="12" count="0" type="stmt"/>
        <line num="13" count="0" type="stmt"/>
        <line num="15" count="0" type="stmt"/>
        <line num="16" count="0" type="stmt"/>
        <line num="17" count="0" type="stmt"/>
        <line num="20" count="0" type="stmt"/>
        <line num="21" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="22" count="0" type="stmt"/>
        <line num="26" count="0" type="stmt"/>
        <line num="42" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.pages">
      <metrics statements="21" coveredstatements="0" conditionals="3" coveredconditionals="0" methods="9" coveredmethods="0"/>
      <file name="home.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/pages/home.tsx">
        <metrics statements="21" coveredstatements="0" conditionals="3" coveredconditionals="0" methods="9" coveredmethods="0"/>
        <line num="16" count="0" type="stmt"/>
        <line num="17" count="0" type="stmt"/>
        <line num="18" count="0" type="stmt"/>
        <line num="19" count="0" type="stmt"/>
        <line num="21" count="0" type="stmt"/>
        <line num="22" count="0" type="stmt"/>
        <line num="23" count="0" type="stmt"/>
        <line num="24" count="0" type="stmt"/>
        <line num="26" count="0" type="stmt"/>
        <line num="30" count="0" type="stmt"/>
        <line num="31" count="0" type="stmt"/>
        <line num="32" count="0" type="stmt"/>
        <line num="34" count="0" type="cond" truecount="0" falsecount="3"/>
        <line num="36" count="0" type="stmt"/>
        <line num="38" count="0" type="stmt"/>
        <line num="40" count="0" type="stmt"/>
        <line num="44" count="0" type="stmt"/>
        <line num="46" count="0" type="stmt"/>
        <line num="56" count="0" type="stmt"/>
        <line num="59" count="0" type="stmt"/>
        <line num="60" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.providers">
      <metrics statements="3" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="2" coveredmethods="0"/>
      <file name="with-providers.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/providers/with-providers.tsx">
        <metrics statements="3" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="2" coveredmethods="0"/>
        <line num="5" count="0" type="stmt"/>
        <line num="6" count="0" type="stmt"/>
        <line num="12" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.shared.ui.button">
      <metrics statements="3" coveredstatements="3" conditionals="3" coveredconditionals="3" methods="1" coveredmethods="1"/>
      <file name="button.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button/button.tsx">
        <metrics statements="3" coveredstatements="3" conditionals="3" coveredconditionals="3" methods="1" coveredmethods="1"/>
        <line num="28" count="5" type="stmt"/>
        <line num="30" count="5" type="stmt"/>
        <line num="38" count="5" type="stmt"/>
      </file>
    </package>
    <package name="src.shared.ui.button-group">
      <metrics statements="11" coveredstatements="0" conditionals="9" coveredconditionals="0" methods="3" coveredmethods="0"/>
      <file name="button-group.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/button-group/button-group.tsx">
        <metrics statements="11" coveredstatements="0" conditionals="9" coveredconditionals="0" methods="3" coveredmethods="0"/>
        <line num="13" count="0" type="cond" truecount="0" falsecount="1"/>
        <line num="15" count="0" type="stmt"/>
        <line num="18" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="21" count="0" type="stmt"/>
        <line num="22" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="23" count="0" type="stmt"/>
        <line num="24" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="25" count="0" type="stmt"/>
        <line num="28" count="0" type="stmt"/>
        <line num="31" count="0" type="stmt"/>
        <line num="34" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.shared.ui.form">
      <metrics statements="13" coveredstatements="6" conditionals="3" coveredconditionals="2" methods="5" coveredmethods="2"/>
      <file name="label.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/label.tsx">
        <metrics statements="2" coveredstatements="2" conditionals="2" coveredconditionals="1" methods="1" coveredmethods="1"/>
        <line num="10" count="3" type="stmt"/>
        <line num="12" count="3" type="stmt"/>
      </file>
      <file name="select.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/select.tsx">
        <metrics statements="3" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="2" coveredmethods="0"/>
        <line num="11" count="0" type="stmt"/>
        <line num="13" count="0" type="stmt"/>
        <line num="19" count="0" type="stmt"/>
      </file>
      <file name="text-area.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-area.tsx">
        <metrics statements="4" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="5" count="0" type="stmt"/>
        <line num="6" count="0" type="stmt"/>
        <line num="7" count="0" type="stmt"/>
        <line num="25" count="0" type="stmt"/>
      </file>
      <file name="text-input.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/form/text-input.tsx">
        <metrics statements="4" coveredstatements="4" conditionals="1" coveredconditionals="1" methods="1" coveredmethods="1"/>
        <line num="5" count="1" type="stmt"/>
        <line num="14" count="3" type="stmt"/>
        <line num="16" count="3" type="stmt"/>
        <line num="33" count="1" type="stmt"/>
      </file>
    </package>
    <package name="src.shared.ui.header">
      <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
      <file name="Header.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/header/Header.tsx">
        <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="7" count="0" type="stmt"/>
        <line num="8" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.shared.ui.typography">
      <metrics statements="9" coveredstatements="0" conditionals="4" coveredconditionals="0" methods="4" coveredmethods="0"/>
      <file name="h1.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h1.tsx">
        <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="9" count="0" type="stmt"/>
        <line num="10" count="0" type="stmt"/>
      </file>
      <file name="h4.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h4.tsx">
        <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="9" count="0" type="stmt"/>
        <line num="10" count="0" type="stmt"/>
      </file>
      <file name="h5.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/h5.tsx">
        <metrics statements="2" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="9" count="0" type="stmt"/>
        <line num="10" count="0" type="stmt"/>
      </file>
      <file name="text.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/shared/ui/typography/text.tsx">
        <metrics statements="3" coveredstatements="0" conditionals="4" coveredconditionals="0" methods="1" coveredmethods="0"/>
        <line num="14" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="15" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="17" count="0" type="stmt"/>
      </file>
    </package>
    <package name="src.types">
      <metrics statements="0" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
      <file name="trip.ts" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/types/trip.ts">
        <metrics statements="0" coveredstatements="0" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
      </file>
    </package>
    <package name="src.utils">
      <metrics statements="6" coveredstatements="0" conditionals="7" coveredconditionals="0" methods="3" coveredmethods="0"/>
      <file name="utils.tsx" path="/Users/vlad.legkovskii/Desktop/exoticca-test/src/utils/utils.tsx">
        <metrics statements="6" coveredstatements="0" conditionals="7" coveredconditionals="0" methods="3" coveredmethods="0"/>
        <line num="3" count="0" type="stmt"/>
        <line num="7" count="0" type="cond" truecount="0" falsecount="2"/>
        <line num="9" count="0" type="stmt"/>
        <line num="10" count="0" type="stmt"/>
        <line num="12" count="0" type="cond" truecount="0" falsecount="3"/>
        <line num="16" count="0" type="cond" truecount="0" falsecount="2"/>
      </file>
    </package>
  </project>
</coverage>

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

# src/utils/utils.tsx

```tsx
import { Itinerary, Trip } from '../types/trip';

export const filterTrips = (
  trips: (string | Itinerary[] | 'todo' | 'done')[],
  search: string,
): Trip[] => {
  if (!search) return trips;

  const lowercasedSearch = search.toLowerCase();
  return trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(lowercasedSearch) ||
      trip.description.toLowerCase().includes(lowercasedSearch) ||
      trip.itinerary.some(
        (item) =>
          item.location.toLowerCase().includes(lowercasedSearch) ||
          item.description.toLowerCase().includes(lowercasedSearch),
      ),
  );
};

```

# src/types/trip.ts

```ts
export type Itinerary = {
  day: number;
  location: string;
  description: string;
};

export type Trip = {
  id: string;
  photo_url: string;
  title: string;
  status: 'todo' | 'done';
  description: string;
  itinerary: Itinerary[];
};

export enum TripFilters {
  All = 0,
  Upcoming = 1,
  Completed = 2,
}

```

# src/providers/with-providers.tsx

```tsx
import React, { Suspense } from 'react';
import compose from 'compose-function';
import { ErrorBoundary } from 'react-error-boundary';

const providers = (component: () => React.ReactNode) => () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>;
    </ErrorBoundary>
  );
};
export const withProviders = compose(providers);

```

# src/pages/home.tsx

```tsx
import React, { useMemo, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteTrip } from '../api/trips';
import { Card } from '../enteties/card/card';
import { Header } from '../enteties/header/header';
import { SearchBar } from '../enteties/search-bar/search-bar';
import { ButtonGroup } from '../shared/ui/button-group/button-group';
import { Button } from '../shared/ui/button/button';
import { H1 } from '../shared/ui/typography/h1';
import { H5 } from '../shared/ui/typography/h5';
import { TripFilters, Trip } from '../types/trip';
import { filterTrips } from '../utils/utils';
import styles from './home.module.css';

function Home() {
  const navigate = useNavigate();
  const trips = useLoaderData() as Trip;
  const [searchValue, setSearchValue] = useState<string>('');
  const [filter, setFilter] = React.useState<TripFilters>(TripFilters.All);

  const handleDelete = async (tripId: Trip['id']) => {
    try {
      await deleteTrip(tripId);
      navigate('.');
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTrips = useMemo(() => {
    const allTrips = Object.values(trips);
    const searchFiltered = filterTrips(allTrips, searchValue);

    switch (filter) {
      case TripFilters.Upcoming:
        return searchFiltered.filter((t) => t.status === 'todo');
      case TripFilters.Completed:
        return searchFiltered.filter((t) => t.status === 'done');
      default:
        return searchFiltered;
    }
  }, [searchValue, filter, trips]);

  return (
    <div className={styles.homePage}>
      <Header onCreateNewTrip={() => navigate(`/create-trip`)} />
      <H1>The places you dream of</H1>
      <H5>Let’s live new adventures</H5>
      <SearchBar onClick={setSearchValue} />
      <ButtonGroup value={filter} onClick={setFilter}>
        <Button>All</Button>
        <Button>Upcoming</Button>
        <Button>Completed</Button>
      </ButtonGroup>
      {filteredTrips.map((t) => (
        <Card
          key={t.id}
          trip={t}
          handleDetails={(tripId) => navigate(`/trip/${tripId}`)}
          handleEdit={(tripId) => navigate(`/edit-trip/${tripId}`)}
          handleDelete={handleDelete}
        />
      ))}
      <Outlet />
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
  gap: 1rem;
  max-width: 57.5rem;
  padding: 1.25rem;
}

```

# src/app/app.tsx

```tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getTrip, getTrips } from '../api/trips';
import { TripView } from '../enteties/trip-view/trip-view';
import { TripForm } from '../enteties/trip-form/trip-form';
import Home from '../pages/home';
import { withProviders } from '../providers/with-providers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      return getTrips();
    },
    children: [
      {
        path: 'trip/:id',
        element: <TripView />,
        loader: async ({ params }) => {
          return getTrip(params.id);
        },
      },
      {
        path: 'create-trip',
        element: <TripForm />,
      },
      {
        path: 'edit-trip/:id',
        element: <TripForm />,
        loader: async ({ params }) => {
          return getTrip(params.id);
        },
      },
    ],
  },
]);
export const Routing = withProviders(() => <RouterProvider router={router} />);

function App() {
  return <Routing />;
}

export { App };

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
        cy.contains(/the places you dream of/i).should('exist');
        cy.contains(/let’s live new adventures/i).should('exist');
      });
    });
  });
});

```

# src/api/trips.tsx

```tsx
import { Trip } from '../types/trip';

const API_URL = 'http://localhost:3000/travels';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

async function apiCall<T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error : new Error('An unknown error occurred'),
    };
  }
}

export async function getTrips(): Promise<ApiResponse<Trip[]>> {
  return apiCall<Trip[]>(API_URL);
}

export async function getTrip(
  id: string | undefined,
): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(`${API_URL}/${id}`);
}

export async function createTrip(tripData: Trip): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}

export async function updateTrip(tripData: Trip): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(`${API_URL}/${tripData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}

export async function deleteTrip(id: string): Promise<ApiResponse<void>> {
  return apiCall<void>(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}

```

# src/api/trips.test.tsx

```tsx
import { getTrips, getTrip, createTrip, updateTrip, deleteTrip } from './trips';
import { Trip, Itinerary } from '../types/trip';

global.fetch = jest.fn();

const mockItinerary: Itinerary[] = [
  {
    day: 1,
    location: 'Lisbon',
    description: 'Explore the Alfama neighborhood and visit São Jorge Castle.',
  },
  {
    day: 2,
    location: 'Lisbon',
    description:
      'Visit the Jerónimos Monastery and the Monument to the Discoveries.',
  },
];

const mockTrip: Trip = {
  id: '1',
  title: 'Portugala',
  description:
    'Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!',
  photo_url:
    'https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg',
  status: 'todo',
  itinerary: mockItinerary,
};

const mockTrips: Trip[] = [
  mockTrip,
  {
    id: '2',
    photo_url: 'https://example.com/london.jpg',
    title: 'London Excursion',
    status: 'done',
    description: 'Exploring the streets of London',
    itinerary: [
      {
        day: 1,
        location: 'London',
        description: 'Visit Big Ben and Westminster Abbey',
      },
      { day: 2, location: 'London', description: 'Explore the British Museum' },
    ],
  },
];

describe('API Functions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getTrips', () => {
    it('should fetch trips successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockTrips),
      });

      const result = await getTrips();

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels',
        undefined,
      );
      expect(result).toEqual(mockTrips);
    });

    it('should return an error when fetch fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await getTrips();

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('getTrip', () => {
    it('should fetch a single trip successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockTrip),
      });

      const result = await getTrip('1');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        undefined,
      );
      expect(result).toEqual(mockTrip);
    });

    it('should return an error when fetch fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await getTrip('1');

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('createTrip', () => {
    it('should create a trip successfully', async () => {
      const newTrip: Trip = {
        id: '1',
        title: 'Portugal',
        description:
          'Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!',
        photo_url:
          'https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg',
        status: 'todo',
        itinerary: mockItinerary,
      };
      const createdTrip: Trip = { ...newTrip, id: '3' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(createdTrip),
      });

      const result = await createTrip(newTrip);

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTrip),
        },
      );
      expect(result).toEqual(createdTrip);
    });

    it('should return an error when creation fails', async () => {
      const mockError = new Error('HTTP error! status: 400');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await createTrip(mockTrip);

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('updateTrip', () => {
    it('should update a trip successfully', async () => {
      const updatedTrip: Trip = {
        ...mockTrip,
        title: 'Updated Paris Adventure',
      };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(updatedTrip),
      });

      const result = await updateTrip(updatedTrip);

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTrip),
        },
      );
      expect(result).toEqual(updatedTrip);
    });

    it('should return an error when update fails', async () => {
      const mockError = new Error('HTTP error! status: 400');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await updateTrip(mockTrip);

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('deleteTrip', () => {
    it('should delete a trip successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });

      const result = await deleteTrip('1');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        {
          method: 'DELETE',
        },
      );
      expect(result).toEqual({});
    });

    it('should return an error when deletion fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await deleteTrip('1');

      expect(result).toEqual({ data: null, error: mockError });
    });
  });
});

```

# coverage/lcov-report/sorter.js

```js
/* eslint-disable */
var addSorting = (function() {
    'use strict';
    var cols,
        currentSort = {
            index: 0,
            desc: false
        };

    // returns the summary table element
    function getTable() {
        return document.querySelector('.coverage-summary');
    }
    // returns the thead element of the summary table
    function getTableHeader() {
        return getTable().querySelector('thead tr');
    }
    // returns the tbody element of the summary table
    function getTableBody() {
        return getTable().querySelector('tbody');
    }
    // returns the th element for nth column
    function getNthColumn(n) {
        return getTableHeader().querySelectorAll('th')[n];
    }

    function onFilterInput() {
        const searchValue = document.getElementById('fileSearch').value;
        const rows = document.getElementsByTagName('tbody')[0].children;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (
                row.textContent
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            ) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }

    // loads the search box
    function addSearchBox() {
        var template = document.getElementById('filterTemplate');
        var templateClone = template.content.cloneNode(true);
        templateClone.getElementById('fileSearch').oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
    }

    // loads all columns
    function loadColumns() {
        var colNodes = getTableHeader().querySelectorAll('th'),
            colNode,
            cols = [],
            col,
            i;

        for (i = 0; i < colNodes.length; i += 1) {
            colNode = colNodes[i];
            col = {
                key: colNode.getAttribute('data-col'),
                sortable: !colNode.getAttribute('data-nosort'),
                type: colNode.getAttribute('data-type') || 'string'
            };
            cols.push(col);
            if (col.sortable) {
                col.defaultDescSort = col.type === 'number';
                colNode.innerHTML =
                    colNode.innerHTML + '<span class="sorter"></span>';
            }
        }
        return cols;
    }
    // attaches a data attribute to every tr element with an object
    // of data values keyed by column name
    function loadRowData(tableRow) {
        var tableCols = tableRow.querySelectorAll('td'),
            colNode,
            col,
            data = {},
            i,
            val;
        for (i = 0; i < tableCols.length; i += 1) {
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute('data-value');
            if (col.type === 'number') {
                val = Number(val);
            }
            data[col.key] = val;
        }
        return data;
    }
    // loads all row data
    function loadData() {
        var rows = getTableBody().querySelectorAll('tr'),
            i;

        for (i = 0; i < rows.length; i += 1) {
            rows[i].data = loadRowData(rows[i]);
        }
    }
    // sorts the table using the data for the ith column
    function sortByIndex(index, desc) {
        var key = cols[index].key,
            sorter = function(a, b) {
                a = a.data[key];
                b = b.data[key];
                return a < b ? -1 : a > b ? 1 : 0;
            },
            finalSorter = sorter,
            tableBody = document.querySelector('.coverage-summary tbody'),
            rowNodes = tableBody.querySelectorAll('tr'),
            rows = [],
            i;

        if (desc) {
            finalSorter = function(a, b) {
                return -1 * sorter(a, b);
            };
        }

        for (i = 0; i < rowNodes.length; i += 1) {
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
        }

        rows.sort(finalSorter);

        for (i = 0; i < rows.length; i += 1) {
            tableBody.appendChild(rows[i]);
        }
    }
    // removes sort indicators for current column being sorted
    function removeSortIndicators() {
        var col = getNthColumn(currentSort.index),
            cls = col.className;

        cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
        col.className = cls;
    }
    // adds sort indicators for current column being sorted
    function addSortIndicators() {
        getNthColumn(currentSort.index).className += currentSort.desc
            ? ' sorted-desc'
            : ' sorted';
    }
    // adds event listeners for all sorter widgets
    function enableUI() {
        var i,
            el,
            ithSorter = function ithSorter(i) {
                var col = cols[i];

                return function() {
                    var desc = col.defaultDescSort;

                    if (currentSort.index === i) {
                        desc = !currentSort.desc;
                    }
                    sortByIndex(i, desc);
                    removeSortIndicators();
                    currentSort.index = i;
                    currentSort.desc = desc;
                    addSortIndicators();
                };
            };
        for (i = 0; i < cols.length; i += 1) {
            if (cols[i].sortable) {
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector('.sorter').parentElement;
                if (el.addEventListener) {
                    el.addEventListener('click', ithSorter(i));
                } else {
                    el.attachEvent('onclick', ithSorter(i));
                }
            }
        }
    }
    // adds sorting functionality to the UI
    return function() {
        if (!getTable()) {
            return;
        }
        cols = loadColumns();
        loadData();
        addSearchBox();
        addSortIndicators();
        enableUI();
    };
})();

window.addEventListener('load', addSorting);

```

# coverage/lcov-report/sort-arrow-sprite.png

This is a binary file of the type: Image

# coverage/lcov-report/prettify.js

```js
/* eslint-disable */
window.PR_SHOULD_USE_CONTINUATION=true;(function(){var h=["break,continue,do,else,for,if,return,while"];var u=[h,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];var p=[u,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"];var l=[p,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"];var x=[p,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"];var R=[x,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"];var r="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes";var w=[p,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"];var s="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END";var I=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"];var f=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"];var H=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"];var A=[l,R,w,s+I,f,H];var e=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/;var C="str";var z="kwd";var j="com";var O="typ";var G="lit";var L="pun";var F="pln";var m="tag";var E="dec";var J="src";var P="atn";var n="atv";var N="nocode";var M="(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function k(Z){var ad=0;var S=false;var ac=false;for(var V=0,U=Z.length;V<U;++V){var ae=Z[V];if(ae.ignoreCase){ac=true}else{if(/[a-z]/i.test(ae.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){S=true;ac=false;break}}}var Y={b:8,t:9,n:10,v:11,f:12,r:13};function ab(ah){var ag=ah.charCodeAt(0);if(ag!==92){return ag}var af=ah.charAt(1);ag=Y[af];if(ag){return ag}else{if("0"<=af&&af<="7"){return parseInt(ah.substring(1),8)}else{if(af==="u"||af==="x"){return parseInt(ah.substring(2),16)}else{return ah.charCodeAt(1)}}}}function T(af){if(af<32){return(af<16?"\\x0":"\\x")+af.toString(16)}var ag=String.fromCharCode(af);if(ag==="\\"||ag==="-"||ag==="["||ag==="]"){ag="\\"+ag}return ag}function X(am){var aq=am.substring(1,am.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));var ak=[];var af=[];var ao=aq[0]==="^";for(var ar=ao?1:0,aj=aq.length;ar<aj;++ar){var ah=aq[ar];if(/\\[bdsw]/i.test(ah)){ak.push(ah)}else{var ag=ab(ah);var al;if(ar+2<aj&&"-"===aq[ar+1]){al=ab(aq[ar+2]);ar+=2}else{al=ag}af.push([ag,al]);if(!(al<65||ag>122)){if(!(al<65||ag>90)){af.push([Math.max(65,ag)|32,Math.min(al,90)|32])}if(!(al<97||ag>122)){af.push([Math.max(97,ag)&~32,Math.min(al,122)&~32])}}}}af.sort(function(av,au){return(av[0]-au[0])||(au[1]-av[1])});var ai=[];var ap=[NaN,NaN];for(var ar=0;ar<af.length;++ar){var at=af[ar];if(at[0]<=ap[1]+1){ap[1]=Math.max(ap[1],at[1])}else{ai.push(ap=at)}}var an=["["];if(ao){an.push("^")}an.push.apply(an,ak);for(var ar=0;ar<ai.length;++ar){var at=ai[ar];an.push(T(at[0]));if(at[1]>at[0]){if(at[1]+1>at[0]){an.push("-")}an.push(T(at[1]))}}an.push("]");return an.join("")}function W(al){var aj=al.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g"));var ah=aj.length;var an=[];for(var ak=0,am=0;ak<ah;++ak){var ag=aj[ak];if(ag==="("){++am}else{if("\\"===ag.charAt(0)){var af=+ag.substring(1);if(af&&af<=am){an[af]=-1}}}}for(var ak=1;ak<an.length;++ak){if(-1===an[ak]){an[ak]=++ad}}for(var ak=0,am=0;ak<ah;++ak){var ag=aj[ak];if(ag==="("){++am;if(an[am]===undefined){aj[ak]="(?:"}}else{if("\\"===ag.charAt(0)){var af=+ag.substring(1);if(af&&af<=am){aj[ak]="\\"+an[am]}}}}for(var ak=0,am=0;ak<ah;++ak){if("^"===aj[ak]&&"^"!==aj[ak+1]){aj[ak]=""}}if(al.ignoreCase&&S){for(var ak=0;ak<ah;++ak){var ag=aj[ak];var ai=ag.charAt(0);if(ag.length>=2&&ai==="["){aj[ak]=X(ag)}else{if(ai!=="\\"){aj[ak]=ag.replace(/[a-zA-Z]/g,function(ao){var ap=ao.charCodeAt(0);return"["+String.fromCharCode(ap&~32,ap|32)+"]"})}}}}return aj.join("")}var aa=[];for(var V=0,U=Z.length;V<U;++V){var ae=Z[V];if(ae.global||ae.multiline){throw new Error(""+ae)}aa.push("(?:"+W(ae)+")")}return new RegExp(aa.join("|"),ac?"gi":"g")}function a(V){var U=/(?:^|\s)nocode(?:\s|$)/;var X=[];var T=0;var Z=[];var W=0;var S;if(V.currentStyle){S=V.currentStyle.whiteSpace}else{if(window.getComputedStyle){S=document.defaultView.getComputedStyle(V,null).getPropertyValue("white-space")}}var Y=S&&"pre"===S.substring(0,3);function aa(ab){switch(ab.nodeType){case 1:if(U.test(ab.className)){return}for(var ae=ab.firstChild;ae;ae=ae.nextSibling){aa(ae)}var ad=ab.nodeName;if("BR"===ad||"LI"===ad){X[W]="\n";Z[W<<1]=T++;Z[(W++<<1)|1]=ab}break;case 3:case 4:var ac=ab.nodeValue;if(ac.length){if(!Y){ac=ac.replace(/[ \t\r\n]+/g," ")}else{ac=ac.replace(/\r\n?/g,"\n")}X[W]=ac;Z[W<<1]=T;T+=ac.length;Z[(W++<<1)|1]=ab}break}}aa(V);return{sourceCode:X.join("").replace(/\n$/,""),spans:Z}}function B(S,U,W,T){if(!U){return}var V={sourceCode:U,basePos:S};W(V);T.push.apply(T,V.decorations)}var v=/\S/;function o(S){var V=undefined;for(var U=S.firstChild;U;U=U.nextSibling){var T=U.nodeType;V=(T===1)?(V?S:U):(T===3)?(v.test(U.nodeValue)?S:V):V}return V===S?undefined:V}function g(U,T){var S={};var V;(function(){var ad=U.concat(T);var ah=[];var ag={};for(var ab=0,Z=ad.length;ab<Z;++ab){var Y=ad[ab];var ac=Y[3];if(ac){for(var ae=ac.length;--ae>=0;){S[ac.charAt(ae)]=Y}}var af=Y[1];var aa=""+af;if(!ag.hasOwnProperty(aa)){ah.push(af);ag[aa]=null}}ah.push(/[\0-\uffff]/);V=k(ah)})();var X=T.length;var W=function(ah){var Z=ah.sourceCode,Y=ah.basePos;var ad=[Y,F];var af=0;var an=Z.match(V)||[];var aj={};for(var ae=0,aq=an.length;ae<aq;++ae){var ag=an[ae];var ap=aj[ag];var ai=void 0;var am;if(typeof ap==="string"){am=false}else{var aa=S[ag.charAt(0)];if(aa){ai=ag.match(aa[1]);ap=aa[0]}else{for(var ao=0;ao<X;++ao){aa=T[ao];ai=ag.match(aa[1]);if(ai){ap=aa[0];break}}if(!ai){ap=F}}am=ap.length>=5&&"lang-"===ap.substring(0,5);if(am&&!(ai&&typeof ai[1]==="string")){am=false;ap=J}if(!am){aj[ag]=ap}}var ab=af;af+=ag.length;if(!am){ad.push(Y+ab,ap)}else{var al=ai[1];var ak=ag.indexOf(al);var ac=ak+al.length;if(ai[2]){ac=ag.length-ai[2].length;ak=ac-al.length}var ar=ap.substring(5);B(Y+ab,ag.substring(0,ak),W,ad);B(Y+ab+ak,al,q(ar,al),ad);B(Y+ab+ac,ag.substring(ac),W,ad)}}ah.decorations=ad};return W}function i(T){var W=[],S=[];if(T.tripleQuotedStrings){W.push([C,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else{if(T.multiLineStrings){W.push([C,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{W.push([C,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}}if(T.verbatimStrings){S.push([C,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null])}var Y=T.hashComments;if(Y){if(T.cStyleComments){if(Y>1){W.push([j,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"])}else{W.push([j,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"])}S.push([C,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])}else{W.push([j,/^#[^\r\n]*/,null,"#"])}}if(T.cStyleComments){S.push([j,/^\/\/[^\r\n]*/,null]);S.push([j,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}if(T.regexLiterals){var X=("/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/");S.push(["lang-regex",new RegExp("^"+M+"("+X+")")])}var V=T.types;if(V){S.push([O,V])}var U=(""+T.keywords).replace(/^ | $/g,"");if(U.length){S.push([z,new RegExp("^(?:"+U.replace(/[\s,]+/g,"|")+")\\b"),null])}W.push([F,/^\s+/,null," \r\n\t\xA0"]);S.push([G,/^@[a-z_$][a-z_$@0-9]*/i,null],[O,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[F,/^[a-z_$][a-z_$@0-9]*/i,null],[G,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[F,/^\\[\s\S]?/,null],[L,/^.[^\s\w\.$@\'\"\`\/\#\\]*/,null]);return g(W,S)}var K=i({keywords:A,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function Q(V,ag){var U=/(?:^|\s)nocode(?:\s|$)/;var ab=/\r\n?|\n/;var ac=V.ownerDocument;var S;if(V.currentStyle){S=V.currentStyle.whiteSpace}else{if(window.getComputedStyle){S=ac.defaultView.getComputedStyle(V,null).getPropertyValue("white-space")}}var Z=S&&"pre"===S.substring(0,3);var af=ac.createElement("LI");while(V.firstChild){af.appendChild(V.firstChild)}var W=[af];function ae(al){switch(al.nodeType){case 1:if(U.test(al.className)){break}if("BR"===al.nodeName){ad(al);if(al.parentNode){al.parentNode.removeChild(al)}}else{for(var an=al.firstChild;an;an=an.nextSibling){ae(an)}}break;case 3:case 4:if(Z){var am=al.nodeValue;var aj=am.match(ab);if(aj){var ai=am.substring(0,aj.index);al.nodeValue=ai;var ah=am.substring(aj.index+aj[0].length);if(ah){var ak=al.parentNode;ak.insertBefore(ac.createTextNode(ah),al.nextSibling)}ad(al);if(!ai){al.parentNode.removeChild(al)}}}break}}function ad(ak){while(!ak.nextSibling){ak=ak.parentNode;if(!ak){return}}function ai(al,ar){var aq=ar?al.cloneNode(false):al;var ao=al.parentNode;if(ao){var ap=ai(ao,1);var an=al.nextSibling;ap.appendChild(aq);for(var am=an;am;am=an){an=am.nextSibling;ap.appendChild(am)}}return aq}var ah=ai(ak.nextSibling,0);for(var aj;(aj=ah.parentNode)&&aj.nodeType===1;){ah=aj}W.push(ah)}for(var Y=0;Y<W.length;++Y){ae(W[Y])}if(ag===(ag|0)){W[0].setAttribute("value",ag)}var aa=ac.createElement("OL");aa.className="linenums";var X=Math.max(0,((ag-1))|0)||0;for(var Y=0,T=W.length;Y<T;++Y){af=W[Y];af.className="L"+((Y+X)%10);if(!af.firstChild){af.appendChild(ac.createTextNode("\xA0"))}aa.appendChild(af)}V.appendChild(aa)}function D(ac){var aj=/\bMSIE\b/.test(navigator.userAgent);var am=/\n/g;var al=ac.sourceCode;var an=al.length;var V=0;var aa=ac.spans;var T=aa.length;var ah=0;var X=ac.decorations;var Y=X.length;var Z=0;X[Y]=an;var ar,aq;for(aq=ar=0;aq<Y;){if(X[aq]!==X[aq+2]){X[ar++]=X[aq++];X[ar++]=X[aq++]}else{aq+=2}}Y=ar;for(aq=ar=0;aq<Y;){var at=X[aq];var ab=X[aq+1];var W=aq+2;while(W+2<=Y&&X[W+1]===ab){W+=2}X[ar++]=at;X[ar++]=ab;aq=W}Y=X.length=ar;var ae=null;while(ah<T){var af=aa[ah];var S=aa[ah+2]||an;var ag=X[Z];var ap=X[Z+2]||an;var W=Math.min(S,ap);var ak=aa[ah+1];var U;if(ak.nodeType!==1&&(U=al.substring(V,W))){if(aj){U=U.replace(am,"\r")}ak.nodeValue=U;var ai=ak.ownerDocument;var ao=ai.createElement("SPAN");ao.className=X[Z+1];var ad=ak.parentNode;ad.replaceChild(ao,ak);ao.appendChild(ak);if(V<S){aa[ah+1]=ak=ai.createTextNode(al.substring(W,S));ad.insertBefore(ak,ao.nextSibling)}}V=W;if(V>=S){ah+=2}if(V>=ap){Z+=2}}}var t={};function c(U,V){for(var S=V.length;--S>=0;){var T=V[S];if(!t.hasOwnProperty(T)){t[T]=U}else{if(window.console){console.warn("cannot override language handler %s",T)}}}}function q(T,S){if(!(T&&t.hasOwnProperty(T))){T=/^\s*</.test(S)?"default-markup":"default-code"}return t[T]}c(K,["default-code"]);c(g([],[[F,/^[^<?]+/],[E,/^<!\w[^>]*(?:>|$)/],[j,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[L,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);c(g([[F,/^[\s]+/,null," \t\r\n"],[n,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[m,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[P,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[L,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);c(g([],[[n,/^[\s\S]+/]]),["uq.val"]);c(i({keywords:l,hashComments:true,cStyleComments:true,types:e}),["c","cc","cpp","cxx","cyc","m"]);c(i({keywords:"null,true,false"}),["json"]);c(i({keywords:R,hashComments:true,cStyleComments:true,verbatimStrings:true,types:e}),["cs"]);c(i({keywords:x,cStyleComments:true}),["java"]);c(i({keywords:H,hashComments:true,multiLineStrings:true}),["bsh","csh","sh"]);c(i({keywords:I,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py"]);c(i({keywords:s,hashComments:true,multiLineStrings:true,regexLiterals:true}),["perl","pl","pm"]);c(i({keywords:f,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb"]);c(i({keywords:w,cStyleComments:true,regexLiterals:true}),["js"]);c(i({keywords:r,hashComments:3,cStyleComments:true,multilineStrings:true,tripleQuotedStrings:true,regexLiterals:true}),["coffee"]);c(g([],[[C,/^[\s\S]+/]]),["regex"]);function d(V){var U=V.langExtension;try{var S=a(V.sourceNode);var T=S.sourceCode;V.sourceCode=T;V.spans=S.spans;V.basePos=0;q(U,T)(V);D(V)}catch(W){if("console" in window){console.log(W&&W.stack?W.stack:W)}}}function y(W,V,U){var S=document.createElement("PRE");S.innerHTML=W;if(U){Q(S,U)}var T={langExtension:V,numberLines:U,sourceNode:S};d(T);return S.innerHTML}function b(ad){function Y(af){return document.getElementsByTagName(af)}var ac=[Y("pre"),Y("code"),Y("xmp")];var T=[];for(var aa=0;aa<ac.length;++aa){for(var Z=0,V=ac[aa].length;Z<V;++Z){T.push(ac[aa][Z])}}ac=null;var W=Date;if(!W.now){W={now:function(){return +(new Date)}}}var X=0;var S;var ab=/\blang(?:uage)?-([\w.]+)(?!\S)/;var ae=/\bprettyprint\b/;function U(){var ag=(window.PR_SHOULD_USE_CONTINUATION?W.now()+250:Infinity);for(;X<T.length&&W.now()<ag;X++){var aj=T[X];var ai=aj.className;if(ai.indexOf("prettyprint")>=0){var ah=ai.match(ab);var am;if(!ah&&(am=o(aj))&&"CODE"===am.tagName){ah=am.className.match(ab)}if(ah){ah=ah[1]}var al=false;for(var ak=aj.parentNode;ak;ak=ak.parentNode){if((ak.tagName==="pre"||ak.tagName==="code"||ak.tagName==="xmp")&&ak.className&&ak.className.indexOf("prettyprint")>=0){al=true;break}}if(!al){var af=aj.className.match(/\blinenums\b(?::(\d+))?/);af=af?af[1]&&af[1].length?+af[1]:true:false;if(af){Q(aj,af)}S={langExtension:ah,sourceNode:aj,numberLines:af};d(S)}}}if(X<T.length){setTimeout(U,250)}else{if(ad){ad()}}}U()}window.prettyPrintOne=y;window.prettyPrint=b;window.PR={createSimpleLexer:g,registerLangHandler:c,sourceDecorator:i,PR_ATTRIB_NAME:P,PR_ATTRIB_VALUE:n,PR_COMMENT:j,PR_DECLARATION:E,PR_KEYWORD:z,PR_LITERAL:G,PR_NOCODE:N,PR_PLAIN:F,PR_PUNCTUATION:L,PR_SOURCE:J,PR_STRING:C,PR_TAG:m,PR_TYPE:O}})();PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_DECLARATION,/^<!\w[^>]*(?:>|$)/],[PR.PR_COMMENT,/^<\!--[\s\S]*?(?:-\->|$)/],[PR.PR_PUNCTUATION,/^(?:<[%?]|[%?]>)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-handlebars",/^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i],[PR.PR_DECLARATION,/^{{[#^>/]?\s*[\w.][^}]*}}/],[PR.PR_DECLARATION,/^{{&?\s*[\w.][^}]*}}/],[PR.PR_DECLARATION,/^{{{>?\s*[\w.][^}]*}}}/],[PR.PR_COMMENT,/^{{![^}]*}}/]]),["handlebars","hbs"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']*)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);

```

# coverage/lcov-report/prettify.css

```css
.pln{color:#000}@media screen{.str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun,.opn,.clo{color:#660}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec,.var{color:#606}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}pre.prettyprint{padding:2px;border:1px solid #888}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}

```

# coverage/lcov-report/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for All files</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="prettify.css" />
    <link rel="stylesheet" href="base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1>All files</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">25.6% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>42/164</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">27.11% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>16/59</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">25% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>16/64</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">25.94% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>41/158</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="src"><a href="src/index.html">src</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

<tr>
	<td class="file high" data-value="src/api"><a href="src/api/index.html">src/api</a></td>
	<td data-value="91.66" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 91%"></div><div class="cover-empty" style="width: 9%"></div></div>
	</td>
	<td data-value="91.66" class="pct high">91.66%</td>
	<td data-value="12" class="abs high">11/12</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="4" class="abs medium">2/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="6" class="abs high">6/6</td>
	<td data-value="91.66" class="pct high">91.66%</td>
	<td data-value="12" class="abs high">11/12</td>
	</tr>

<tr>
	<td class="file low" data-value="src/app"><a href="src/app/index.html">src/app</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="6" class="abs low">0/6</td>
	</tr>

<tr>
	<td class="file low" data-value="src/enteties/card"><a href="src/enteties/card/index.html">src/enteties/card</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	</tr>

<tr>
	<td class="file low" data-value="src/enteties/header"><a href="src/enteties/header/index.html">src/enteties/header</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

<tr>
	<td class="file high" data-value="src/enteties/modal"><a href="src/enteties/modal/index.html">src/enteties/modal</a></td>
	<td data-value="94.73" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 94%"></div><div class="cover-empty" style="width: 6%"></div></div>
	</td>
	<td data-value="94.73" class="pct high">94.73%</td>
	<td data-value="19" class="abs high">18/19</td>
	<td data-value="90" class="pct high">90%</td>
	<td data-value="10" class="abs high">9/10</td>
	<td data-value="83.33" class="pct high">83.33%</td>
	<td data-value="6" class="abs high">5/6</td>
	<td data-value="94.44" class="pct high">94.44%</td>
	<td data-value="18" class="abs high">17/18</td>
	</tr>

<tr>
	<td class="file high" data-value="src/enteties/search-bar"><a href="src/enteties/search-bar/index.html">src/enteties/search-bar</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	</tr>

<tr>
	<td class="file low" data-value="src/enteties/trip-form"><a href="src/enteties/trip-form/index.html">src/enteties/trip-form</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="28" class="abs low">0/28</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="8" class="abs low">0/8</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="28" class="abs low">0/28</td>
	</tr>

<tr>
	<td class="file low" data-value="src/enteties/trip-view"><a href="src/enteties/trip-view/index.html">src/enteties/trip-view</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	</tr>

<tr>
	<td class="file low" data-value="src/pages"><a href="src/pages/index.html">src/pages</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="23" class="abs low">0/23</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="21" class="abs low">0/21</td>
	</tr>

<tr>
	<td class="file low" data-value="src/providers"><a href="src/providers/index.html">src/providers</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

<tr>
	<td class="file high" data-value="src/shared/ui/button"><a href="src/shared/ui/button/index.html">src/shared/ui/button</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	</tr>

<tr>
	<td class="file low" data-value="src/shared/ui/button-group"><a href="src/shared/ui/button-group/index.html">src/shared/ui/button-group</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="11" class="abs low">0/11</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="11" class="abs low">0/11</td>
	</tr>

<tr>
	<td class="file low" data-value="src/shared/ui/form"><a href="src/shared/ui/form/index.html">src/shared/ui/form</a></td>
	<td data-value="46.15" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 46%"></div><div class="cover-empty" style="width: 54%"></div></div>
	</td>
	<td data-value="46.15" class="pct low">46.15%</td>
	<td data-value="13" class="abs low">6/13</td>
	<td data-value="66.66" class="pct medium">66.66%</td>
	<td data-value="3" class="abs medium">2/3</td>
	<td data-value="40" class="pct low">40%</td>
	<td data-value="5" class="abs low">2/5</td>
	<td data-value="46.15" class="pct low">46.15%</td>
	<td data-value="13" class="abs low">6/13</td>
	</tr>

<tr>
	<td class="file low" data-value="src/shared/ui/header"><a href="src/shared/ui/header/index.html">src/shared/ui/header</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

<tr>
	<td class="file low" data-value="src/shared/ui/typography"><a href="src/shared/ui/typography/index.html">src/shared/ui/typography</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	</tr>

<tr>
	<td class="file empty" data-value="src/types"><a href="src/types/index.html">src/types</a></td>
	<td data-value="0" class="pic empty">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	</tr>

<tr>
	<td class="file low" data-value="src/utils"><a href="src/utils/index.html">src/utils</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="6" class="abs low">0/6</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="sorter.js"></script>
        <script src="block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/favicon.png

This is a binary file of the type: Image

# coverage/lcov-report/block-navigation.js

```js
/* eslint-disable */
var jumpToCode = (function init() {
    // Classes of code we would like to highlight in the file view
    var missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];

    // Elements to highlight in the file listing view
    var fileListingElements = ['td.pct.low'];

    // We don't want to select elements that are direct descendants of another match
    var notSelector = ':not(' + missingCoverageClasses.join('):not(') + ') > '; // becomes `:not(a):not(b) > `

    // Selecter that finds elements on the page to which we can jump
    var selector =
        fileListingElements.join(', ') +
        ', ' +
        notSelector +
        missingCoverageClasses.join(', ' + notSelector); // becomes `:not(a):not(b) > a, :not(a):not(b) > b`

    // The NodeList of matching elements
    var missingCoverageElements = document.querySelectorAll(selector);

    var currentIndex;

    function toggleClass(index) {
        missingCoverageElements
            .item(currentIndex)
            .classList.remove('highlighted');
        missingCoverageElements.item(index).classList.add('highlighted');
    }

    function makeCurrent(index) {
        toggleClass(index);
        currentIndex = index;
        missingCoverageElements.item(index).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    function goToPrevious() {
        var nextIndex = 0;
        if (typeof currentIndex !== 'number' || currentIndex === 0) {
            nextIndex = missingCoverageElements.length - 1;
        } else if (missingCoverageElements.length > 1) {
            nextIndex = currentIndex - 1;
        }

        makeCurrent(nextIndex);
    }

    function goToNext() {
        var nextIndex = 0;

        if (
            typeof currentIndex === 'number' &&
            currentIndex < missingCoverageElements.length - 1
        ) {
            nextIndex = currentIndex + 1;
        }

        makeCurrent(nextIndex);
    }

    return function jump(event) {
        if (
            document.getElementById('fileSearch') === document.activeElement &&
            document.activeElement != null
        ) {
            // if we're currently focused on the search input, we don't want to navigate
            return;
        }

        switch (event.which) {
            case 78: // n
            case 74: // j
                goToNext();
                break;
            case 66: // b
            case 75: // k
            case 80: // p
                goToPrevious();
                break;
        }
    };
})();
window.addEventListener('keydown', jumpToCode);

```

# coverage/lcov-report/base.css

```css
body, html {
  margin:0; padding: 0;
  height: 100%;
}
body {
    font-family: Helvetica Neue, Helvetica, Arial;
    font-size: 14px;
    color:#333;
}
.small { font-size: 12px; }
*, *:after, *:before {
  -webkit-box-sizing:border-box;
     -moz-box-sizing:border-box;
          box-sizing:border-box;
  }
h1 { font-size: 20px; margin: 0;}
h2 { font-size: 14px; }
pre {
    font: 12px/1.4 Consolas, "Liberation Mono", Menlo, Courier, monospace;
    margin: 0;
    padding: 0;
    -moz-tab-size: 2;
    -o-tab-size:  2;
    tab-size: 2;
}
a { color:#0074D9; text-decoration:none; }
a:hover { text-decoration:underline; }
.strong { font-weight: bold; }
.space-top1 { padding: 10px 0 0 0; }
.pad2y { padding: 20px 0; }
.pad1y { padding: 10px 0; }
.pad2x { padding: 0 20px; }
.pad2 { padding: 20px; }
.pad1 { padding: 10px; }
.space-left2 { padding-left:55px; }
.space-right2 { padding-right:20px; }
.center { text-align:center; }
.clearfix { display:block; }
.clearfix:after {
  content:'';
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
  }
.fl { float: left; }
@media only screen and (max-width:640px) {
  .col3 { width:100%; max-width:100%; }
  .hide-mobile { display:none!important; }
}

.quiet {
  color: #7f7f7f;
  color: rgba(0,0,0,0.5);
}
.quiet a { opacity: 0.7; }

.fraction {
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 10px;
  color: #555;
  background: #E8E8E8;
  padding: 4px 5px;
  border-radius: 3px;
  vertical-align: middle;
}

div.path a:link, div.path a:visited { color: #333; }
table.coverage {
  border-collapse: collapse;
  margin: 10px 0 0 0;
  padding: 0;
}

table.coverage td {
  margin: 0;
  padding: 0;
  vertical-align: top;
}
table.coverage td.line-count {
    text-align: right;
    padding: 0 5px 0 20px;
}
table.coverage td.line-coverage {
    text-align: right;
    padding-right: 10px;
    min-width:20px;
}

table.coverage td span.cline-any {
    display: inline-block;
    padding: 0 5px;
    width: 100%;
}
.missing-if-branch {
    display: inline-block;
    margin-right: 5px;
    border-radius: 3px;
    position: relative;
    padding: 0 4px;
    background: #333;
    color: yellow;
}

.skip-if-branch {
    display: none;
    margin-right: 10px;
    position: relative;
    padding: 0 4px;
    background: #ccc;
    color: white;
}
.missing-if-branch .typ, .skip-if-branch .typ {
    color: inherit !important;
}
.coverage-summary {
  border-collapse: collapse;
  width: 100%;
}
.coverage-summary tr { border-bottom: 1px solid #bbb; }
.keyline-all { border: 1px solid #ddd; }
.coverage-summary td, .coverage-summary th { padding: 10px; }
.coverage-summary tbody { border: 1px solid #bbb; }
.coverage-summary td { border-right: 1px solid #bbb; }
.coverage-summary td:last-child { border-right: none; }
.coverage-summary th {
  text-align: left;
  font-weight: normal;
  white-space: nowrap;
}
.coverage-summary th.file { border-right: none !important; }
.coverage-summary th.pct { }
.coverage-summary th.pic,
.coverage-summary th.abs,
.coverage-summary td.pct,
.coverage-summary td.abs { text-align: right; }
.coverage-summary td.file { white-space: nowrap;  }
.coverage-summary td.pic { min-width: 120px !important;  }
.coverage-summary tfoot td { }

.coverage-summary .sorter {
    height: 10px;
    width: 7px;
    display: inline-block;
    margin-left: 0.5em;
    background: url(sort-arrow-sprite.png) no-repeat scroll 0 0 transparent;
}
.coverage-summary .sorted .sorter {
    background-position: 0 -20px;
}
.coverage-summary .sorted-desc .sorter {
    background-position: 0 -10px;
}
.status-line {  height: 10px; }
/* yellow */
.cbranch-no { background: yellow !important; color: #111; }
/* dark red */
.red.solid, .status-line.low, .low .cover-fill { background:#C21F39 }
.low .chart { border:1px solid #C21F39 }
.highlighted,
.highlighted .cstat-no, .highlighted .fstat-no, .highlighted .cbranch-no{
  background: #C21F39 !important;
}
/* medium red */
.cstat-no, .fstat-no, .cbranch-no, .cbranch-no { background:#F6C6CE }
/* light red */
.low, .cline-no { background:#FCE1E5 }
/* light green */
.high, .cline-yes { background:rgb(230,245,208) }
/* medium green */
.cstat-yes { background:rgb(161,215,106) }
/* dark green */
.status-line.high, .high .cover-fill { background:rgb(77,146,33) }
.high .chart { border:1px solid rgb(77,146,33) }
/* dark yellow (gold) */
.status-line.medium, .medium .cover-fill { background: #f9cd0b; }
.medium .chart { border:1px solid #f9cd0b; }
/* light yellow */
.medium { background: #fff4c2; }

.cstat-skip { background: #ddd; color: #111; }
.fstat-skip { background: #ddd; color: #111 !important; }
.cbranch-skip { background: #ddd !important; color: #111; }

span.cline-neutral { background: #eaeaea; }

.coverage-summary td.empty {
    opacity: .5;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 1;
    color: #888;
}

.cover-fill, .cover-empty {
  display:inline-block;
  height: 12px;
}
.chart {
  line-height: 0;
}
.cover-empty {
    background: white;
}
.cover-full {
    border-right: none !important;
}
pre.prettyprint {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
}
.com { color: #999 !important; }
.ignore-none { color: #999; font-weight: normal; }

.wrapper {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto -48px;
}
.footer, .push {
  height: 48px;
}

```

# src/enteties/trip-view/trip-view.tsx

```tsx
import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { H1 } from '../../shared/ui/typography/h1';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Modal } from '../modal/modal';
import styles from './trip-view.module.css';

export function TripView() {
  const trip = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/`);
  };

  React.useEffect(() => {
    if (params.id) {
      setIsModalOpen(true);
    }
  }, [params.id]);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className={styles.tripView}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
        <H1>{trip.title}</H1>
        {trip.status === 'todo' && (
          <Button variant="link" disabled={trip.status === 'completed'}>
            Mark as completed ☑️
          </Button>
        )}
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
    </Modal>
  );
}

```

# src/enteties/trip-view/trip-view.module.css

```css
.tripView {
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.25rem;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1.25rem;
}

.introduction {
  font-style: italic;
  margin-bottom: 1.25rem;
}

.description {
  margin-bottom: 1.875rem;
}

.itineraryTitle {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.itinerary {
  list-style-type: none;
  padding: 0;
}

.itineraryItem {
  margin-bottom: 1.25rem;
}

.itineraryDay {
  font-size: 1.2rem;
  margin-bottom: 0.625rem;
}

```

# src/enteties/search-bar/search-bar.tsx

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/ui/button/button';
import { TextInput } from '../../shared/ui/form/text-input';

type SearchBarProps = {
  onClick: (value: string) => void;
};

export function SearchBar({ onClick }: SearchBarProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { searchValue: string }) => {
    onClick(data.searchValue);
  };

  return (
    <form role="search" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('searchValue')}
        placeholder="Search trips"
        id="search-bar-input"
        aria-label="search-bar-input"
      >
        <Button icon="search" size="small" type="submit">
          Search
        </Button>
      </TextInput>
    </form>
  );
}

```

# src/enteties/search-bar/search-bar.test.tsx

```tsx
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SearchBar } from './search-bar';
describe('SearchBar', () => {
  const setup = (onClick = jest.fn()) => {
    const utils = render(<SearchBar onClick={onClick} />);
    const input = screen.getByLabelText('search-bar-input');
    const form = screen.getByRole('search');
    const button = screen.getByRole('button', { name: /search/i });
    return {
      input,
      form,
      button,
      onClick,
      ...utils,
    };
  };

  test('check search value', async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Portugal' } });
    expect(input.value).toBe('Portugal');
  });

  test('submit dispatched and onClick called with correct value', async () => {
    const { input, form, onClick } = setup();

    fireEvent.change(input, { target: { value: 'Portugal' } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledWith('Portugal');
    });
  });

  test('submit triggered by clicking the search button', async () => {
    const { input, button, onClick } = setup();
    fireEvent.change(input, { target: { value: 'Spain' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledWith('Spain');
    });
  });
});

```

# src/enteties/trip-form/trip-form.tsx

```tsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { createTrip, updateTrip } from '../../api/trips';
import { Modal } from '../modal/modal';
import { H1 } from '../../shared/ui/typography/h1';
import { H4 } from '../../shared/ui/typography/h4';
import { Trip } from '../../types/trip';
import { TextInput } from '../../shared/ui/form/text-input';
import { TextArea } from '../../shared/ui/form/text-area';
import { Button } from '../../shared/ui/button/button';
import styles from './trip-form.module.css';

export function TripForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const trip = useLoaderData() as Trip;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: trip || {
      id: '',
      title: '',
      photo_url: '',
      description: '',
      status: 'todo',
      itinerary: [{ day: 1, location: '', description: '' }],
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
    navigate('.');
  };

  React.useEffect(() => {
    if (
      location.pathname === '/create-trip' ||
      location.pathname === `/edit-trip/${params.id}`
    ) {
      setIsModalOpen(true);
    }
  }, [location.pathname]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itinerary',
  });

  const onFormSubmit = async (data: Trip) => {
    try {
      await createTrip({ ...data, id: uuidv4() });
      closeModal();
    } catch (e) {
      console.log('Error submitting trip', e);
    }
  };

  const onFormEdit = async (data: Trip) => {
    try {
      await updateTrip(data);
      closeModal();
    } catch (e) {
      console.log('Error updating trip', e);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(trip ? onFormEdit : onFormSubmit)}
        className={styles.form}
      >
        <H1>{trip ? `Edit your ${trip?.title} trip` : 'Create trip'}</H1>

        <TextInput label="Title" id="title" {...register('title')} />

        <TextInput
          label="Image URL"
          id="photo_url"
          {...register('photo_url')}
        />

        <TextArea
          label="Description"
          id="description"
          {...register('description')}
        />

        <div className={styles.itinerarySection}>
          <H4>Itinerary</H4>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.itineraryItem}>
              <TextInput
                id={`itinerary.${index}.day`}
                type="number"
                {...register(`itinerary.${index}.day` as const)}
              />
              <TextInput
                label="Location"
                id={`itinerary.${index}.location`}
                {...register(`itinerary.${index}.location` as const)}
              />
              <TextArea
                label="Description"
                id={`itinerary.${index}.description`}
                {...register(`itinerary.${index}.description` as const)}
              />
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="link-danger"
              >
                Remove Day
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              append({ day: fields.length + 1, location: '', description: '' })
            }
          >
            Add Day
          </Button>
        </div>

        <Button type="submit">{trip ? 'Edit trip' : 'Create trip'}</Button>
      </form>
    </Modal>
  );
}

```

# src/enteties/trip-form/trip-form.module.css

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 37.5rem;
  margin: 0 auto;
}
.itinerarySection {
  border: 0.0625rem solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
}
.itineraryItem {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #eee;
}
.itineraryItem:last-child {
  border-bottom: none;
}

```

# src/enteties/header/header.tsx

```tsx
import React from 'react';
import { Button } from '../../shared/ui/button/button';
import styles from './header.module.css';

type HeaderProps = {
  onCreateNewTrip: () => void;
};

export function Header(props: HeaderProps) {
  const { onCreateNewTrip } = props;

  return (
    <nav className={styles.nav}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>e</span>
      </div>
      <Button variant="secondary" size="default" onClick={onCreateNewTrip}>
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

# src/enteties/modal/modal.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/ui/button/button';
import styles from './modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;
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

# src/enteties/modal/modal.test.tsx

```tsx
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Modal } from './modal';

describe('Modal Component', () => {
  it('renders when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen onClose={() => {}}>
        modal content
      </Modal>,
    );
    expect(getByText('modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        modal content
      </Modal>,
    );
    expect(queryByText('modal content')).not.toBeInTheDocument();
  });

  it('handles onClose when a keydown event (Escape) is dispatched', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen onClose={onClose}>
        modal content
      </Modal>,
    );
    fireEvent.keyDown(container, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

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

# src/enteties/card/card.tsx

```tsx
import React from 'react';
import { H4 } from '../../shared/ui/typography/h4';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Trip } from '../../types/trip';
import styles from './card.module.css';

type CardProps = {
  trip: Trip;
  handleDetails: (trip: Trip['id']) => void;
  handleEdit: (trip: Trip['id']) => void;
  handleDelete: (tripId: Trip['id']) => void;
};

export function Card(props: CardProps) {
  const { trip, handleDetails, handleEdit, handleDelete } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <H4>{trip.title}</H4>
        <Text variant="normal" className={styles.introduction}>
          {`${trip.description.split('.')[0]}.`}
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
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 12.875rem;
}

.imageContainer {
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
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

# coverage/lcov-report/src/style.module.css.d.ts.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/style.module.css.d.ts</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../prettify.css" />
    <link rel="stylesheet" href="../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../index.html">All files</a> / <a href="index.html">src</a> style.module.css.d.ts</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../sorter.js"></script>
        <script src="../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/index.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/index.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../prettify.css" />
    <link rel="stylesheet" href="../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../index.html">All files</a> / <a href="index.html">src</a> index.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
&nbsp;
const container = <span class="cstat-no" title="statement not covered" >document.getElementById('app');</span>
const root = <span class="cstat-no" title="statement not covered" >createRoot(container as Element);</span>
<span class="cstat-no" title="statement not covered" >root.render(</span>
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
);
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../sorter.js"></script>
        <script src="../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../prettify.css" />
    <link rel="stylesheet" href="../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../index.html">All files</a> src</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="index.tsx"><a href="index.tsx.html">index.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

<tr>
	<td class="file empty" data-value="style.module.css.d.ts"><a href="style.module.css.d.ts.html">style.module.css.d.ts</a></td>
	<td data-value="0" class="pic empty">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../sorter.js"></script>
        <script src="../block-navigation.js"></script>
    </body>
</html>
    
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
import clsx from 'clsx';
import styles from './text.module.css';

type TextVariant = 'normal' | 'subtle';

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
};

export function Text(props: TextProps) {
  const { children, variant = 'normal', className = '' } = props;
  const textClass = variant === 'subtle' ? styles.subtle : styles.normal;

  return <p className={clsx(styles.text, textClass, className)}>{children}</p>;
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

type H5Props = {
  children: React.ReactNode;
};

function H5(props: H5Props) {
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

type PropType = {
  children: React.ReactNode;
};

function H4(props: PropType) {
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

type H1Props = {
  children: React.ReactNode;
};

function H1(props: H1Props) {
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

# src/shared/ui/header/Header.tsx

```tsx
import React from 'react';
import styles from './Header.module.css';

type HeaderProps = { children: React.ReactNode };

export function Header(props: HeaderProps) {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}

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

# src/shared/ui/form/text-input.tsx

```tsx
import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

export const TextInput = forwardRef((props, ref) => {
  const {
    label,
    id,
    placeholder,
    type = 'text',
    children,
    value,
    ...otherProps
  } = props;

  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <input
        ref={ref}
        value={value}
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
      {children}
    </div>
  );
});

TextInput.displayName = 'TextInput';

```

# src/shared/ui/form/text-area.tsx

```tsx
import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

export const TextArea = forwardRef((props, ref) => {
  const { label, id, maxLength, placeholder, ...restProps } = props;
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id} maxLength={maxLength}>
        {label}
      </Label>
      <textarea
        ref={ref}
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height: '150px' }}
        {...restProps}
      />
    </div>
  );
});

TextArea.displayName = 'TextArea';

```

# src/shared/ui/form/select.tsx

```tsx
import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
};

export function Select(props: SelectProps) {
  const { label, id, ...otherProps } = props;

  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.selectWrapper}>
        <select id={id} className={styles.select} {...otherProps}>
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

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  maxLength?: number;
};

export function Label(props: LabelProps) {
  const { htmlFor, children, maxLength, ...otherProps } = props;

  return (
    <label htmlFor={htmlFor} className={styles.label} {...otherProps}>
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

export function ButtonGroup(props: ButtonGroupProps) {
  const { children, className = '', value, onClick } = props;

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
import clsx from 'clsx';
import styles from './button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'search'
  | 'link'
  | 'link-danger';
type ButtonSize = 'default' | 'small';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  active?: boolean;
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    active,
    ...otherProps
  } = props;

  const buttonClass: string = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
    { [styles.active]: active },
  );

  return (
    <button type="button" className={buttonClass} {...otherProps}>
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

# coverage/lcov-report/src/utils/utils.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/utils/utils.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/utils</a> utils.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/6</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import { Itinerary, Trip } from '../types/trip';
&nbsp;
export const filterTrips = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >(</span></span>
  trips: (string | Itinerary[] | 'todo' | 'done')[],
  search: string,
): Trip[] =&gt; {
<span class="cstat-no" title="statement not covered" >  if (!search) <span class="cstat-no" title="statement not covered" >return trips;</span></span>
&nbsp;
  const lowercasedSearch = <span class="cstat-no" title="statement not covered" >search.toLowerCase();</span>
<span class="cstat-no" title="statement not covered" >  return trips.filter(</span>
<span class="fstat-no" title="function not covered" >    (t</span>rip) =&gt;
<span class="cstat-no" title="statement not covered" >      trip.title.toLowerCase().includes(lowercasedSearch) ||</span>
      trip.description.toLowerCase().includes(lowercasedSearch) ||
      trip.itinerary.some(
<span class="fstat-no" title="function not covered" >        (i</span>tem) =&gt;
<span class="cstat-no" title="statement not covered" >          item.location.toLowerCase().includes(lowercasedSearch) ||</span>
          item.description.toLowerCase().includes(lowercasedSearch),
      ),
  );
};
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/utils/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/utils</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/utils</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/6</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="utils.tsx"><a href="utils.tsx.html">utils.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="6" class="abs low">0/6</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/types/trip.ts.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/types/trip.ts</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/types</a> trip.ts</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">export type Itinerary = {
  day: number;
  location: string;
  description: string;
};
&nbsp;
export type Trip = {
  id: string;
  photo_url: string;
  title: string;
  status: 'todo' | 'done';
  description: string;
  itinerary: Itinerary[];
};
&nbsp;
export enum TripFilters {
  All = 0,
  Upcoming = 1,
  Completed = 2,
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/types/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/types</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/types</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file empty" data-value="trip.ts"><a href="trip.ts.html">trip.ts</a></td>
	<td data-value="0" class="pic empty">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	<td data-value="0" class="pct empty">0%</td>
	<td data-value="0" class="abs empty">0/0</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/providers/with-providers.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/providers/with-providers.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/providers</a> with-providers.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React, { Suspense } from 'react';
import compose from 'compose-function';
import { ErrorBoundary } from 'react-error-boundary';
&nbsp;
const providers = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >(c</span>omponent: () =&gt; React.ReactNode) =&gt; <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >()</span> =&gt; {</span></span>
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;ErrorBoundary fallback={&lt;div&gt;Something went wrong&lt;/div&gt;}&gt;
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;{component()}&lt;/Suspense&gt;;
    &lt;/ErrorBoundary&gt;
  );
};
export const withProviders = <span class="cstat-no" title="statement not covered" >compose(providers);</span>
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/providers/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/providers</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/providers</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="with-providers.tsx"><a href="with-providers.tsx.html">with-providers.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/pages/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/pages</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/pages</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/23</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/21</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="home.tsx"><a href="home.tsx.html">home.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="23" class="abs low">0/23</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="21" class="abs low">0/21</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/pages/home.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/pages/home.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/pages</a> home.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/23</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/21</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a>
<a name='L46'></a><a href='#L46'>46</a>
<a name='L47'></a><a href='#L47'>47</a>
<a name='L48'></a><a href='#L48'>48</a>
<a name='L49'></a><a href='#L49'>49</a>
<a name='L50'></a><a href='#L50'>50</a>
<a name='L51'></a><a href='#L51'>51</a>
<a name='L52'></a><a href='#L52'>52</a>
<a name='L53'></a><a href='#L53'>53</a>
<a name='L54'></a><a href='#L54'>54</a>
<a name='L55'></a><a href='#L55'>55</a>
<a name='L56'></a><a href='#L56'>56</a>
<a name='L57'></a><a href='#L57'>57</a>
<a name='L58'></a><a href='#L58'>58</a>
<a name='L59'></a><a href='#L59'>59</a>
<a name='L60'></a><a href='#L60'>60</a>
<a name='L61'></a><a href='#L61'>61</a>
<a name='L62'></a><a href='#L62'>62</a>
<a name='L63'></a><a href='#L63'>63</a>
<a name='L64'></a><a href='#L64'>64</a>
<a name='L65'></a><a href='#L65'>65</a>
<a name='L66'></a><a href='#L66'>66</a>
<a name='L67'></a><a href='#L67'>67</a>
<a name='L68'></a><a href='#L68'>68</a>
<a name='L69'></a><a href='#L69'>69</a>
<a name='L70'></a><a href='#L70'>70</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React, { useMemo, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteTrip } from '../api/trips';
import { Card } from '../enteties/card/card';
import { Header } from '../enteties/header/header';
import { SearchBar } from '../enteties/search-bar/search-bar';
import { ButtonGroup } from '../shared/ui/button-group/button-group';
import { Button } from '../shared/ui/button/button';
import { H1 } from '../shared/ui/typography/h1';
import { H5 } from '../shared/ui/typography/h5';
import { TripFilters, Trip } from '../types/trip';
import { filterTrips } from '../utils/utils';
import styles from './home.module.css';
&nbsp;
function <span class="fstat-no" title="function not covered" >Home(</span>) {
  const navigate = <span class="cstat-no" title="statement not covered" >useNavigate();</span>
  const trips = <span class="cstat-no" title="statement not covered" >useLoaderData() as Trip;</span>
  const [searchValue, setSearchValue] = <span class="cstat-no" title="statement not covered" >useState&lt;string&gt;('');</span>
  const [filter, setFilter] = <span class="cstat-no" title="statement not covered" >React.useState&lt;TripFilters&gt;(TripFilters.All);</span>
&nbsp;
  const handleDelete = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >as</span>ync (tripId: Trip['id']) =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    try {</span>
<span class="cstat-no" title="statement not covered" >      await deleteTrip(tripId);</span>
<span class="cstat-no" title="statement not covered" >      navigate('.');</span>
    } catch (error) {
<span class="cstat-no" title="statement not covered" >      console.error(error);</span>
    }
  };
&nbsp;
  const filteredTrips = <span class="cstat-no" title="statement not covered" >useMemo(<span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
    const allTrips = <span class="cstat-no" title="statement not covered" >Object.values(trips);</span>
    const searchFiltered = <span class="cstat-no" title="statement not covered" >filterTrips(allTrips, searchValue);</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >    switch (filter) {</span>
      case TripFilters.Upcoming:
<span class="cstat-no" title="statement not covered" >        return searchFiltered.filter(<span class="fstat-no" title="function not covered" >(t</span>) =&gt; <span class="cstat-no" title="statement not covered" >t.status === 'todo')</span>;</span>
      case TripFilters.Completed:
<span class="cstat-no" title="statement not covered" >        return searchFiltered.filter(<span class="fstat-no" title="function not covered" >(t</span>) =&gt; <span class="cstat-no" title="statement not covered" >t.status === 'done')</span>;</span>
      default:
<span class="cstat-no" title="statement not covered" >        return searchFiltered;</span>
    }
  }, [searchValue, filter, trips]);
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;div className={styles.homePage}&gt;
      &lt;Header onCreateNewTrip={<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >navigate(`/create-trip`)}</span> /&gt;
      &lt;H1&gt;The places you dream of&lt;/H1&gt;
      &lt;H5&gt;Let’s live new adventures&lt;/H5&gt;
      &lt;SearchBar onClick={setSearchValue} /&gt;
      &lt;ButtonGroup value={filter} onClick={setFilter}&gt;
        &lt;Button&gt;All&lt;/Button&gt;
        &lt;Button&gt;Upcoming&lt;/Button&gt;
        &lt;Button&gt;Completed&lt;/Button&gt;
      &lt;/ButtonGroup&gt;
      {filteredTrips.map(<span class="fstat-no" title="function not covered" >(t</span>) =&gt; (
<span class="cstat-no" title="statement not covered" >        &lt;Card</span>
          key={t.id}
          trip={t}
          handleDetails={<span class="fstat-no" title="function not covered" >(t</span>ripId) =&gt; <span class="cstat-no" title="statement not covered" >navigate(`/trip/${tripId}`)}</span>
          handleEdit={<span class="fstat-no" title="function not covered" >(t</span>ripId) =&gt; <span class="cstat-no" title="statement not covered" >navigate(`/edit-trip/${tripId}`)}</span>
          handleDelete={handleDelete}
        /&gt;
      ))}
      &lt;Outlet /&gt;
    &lt;/div&gt;
  );
}
&nbsp;
export default Home;
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/app/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/app</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/app</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/6</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="app.tsx"><a href="app.tsx.html">app.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="6" class="abs low">0/6</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/app/app.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/app/app.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/app</a> app.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/7</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/6</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getTrip, getTrips } from '../api/trips';
import { TripView } from '../enteties/trip-view/trip-view';
import { TripForm } from '../enteties/trip-form/trip-form';
import Home from '../pages/home';
import { withProviders } from '../providers/with-providers';
&nbsp;
const router = <span class="cstat-no" title="statement not covered" >createBrowserRouter([</span>
  {
    path: '/',
    element: &lt;Home /&gt;,
    loader: <span class="fstat-no" title="function not covered" >as</span>ync () =&gt; {
<span class="cstat-no" title="statement not covered" >      return getTrips();</span>
    },
    children: [
      {
        path: 'trip/:id',
        element: &lt;TripView /&gt;,
        loader: <span class="fstat-no" title="function not covered" >as</span>ync ({ params }) =&gt; {
<span class="cstat-no" title="statement not covered" >          return getTrip(params.id);</span>
        },
      },
      {
        path: 'create-trip',
        element: &lt;TripForm /&gt;,
      },
      {
        path: 'edit-trip/:id',
        element: &lt;TripForm /&gt;,
        loader: <span class="fstat-no" title="function not covered" >as</span>ync ({ params }) =&gt; {
<span class="cstat-no" title="statement not covered" >          return getTrip(params.id);</span>
        },
      },
    ],
  },
]);
export const Routing = <span class="cstat-no" title="statement not covered" >withProviders(<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >&lt;RouterProvider router={router} /&gt;)</span>;</span>
&nbsp;
function <span class="fstat-no" title="function not covered" >App(</span>) {
<span class="cstat-no" title="statement not covered" >  return &lt;Routing /&gt;;</span>
}
&nbsp;
export { App };
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/api/trips.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/api/trips.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/api</a> trips.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">91.66% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>11/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">50% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>2/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>6/6</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">91.66% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>11/12</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a>
<a name='L46'></a><a href='#L46'>46</a>
<a name='L47'></a><a href='#L47'>47</a>
<a name='L48'></a><a href='#L48'>48</a>
<a name='L49'></a><a href='#L49'>49</a>
<a name='L50'></a><a href='#L50'>50</a>
<a name='L51'></a><a href='#L51'>51</a>
<a name='L52'></a><a href='#L52'>52</a>
<a name='L53'></a><a href='#L53'>53</a>
<a name='L54'></a><a href='#L54'>54</a>
<a name='L55'></a><a href='#L55'>55</a>
<a name='L56'></a><a href='#L56'>56</a>
<a name='L57'></a><a href='#L57'>57</a>
<a name='L58'></a><a href='#L58'>58</a>
<a name='L59'></a><a href='#L59'>59</a>
<a name='L60'></a><a href='#L60'>60</a>
<a name='L61'></a><a href='#L61'>61</a>
<a name='L62'></a><a href='#L62'>62</a>
<a name='L63'></a><a href='#L63'>63</a>
<a name='L64'></a><a href='#L64'>64</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">1x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">10x</span>
<span class="cline-any cline-yes">10x</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import { Trip } from '../types/trip';
&nbsp;
const API_URL = 'http://localhost:3000/travels';
&nbsp;
interface ApiResponse&lt;T&gt; {
  data: T | null;
  error: Error | null;
}
&nbsp;
async function apiCall&lt;T&gt;(
  url: string,
  options?: RequestInit,
): Promise&lt;ApiResponse&lt;T&gt;&gt; {
  try {
    const response = await fetch(url, options);
    <span class="missing-if-branch" title="if path not taken" >I</span>if (!response.ok) {
<span class="cstat-no" title="statement not covered" >      throw new Error(`HTTP error! status: ${response.status}`);</span>
    }
    return await response.json();
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error : <span class="branch-1 cbranch-no" title="branch not covered" >new Error('An unknown error occurred'),</span>
    };
  }
}
&nbsp;
export async function getTrips(): Promise&lt;ApiResponse&lt;Trip[]&gt;&gt; {
  return apiCall&lt;Trip[]&gt;(API_URL);
}
&nbsp;
export async function getTrip(
  id: string | undefined,
): Promise&lt;ApiResponse&lt;Trip&gt;&gt; {
  return apiCall&lt;Trip&gt;(`${API_URL}/${id}`);
}
&nbsp;
export async function createTrip(tripData: Trip): Promise&lt;ApiResponse&lt;Trip&gt;&gt; {
  return apiCall&lt;Trip&gt;(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}
&nbsp;
export async function updateTrip(tripData: Trip): Promise&lt;ApiResponse&lt;Trip&gt;&gt; {
  return apiCall&lt;Trip&gt;(`${API_URL}/${tripData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}
&nbsp;
export async function deleteTrip(id: string): Promise&lt;ApiResponse&lt;void&gt;&gt; {
  return apiCall&lt;void&gt;(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/api/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/api</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> src/api</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">91.66% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>11/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">50% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>2/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>6/6</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">91.66% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>11/12</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="trips.tsx"><a href="trips.tsx.html">trips.tsx</a></td>
	<td data-value="91.66" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 91%"></div><div class="cover-empty" style="width: 9%"></div></div>
	</td>
	<td data-value="91.66" class="pct high">91.66%</td>
	<td data-value="12" class="abs high">11/12</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="4" class="abs medium">2/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="6" class="abs high">6/6</td>
	<td data-value="91.66" class="pct high">91.66%</td>
	<td data-value="12" class="abs high">11/12</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/trip-view/trip-view.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/trip-view/trip-view.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/trip-view</a> trip-view.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a>
<a name='L46'></a><a href='#L46'>46</a>
<a name='L47'></a><a href='#L47'>47</a>
<a name='L48'></a><a href='#L48'>48</a>
<a name='L49'></a><a href='#L49'>49</a>
<a name='L50'></a><a href='#L50'>50</a>
<a name='L51'></a><a href='#L51'>51</a>
<a name='L52'></a><a href='#L52'>52</a>
<a name='L53'></a><a href='#L53'>53</a>
<a name='L54'></a><a href='#L54'>54</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { H1 } from '../../shared/ui/typography/h1';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Modal } from '../modal/modal';
import styles from './trip-view.module.css';
&nbsp;
export function <span class="fstat-no" title="function not covered" >TripView(</span>) {
  const trip = <span class="cstat-no" title="statement not covered" >useLoaderData();</span>
  const navigate = <span class="cstat-no" title="statement not covered" >useNavigate();</span>
  const params = <span class="cstat-no" title="statement not covered" >useParams();</span>
  const [isModalOpen, setIsModalOpen] = <span class="cstat-no" title="statement not covered" >React.useState(false);</span>
&nbsp;
  const closeModal = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    setIsModalOpen(false);</span>
<span class="cstat-no" title="statement not covered" >    navigate(`/`);</span>
  };
&nbsp;
<span class="cstat-no" title="statement not covered" >  React.useEffect(<span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    if (params.id) {</span>
<span class="cstat-no" title="statement not covered" >      setIsModalOpen(true);</span>
    }
  }, [params.id]);
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;Modal isOpen={isModalOpen} onClose={closeModal}&gt;
      &lt;div className={styles.tripView}&gt;
        &lt;img src={trip.photo_url} alt={trip.title} className={styles.image} /&gt;
        &lt;H1&gt;{trip.title}&lt;/H1&gt;
        {trip.status === 'todo' &amp;&amp; (
          &lt;Button variant="link" disabled={trip.status === 'completed'}&gt;
            Mark as completed ☑️
          &lt;/Button&gt;
        )}
        &lt;Text variant="normal" className={styles.description}&gt;
          {trip.description}
        &lt;/Text&gt;
        &lt;h2 className={styles.itineraryTitle}&gt;Itinerary&lt;/h2&gt;
        &lt;ul className={styles.itinerary}&gt;
          {trip.itinerary.map(<span class="fstat-no" title="function not covered" >(i</span>tem) =&gt; (
<span class="cstat-no" title="statement not covered" >            &lt;li key={item.day} className={styles.itineraryItem}&gt;</span>
              &lt;h3 className={styles.itineraryDay}&gt;
                Day {item.day}: {item.location}
              &lt;/h3&gt;
              &lt;Text variant="normal"&gt;{item.description}&lt;/Text&gt;
            &lt;/li&gt;
          ))}
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/Modal&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/trip-view/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/trip-view</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/trip-view</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="trip-view.tsx"><a href="trip-view.tsx.html">trip-view.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/trip-form/trip-form.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/trip-form/trip-form.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/trip-form</a> trip-form.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/28</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/8</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/28</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a>
<a name='L46'></a><a href='#L46'>46</a>
<a name='L47'></a><a href='#L47'>47</a>
<a name='L48'></a><a href='#L48'>48</a>
<a name='L49'></a><a href='#L49'>49</a>
<a name='L50'></a><a href='#L50'>50</a>
<a name='L51'></a><a href='#L51'>51</a>
<a name='L52'></a><a href='#L52'>52</a>
<a name='L53'></a><a href='#L53'>53</a>
<a name='L54'></a><a href='#L54'>54</a>
<a name='L55'></a><a href='#L55'>55</a>
<a name='L56'></a><a href='#L56'>56</a>
<a name='L57'></a><a href='#L57'>57</a>
<a name='L58'></a><a href='#L58'>58</a>
<a name='L59'></a><a href='#L59'>59</a>
<a name='L60'></a><a href='#L60'>60</a>
<a name='L61'></a><a href='#L61'>61</a>
<a name='L62'></a><a href='#L62'>62</a>
<a name='L63'></a><a href='#L63'>63</a>
<a name='L64'></a><a href='#L64'>64</a>
<a name='L65'></a><a href='#L65'>65</a>
<a name='L66'></a><a href='#L66'>66</a>
<a name='L67'></a><a href='#L67'>67</a>
<a name='L68'></a><a href='#L68'>68</a>
<a name='L69'></a><a href='#L69'>69</a>
<a name='L70'></a><a href='#L70'>70</a>
<a name='L71'></a><a href='#L71'>71</a>
<a name='L72'></a><a href='#L72'>72</a>
<a name='L73'></a><a href='#L73'>73</a>
<a name='L74'></a><a href='#L74'>74</a>
<a name='L75'></a><a href='#L75'>75</a>
<a name='L76'></a><a href='#L76'>76</a>
<a name='L77'></a><a href='#L77'>77</a>
<a name='L78'></a><a href='#L78'>78</a>
<a name='L79'></a><a href='#L79'>79</a>
<a name='L80'></a><a href='#L80'>80</a>
<a name='L81'></a><a href='#L81'>81</a>
<a name='L82'></a><a href='#L82'>82</a>
<a name='L83'></a><a href='#L83'>83</a>
<a name='L84'></a><a href='#L84'>84</a>
<a name='L85'></a><a href='#L85'>85</a>
<a name='L86'></a><a href='#L86'>86</a>
<a name='L87'></a><a href='#L87'>87</a>
<a name='L88'></a><a href='#L88'>88</a>
<a name='L89'></a><a href='#L89'>89</a>
<a name='L90'></a><a href='#L90'>90</a>
<a name='L91'></a><a href='#L91'>91</a>
<a name='L92'></a><a href='#L92'>92</a>
<a name='L93'></a><a href='#L93'>93</a>
<a name='L94'></a><a href='#L94'>94</a>
<a name='L95'></a><a href='#L95'>95</a>
<a name='L96'></a><a href='#L96'>96</a>
<a name='L97'></a><a href='#L97'>97</a>
<a name='L98'></a><a href='#L98'>98</a>
<a name='L99'></a><a href='#L99'>99</a>
<a name='L100'></a><a href='#L100'>100</a>
<a name='L101'></a><a href='#L101'>101</a>
<a name='L102'></a><a href='#L102'>102</a>
<a name='L103'></a><a href='#L103'>103</a>
<a name='L104'></a><a href='#L104'>104</a>
<a name='L105'></a><a href='#L105'>105</a>
<a name='L106'></a><a href='#L106'>106</a>
<a name='L107'></a><a href='#L107'>107</a>
<a name='L108'></a><a href='#L108'>108</a>
<a name='L109'></a><a href='#L109'>109</a>
<a name='L110'></a><a href='#L110'>110</a>
<a name='L111'></a><a href='#L111'>111</a>
<a name='L112'></a><a href='#L112'>112</a>
<a name='L113'></a><a href='#L113'>113</a>
<a name='L114'></a><a href='#L114'>114</a>
<a name='L115'></a><a href='#L115'>115</a>
<a name='L116'></a><a href='#L116'>116</a>
<a name='L117'></a><a href='#L117'>117</a>
<a name='L118'></a><a href='#L118'>118</a>
<a name='L119'></a><a href='#L119'>119</a>
<a name='L120'></a><a href='#L120'>120</a>
<a name='L121'></a><a href='#L121'>121</a>
<a name='L122'></a><a href='#L122'>122</a>
<a name='L123'></a><a href='#L123'>123</a>
<a name='L124'></a><a href='#L124'>124</a>
<a name='L125'></a><a href='#L125'>125</a>
<a name='L126'></a><a href='#L126'>126</a>
<a name='L127'></a><a href='#L127'>127</a>
<a name='L128'></a><a href='#L128'>128</a>
<a name='L129'></a><a href='#L129'>129</a>
<a name='L130'></a><a href='#L130'>130</a>
<a name='L131'></a><a href='#L131'>131</a>
<a name='L132'></a><a href='#L132'>132</a>
<a name='L133'></a><a href='#L133'>133</a>
<a name='L134'></a><a href='#L134'>134</a>
<a name='L135'></a><a href='#L135'>135</a>
<a name='L136'></a><a href='#L136'>136</a>
<a name='L137'></a><a href='#L137'>137</a>
<a name='L138'></a><a href='#L138'>138</a>
<a name='L139'></a><a href='#L139'>139</a>
<a name='L140'></a><a href='#L140'>140</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { createTrip, updateTrip } from '../../api/trips';
import { Modal } from '../modal/modal';
import { H1 } from '../../shared/ui/typography/h1';
import { H4 } from '../../shared/ui/typography/h4';
import { Trip } from '../../types/trip';
import { TextInput } from '../../shared/ui/form/text-input';
import { TextArea } from '../../shared/ui/form/text-area';
import { Button } from '../../shared/ui/button/button';
import styles from './trip-form.module.css';
&nbsp;
export function <span class="fstat-no" title="function not covered" >TripForm(</span>) {
  const navigate = <span class="cstat-no" title="statement not covered" >useNavigate();</span>
  const location = <span class="cstat-no" title="statement not covered" >useLocation();</span>
  const params = <span class="cstat-no" title="statement not covered" >useParams();</span>
  const trip = <span class="cstat-no" title="statement not covered" >useLoaderData() as Trip;</span>
  const [isModalOpen, setIsModalOpen] = <span class="cstat-no" title="statement not covered" >React.useState(false);</span>
  const { register, control, handleSubmit } = <span class="cstat-no" title="statement not covered" >useForm({</span>
    defaultValues: trip || {
      id: '',
      title: '',
      photo_url: '',
      description: '',
      status: 'todo',
      itinerary: [{ day: 1, location: '', description: '' }],
    },
  });
&nbsp;
  const closeModal = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    setIsModalOpen(false);</span>
<span class="cstat-no" title="statement not covered" >    navigate('/');</span>
<span class="cstat-no" title="statement not covered" >    navigate('.');</span>
  };
&nbsp;
<span class="cstat-no" title="statement not covered" >  React.useEffect(<span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    if (</span>
      location.pathname === '/create-trip' ||
      location.pathname === `/edit-trip/${params.id}`
    ) {
<span class="cstat-no" title="statement not covered" >      setIsModalOpen(true);</span>
    }
  }, [location.pathname]);
&nbsp;
  const { fields, append, remove } = <span class="cstat-no" title="statement not covered" >useFieldArray({</span>
    control,
    name: 'itinerary',
  });
&nbsp;
  const onFormSubmit = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >as</span>ync (data: Trip) =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    try {</span>
<span class="cstat-no" title="statement not covered" >      await createTrip({ ...data, id: uuidv4() });</span>
<span class="cstat-no" title="statement not covered" >      closeModal();</span>
    } catch (e) {
<span class="cstat-no" title="statement not covered" >      console.log('Error submitting trip', e);</span>
    }
  };
&nbsp;
  const onFormEdit = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >as</span>ync (data: Trip) =&gt; {</span>
<span class="cstat-no" title="statement not covered" >    try {</span>
<span class="cstat-no" title="statement not covered" >      await updateTrip(data);</span>
<span class="cstat-no" title="statement not covered" >      closeModal();</span>
    } catch (e) {
<span class="cstat-no" title="statement not covered" >      console.log('Error updating trip', e);</span>
    }
  };
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;Modal isOpen={isModalOpen} onClose={closeModal}&gt;
      &lt;form
        onSubmit={handleSubmit(trip ? onFormEdit : onFormSubmit)}
        className={styles.form}
      &gt;
        &lt;H1&gt;{trip ? `Edit your ${trip?.title} trip` : 'Create trip'}&lt;/H1&gt;
&nbsp;
        &lt;TextInput label="Title" id="title" {...register('title')} /&gt;
&nbsp;
        &lt;TextInput
          label="Image URL"
          id="photo_url"
          {...register('photo_url')}
        /&gt;
&nbsp;
        &lt;TextArea
          label="Description"
          id="description"
          {...register('description')}
        /&gt;
&nbsp;
        &lt;div className={styles.itinerarySection}&gt;
          &lt;H4&gt;Itinerary&lt;/H4&gt;
          {fields.map(<span class="fstat-no" title="function not covered" >(f</span>ield, index) =&gt; (
<span class="cstat-no" title="statement not covered" >            &lt;div key={field.id} className={styles.itineraryItem}&gt;</span>
              &lt;TextInput
                id={`itinerary.${index}.day`}
                type="number"
                {...register(`itinerary.${index}.day` as const)}
              /&gt;
              &lt;TextInput
                label="Location"
                id={`itinerary.${index}.location`}
                {...register(`itinerary.${index}.location` as const)}
              /&gt;
              &lt;TextArea
                label="Description"
                id={`itinerary.${index}.description`}
                {...register(`itinerary.${index}.description` as const)}
              /&gt;
              &lt;Button
                type="button"
                onClick={<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >remove(index)}</span>
                variant="link-danger"
              &gt;
                Remove Day
              &lt;/Button&gt;
            &lt;/div&gt;
          ))}
          &lt;Button
            type="button"
            onClick={<span class="fstat-no" title="function not covered" >()</span> =&gt;
<span class="cstat-no" title="statement not covered" >              append({ day: fields.length + 1, location: '', description: '' })</span>
            }
          &gt;
            Add Day
          &lt;/Button&gt;
        &lt;/div&gt;
&nbsp;
        &lt;Button type="submit"&gt;{trip ? 'Edit trip' : 'Create trip'}&lt;/Button&gt;
      &lt;/form&gt;
    &lt;/Modal&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/trip-form/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/trip-form</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/trip-form</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/28</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/12</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/8</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/28</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="trip-form.tsx"><a href="trip-form.tsx.html">trip-form.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="28" class="abs low">0/28</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="12" class="abs low">0/12</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="8" class="abs low">0/8</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="28" class="abs low">0/28</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/search-bar/search-bar.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/search-bar/search-bar.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/search-bar</a> search-bar.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>2/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/ui/button/button';
import { TextInput } from '../../shared/ui/form/text-input';
&nbsp;
type SearchBarProps = {
  onClick: (value: string) =&gt; void;
};
&nbsp;
export function SearchBar({ onClick }: SearchBarProps) {
  const { register, handleSubmit } = useForm();
&nbsp;
  const onSubmit = (data: { searchValue: string }) =&gt; {
    onClick(data.searchValue);
  };
&nbsp;
  return (
    &lt;form role="search" onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;TextInput
        {...register('searchValue')}
        placeholder="Search trips"
        id="search-bar-input"
        aria-label="search-bar-input"
      &gt;
        &lt;Button icon="search" size="small" type="submit"&gt;
          Search
        &lt;/Button&gt;
      &lt;/TextInput&gt;
    &lt;/form&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/search-bar/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/search-bar</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/search-bar</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>2/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="search-bar.tsx"><a href="search-bar.tsx.html">search-bar.tsx</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/modal/modal.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/modal/modal.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/modal</a> modal.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">94.73% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>18/19</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">90% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>9/10</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">83.33% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>5/6</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">94.44% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>17/18</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a>
<a name='L46'></a><a href='#L46'>46</a>
<a name='L47'></a><a href='#L47'>47</a>
<a name='L48'></a><a href='#L48'>48</a>
<a name='L49'></a><a href='#L49'>49</a>
<a name='L50'></a><a href='#L50'>50</a>
<a name='L51'></a><a href='#L51'>51</a>
<a name='L52'></a><a href='#L52'>52</a>
<a name='L53'></a><a href='#L53'>53</a>
<a name='L54'></a><a href='#L54'>54</a>
<a name='L55'></a><a href='#L55'>55</a>
<a name='L56'></a><a href='#L56'>56</a>
<a name='L57'></a><a href='#L57'>57</a>
<a name='L58'></a><a href='#L58'>58</a>
<a name='L59'></a><a href='#L59'>59</a>
<a name='L60'></a><a href='#L60'>60</a>
<a name='L61'></a><a href='#L61'>61</a>
<a name='L62'></a><a href='#L62'>62</a>
<a name='L63'></a><a href='#L63'>63</a>
<a name='L64'></a><a href='#L64'>64</a>
<a name='L65'></a><a href='#L65'>65</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">1x</span>
<span class="cline-any cline-yes">1x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">2x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/ui/button/button';
import styles from './modal.module.css';
&nbsp;
type ModalProps = {
  isOpen: boolean;
  onClose: () =&gt; void;
  children: React.ReactNode;
};
&nbsp;
export function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;
  const modalRef = useRef&lt;HTMLDivElement&gt;(null);
&nbsp;
  useEffect(() =&gt; {
    const handleEscape = (event: KeyboardEvent) =&gt; {
      <span class="missing-if-branch" title="else path not taken" >E</span>if (event.key === 'Escape') {
        onClose();
      }
    };
&nbsp;
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
&nbsp;
    return () =&gt; {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
&nbsp;
  useEffect(() =&gt; {
    if (isOpen &amp;&amp; modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);
&nbsp;
  if (!isOpen) return null;
&nbsp;
  return createPortal(
    &lt;div className={styles.modalOverlay} onClick={onClose}&gt;
      &lt;div
        className={styles.modalContent}
        onClick={<span class="fstat-no" title="function not covered" >(e</span>) =&gt; <span class="cstat-no" title="statement not covered" >e.stopPropagation()}</span>
        ref={modalRef}
        tabIndex={-1}
      &gt;
        &lt;div className={styles.modalHeader}&gt;
          &lt;Button
            variant="link"
            onClick={onClose}
            className={styles.closeButton}
          &gt;
            &amp;times;
          &lt;/Button&gt;
        &lt;/div&gt;
        &lt;div className={styles.modalBody}&gt;{children}&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;,
    document.body,
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/modal/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/modal</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/modal</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">94.73% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>18/19</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">90% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>9/10</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">83.33% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>5/6</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">94.44% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>17/18</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="modal.tsx"><a href="modal.tsx.html">modal.tsx</a></td>
	<td data-value="94.73" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 94%"></div><div class="cover-empty" style="width: 6%"></div></div>
	</td>
	<td data-value="94.73" class="pct high">94.73%</td>
	<td data-value="19" class="abs high">18/19</td>
	<td data-value="90" class="pct high">90%</td>
	<td data-value="10" class="abs high">9/10</td>
	<td data-value="83.33" class="pct high">83.33%</td>
	<td data-value="6" class="abs high">5/6</td>
	<td data-value="94.44" class="pct high">94.44%</td>
	<td data-value="18" class="abs high">17/18</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/header/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/header</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/header</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="header.tsx"><a href="header.tsx.html">header.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/header/header.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/header/header.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/header</a> header.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { Button } from '../../shared/ui/button/button';
import styles from './header.module.css';
&nbsp;
type HeaderProps = {
  onCreateNewTrip: () =&gt; void;
};
&nbsp;
export function <span class="fstat-no" title="function not covered" >Header(</span>props: HeaderProps) {
  const { onCreateNewTrip } = <span class="cstat-no" title="statement not covered" >props;</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;nav className={styles.nav}&gt;
      &lt;div className={styles.iconContainer}&gt;
        &lt;span className={styles.icon}&gt;e&lt;/span&gt;
      &lt;/div&gt;
      &lt;Button variant="secondary" size="default" onClick={onCreateNewTrip}&gt;
        Create new trip
      &lt;/Button&gt;
    &lt;/nav&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/card/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/card</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> src/enteties/card</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="card.tsx"><a href="card.tsx.html">card.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="5" class="abs low">0/5</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/enteties/card/card.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/enteties/card/card.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../prettify.css" />
    <link rel="stylesheet" href="../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../index.html">All files</a> / <a href="index.html">src/enteties/card</a> card.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/5</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a>
<a name='L45'></a><a href='#L45'>45</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { H4 } from '../../shared/ui/typography/h4';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Trip } from '../../types/trip';
import styles from './card.module.css';
&nbsp;
type CardProps = {
  trip: Trip;
  handleDetails: (trip: Trip['id']) =&gt; void;
  handleEdit: (trip: Trip['id']) =&gt; void;
  handleDelete: (tripId: Trip['id']) =&gt; void;
};
&nbsp;
export function <span class="fstat-no" title="function not covered" >Card(</span>props: CardProps) {
  const { trip, handleDetails, handleEdit, handleDelete } = <span class="cstat-no" title="statement not covered" >props;</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;div className={styles.card}&gt;
      &lt;div className={styles.imageContainer}&gt;
        &lt;img src={trip.photo_url} alt={trip.title} className={styles.image} /&gt;
      &lt;/div&gt;
      &lt;div className={styles.content}&gt;
        &lt;H4&gt;{trip.title}&lt;/H4&gt;
        &lt;Text variant="normal" className={styles.introduction}&gt;
          {`${trip.description.split('.')[0]}.`}
        &lt;/Text&gt;
        &lt;div className={styles.actions}&gt;
          &lt;Button variant="link" onClick={<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >handleDetails(trip.id)}</span>&gt;
            See trip details
          &lt;/Button&gt;
          &lt;div className={styles.subactions}&gt;
            &lt;Button variant="link" onClick={<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >handleEdit(trip.id)}</span>&gt;
              Edit
            &lt;/Button&gt;
            &lt;Button variant="link-danger" onClick={<span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >handleDelete(trip.id)}</span>&gt;
              Delete
            &lt;/Button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../sorter.js"></script>
        <script src="../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/typography/text.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/typography/text.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/typography</a> text.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import clsx from 'clsx';
import styles from './text.module.css';
&nbsp;
type TextVariant = 'normal' | 'subtle';
&nbsp;
type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
};
&nbsp;
export function <span class="fstat-no" title="function not covered" >Text(</span>props: TextProps) {
  const { children, variant = <span class="branch-0 cbranch-no" title="branch not covered" >'normal',</span> className = <span class="branch-0 cbranch-no" title="branch not covered" >'' </span>} = <span class="cstat-no" title="statement not covered" >props;</span>
  const textClass = <span class="cstat-no" title="statement not covered" >variant === 'subtle' ? styles.subtle : styles.normal;</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >  return &lt;p className={clsx(styles.text, textClass, className)}&gt;{children}&lt;/p&gt;;</span>
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/typography/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/typography</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> src/shared/ui/typography</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="h1.tsx"><a href="h1.tsx.html">h1.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

<tr>
	<td class="file low" data-value="h4.tsx"><a href="h4.tsx.html">h4.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

<tr>
	<td class="file low" data-value="h5.tsx"><a href="h5.tsx.html">h5.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

<tr>
	<td class="file low" data-value="text.tsx"><a href="text.tsx.html">text.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/typography/h5.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/typography/h5.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/typography</a> h5.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './h5.module.css';
&nbsp;
type H5Props = {
  children: React.ReactNode;
};
&nbsp;
function <span class="fstat-no" title="function not covered" >H5(</span>props: H5Props) {
  const { children } = <span class="cstat-no" title="statement not covered" >props;</span>
<span class="cstat-no" title="statement not covered" >  return &lt;h5 className={styles.h5}&gt;{children}&lt;/h5&gt;;</span>
}
&nbsp;
export { H5 };
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/typography/h4.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/typography/h4.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/typography</a> h4.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './h4.module.css';
&nbsp;
type PropType = {
  children: React.ReactNode;
};
&nbsp;
function <span class="fstat-no" title="function not covered" >H4(</span>props: PropType) {
  const { children } = <span class="cstat-no" title="statement not covered" >props;</span>
<span class="cstat-no" title="statement not covered" >  return &lt;h4 className={styles.h4}&gt;{children}&lt;/h4&gt;;</span>
}
&nbsp;
export { H4 };
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/typography/h1.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/typography/h1.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/typography</a> h1.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './h1.module.css';
&nbsp;
type H1Props = {
  children: React.ReactNode;
};
&nbsp;
function <span class="fstat-no" title="function not covered" >H1(</span>props: H1Props) {
  const { children } = <span class="cstat-no" title="statement not covered" >props;</span>
<span class="cstat-no" title="statement not covered" >  return &lt;h1 className={styles.h1}&gt;{children}&lt;/h1&gt;;</span>
}
&nbsp;
export { H1 };
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/header/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/header</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> src/shared/ui/header</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="Header.tsx"><a href="Header.tsx.html">Header.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/header/Header.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/header/Header.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/header</a> Header.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './Header.module.css';
&nbsp;
type HeaderProps = { children: React.ReactNode };
&nbsp;
export function <span class="fstat-no" title="function not covered" >Header(</span>props: HeaderProps) {
  const { children } = <span class="cstat-no" title="statement not covered" >props;</span>
<span class="cstat-no" title="statement not covered" >  return &lt;header className={styles.header}&gt;{children}&lt;/header&gt;;</span>
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/form/text-input.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/form/text-input.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/form</a> text-input.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>1/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>1/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>4/4</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">1x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">1x</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';
&nbsp;
export const TextInput = forwardRef((props, ref) =&gt; {
  const {
    label,
    id,
    placeholder,
    type = 'text',
    children,
    value,
    ...otherProps
  } = props;
&nbsp;
  return (
    &lt;div className={styles.fieldContainer}&gt;
      &lt;Label htmlFor={id}&gt;{label}&lt;/Label&gt;
      &lt;input
        ref={ref}
        value={value}
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      /&gt;
      {children}
    &lt;/div&gt;
  );
});
&nbsp;
TextInput.displayName = 'TextInput';
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/form/text-area.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/form/text-area.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/form</a> text-area.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/4</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';
&nbsp;
export const TextArea = <span class="cstat-no" title="statement not covered" >forwardRef(<span class="fstat-no" title="function not covered" >(p</span>rops, ref) =&gt; {</span>
  const { label, id, maxLength, placeholder, ...restProps } = <span class="cstat-no" title="statement not covered" >props;</span>
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;div className={styles.fieldContainer}&gt;
      &lt;Label htmlFor={id} maxLength={maxLength}&gt;
        {label}
      &lt;/Label&gt;
      &lt;textarea
        ref={ref}
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height: '150px' }}
        {...restProps}
      /&gt;
    &lt;/div&gt;
  );
});
&nbsp;
<span class="cstat-no" title="statement not covered" >TextArea.displayName = 'TextArea';</span>
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/form/select.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/form/select.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/form</a> select.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';
&nbsp;
type SelectProps = React.SelectHTMLAttributes&lt;HTMLSelectElement&gt; &amp; {
  label: string;
  id: string;
};
&nbsp;
export function <span class="fstat-no" title="function not covered" >Select(</span>props: SelectProps) {
  const { label, id, ...otherProps } = <span class="cstat-no" title="statement not covered" >props;</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;div className={styles.fieldContainer}&gt;
      &lt;Label htmlFor={id}&gt;{label}&lt;/Label&gt;
      &lt;div className={styles.selectWrapper}&gt;
        &lt;select id={id} className={styles.select} {...otherProps}&gt;
          {[...Array(99)].map(<span class="fstat-no" title="function not covered" >(_</span>, i) =&gt; (
<span class="cstat-no" title="statement not covered" >            &lt;option key={i + 1} value={i + 1}&gt;</span>
              {i + 1}
            &lt;/option&gt;
          ))}
        &lt;/select&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/form/label.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/form/label.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/form</a> label.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>2/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">50% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>1/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>1/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>2/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">3x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import styles from './label.module.css';
&nbsp;
type LabelProps = React.LabelHTMLAttributes&lt;HTMLLabelElement&gt; &amp; {
  htmlFor: string;
  maxLength?: number;
};
&nbsp;
export function Label(props: LabelProps) {
  const { htmlFor, children, maxLength, ...otherProps } = props;
&nbsp;
  return (
    &lt;label htmlFor={htmlFor} className={styles.label} {...otherProps}&gt;
      {children}
      {maxLength &amp;&amp; (
<span class="branch-1 cbranch-no" title="branch not covered" >        &lt;span className={styles.maxLength}&gt; (max. {maxLength} characters)&lt;/span&gt;</span>
      )}
    &lt;/label&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/form/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/form</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> src/shared/ui/form</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">46.15% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>6/13</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">66.66% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>2/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">40% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>2/5</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">46.15% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>6/13</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="label.tsx"><a href="label.tsx.html">label.tsx</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="2" class="abs medium">1/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	</tr>

<tr>
	<td class="file low" data-value="select.tsx"><a href="select.tsx.html">select.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	</tr>

<tr>
	<td class="file low" data-value="text-area.tsx"><a href="text-area.tsx.html">text-area.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="4" class="abs low">0/4</td>
	</tr>

<tr>
	<td class="file high" data-value="text-input.tsx"><a href="text-input.tsx.html">text-input.tsx</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/button-group/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/button-group</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> src/shared/ui/button-group</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/11</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/11</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="button-group.tsx"><a href="button-group.tsx.html">button-group.tsx</a></td>
	<td data-value="0" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 0%"></div><div class="cover-empty" style="width: 100%"></div></div>
	</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="11" class="abs low">0/11</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="9" class="abs low">0/9</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="3" class="abs low">0/3</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="11" class="abs low">0/11</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/button-group/button-group.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/button-group/button-group.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/button-group</a> button-group.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/11</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/9</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/11</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { TripFilters } from '../../../types/trip';
import styles from './button-group.module.css';
&nbsp;
type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
  value: TripFilters;
  onClick: (value: number) =&gt; void;
};
&nbsp;
export function <span class="fstat-no" title="function not covered" >ButtonGroup(</span>props: ButtonGroupProps) {
  const { children, className = <span class="branch-0 cbranch-no" title="branch not covered" >'',</span> value, onClick } = <span class="cstat-no" title="statement not covered" >props;</span>
&nbsp;
<span class="cstat-no" title="statement not covered" >  return (</span>
    &lt;div className={`${styles.buttonGroup} ${className}`}&gt;
      {React.Children.map(children, <span class="fstat-no" title="function not covered" >(c</span>hild, index) =&gt; {
<span class="cstat-no" title="statement not covered" >        if (</span>
          React.isValidElement&lt;React.HTMLAttributes&lt;HTMLButtonElement&gt;&gt;(child)
        ) {
          let positionClass = <span class="cstat-no" title="statement not covered" >'';</span>
<span class="cstat-no" title="statement not covered" >          if (index === 0) {</span>
<span class="cstat-no" title="statement not covered" >            positionClass = styles.first;</span>
          } else <span class="cstat-no" title="statement not covered" >if (index === React.Children.count(children) - 1) {</span>
<span class="cstat-no" title="statement not covered" >            positionClass = styles.last;</span>
          }
&nbsp;
<span class="cstat-no" title="statement not covered" >          return React.cloneElement(child, {</span>
            className: `${child.props.className || ''} ${styles.groupButton} ${positionClass}`,
            active: index === value,
            onClick: <span class="fstat-no" title="function not covered" >()</span> =&gt; <span class="cstat-no" title="statement not covered" >onClick(index),</span>
          });
        }
<span class="cstat-no" title="statement not covered" >        return child;</span>
      })}
    &lt;/div&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/button/index.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/button</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> src/shared/ui/button</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>1/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="button.tsx"><a href="button.tsx.html">button.tsx</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

# coverage/lcov-report/src/shared/ui/button/button.tsx.html

```html

<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/shared/ui/button/button.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../../../prettify.css" />
    <link rel="stylesheet" href="../../../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../../../index.html">All files</a> / <a href="index.html">src/shared/ui/button</a> button.tsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>1/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>3/3</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line high'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a>
<a name='L21'></a><a href='#L21'>21</a>
<a name='L22'></a><a href='#L22'>22</a>
<a name='L23'></a><a href='#L23'>23</a>
<a name='L24'></a><a href='#L24'>24</a>
<a name='L25'></a><a href='#L25'>25</a>
<a name='L26'></a><a href='#L26'>26</a>
<a name='L27'></a><a href='#L27'>27</a>
<a name='L28'></a><a href='#L28'>28</a>
<a name='L29'></a><a href='#L29'>29</a>
<a name='L30'></a><a href='#L30'>30</a>
<a name='L31'></a><a href='#L31'>31</a>
<a name='L32'></a><a href='#L32'>32</a>
<a name='L33'></a><a href='#L33'>33</a>
<a name='L34'></a><a href='#L34'>34</a>
<a name='L35'></a><a href='#L35'>35</a>
<a name='L36'></a><a href='#L36'>36</a>
<a name='L37'></a><a href='#L37'>37</a>
<a name='L38'></a><a href='#L38'>38</a>
<a name='L39'></a><a href='#L39'>39</a>
<a name='L40'></a><a href='#L40'>40</a>
<a name='L41'></a><a href='#L41'>41</a>
<a name='L42'></a><a href='#L42'>42</a>
<a name='L43'></a><a href='#L43'>43</a>
<a name='L44'></a><a href='#L44'>44</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-yes">5x</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
&nbsp;
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'search'
  | 'link'
  | 'link-danger';
type ButtonSize = 'default' | 'small';
&nbsp;
type ButtonProps = React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; &amp; {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  active?: boolean;
};
&nbsp;
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    active,
    ...otherProps
  } = props;
&nbsp;
  const buttonClass: string = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
    { [styles.active]: active },
  );
&nbsp;
  return (
    &lt;button type="button" className={buttonClass} {...otherProps}&gt;
      {children}
    &lt;/button&gt;
  );
}
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at 2024-07-25T12:40:00.119Z
            </div>
        <script src="../../../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../../../sorter.js"></script>
        <script src="../../../../block-navigation.js"></script>
    </body>
</html>
    
```

