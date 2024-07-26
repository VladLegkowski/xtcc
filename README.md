![Dream Travels Logo](https://private-user-images.githubusercontent.com/17318500/352107907-25fd86ad-52cc-45c4-91e1-872c2d24703b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE5ODU5MTgsIm5iZiI6MTcyMTk4NTYxOCwicGF0aCI6Ii8xNzMxODUwMC8zNTIxMDc5MDctMjVmZDg2YWQtNTJjYy00NWM0LTkxZTEtODcyYzJkMjQ3MDNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI2VDA5MjAxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMyMzQ4ODRlYmI2ODAzMDc3YjUyNzM3NGQ1NDlmNTcwZWNmYzI1YjVkNWY3ZDhjMzM5YWQ0YWNmOWNiZDQ2MjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xlzPsWu9LAKqUJoXBoT40A37zKM6MslZk94R3Ii8itI)

# Dream Travels

Dream Travels is your personal space to add wild destinations and keep the flame of your past adventures alive. It's like your own dream journal, but with a passport!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Architecture and Design](#architecture-and-design)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- node<sub><sup>`v20.10.0`</sup></sub>
- npm<sub><sup>`v10.2.3`</sup></sub>

## Installation

1. Run `npm install`.

## Running the Application

1. Run `json:server` and then `npm start` to start the client.
2. Check it out under:  `http://localhost:1234/`.

## Features

- Add and manage travel destinations
- View detailed information about each trip
- Mark trips as completed
- Search and filter trips
- Responsive design for various screen sizes

## Architecture and Design

- The architecture is loosely based on the Feature Sliced Design architecture.
- App uses slightly unconventional approach, where each modal is a page, meaning that user can enter directly http://localhost:1234/trip/1 and see the modal loaded with the content. Same goes for edit and create. I wanted to take opportunity to try something new while doing this task.
- The application uses ParcelJS as the bundler.
- Typescript is used throughout the application for type safety.
- Styles are written in CSS, utilizing PostCSS and CSS modules for scoped styling.
- React Router is used for navigation, providing a foundation for potential future growth.

## Testing

- **Unit Testing**: Run `npm run test:unit`
- Uses Jest and @testing-library/react // only few tests done for a showcase purpouses
- **E2E Testing**: Run `npm run test:e2e`
- Uses Cypress for end-to-end testing

## Technologies Used

* [Typescript](https://www.typescriptlang.org/)
* [ES2019](https://262.ecma-international.org/10.0/)
* [React](https://facebook.github.io/react/)
* [React Router](https://reactrouter.com/en/main)
* [React Hook Form](https://react-hook-form.com)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [Cypress](https://www.cypress.io/)
* [ESLint](http://eslint.org/)
* [Feature slice design](https://feature-sliced.design/)

## License

The MIT License (MIT)
