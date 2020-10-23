# Virtual Fair (Frontend)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) React Framework.

## Getting Started

To get started with the project run `yarn ` or `npm i`

ensure you have both `prettier` and ` eslint` extensions installed on your Vs code

## Available Scripts

In this project the following scripts are :

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

This command lints your code and log all eslint warning(errors)

### `yarn lint:fix`

FIxes all eslint warning with availabe fix.

### `yarn format`

Uses the prettier config to format your code to abide to the prettier rules

### `yarn build:staging`

Builds the app for test (production) to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed also creates `netilify redirect file in the build folder`

### `yarn build`

Builds the app for production ( **Live** ) to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Environment Variables`

Create your env files in these format

- .env.staging (for test production mode)
- .env.development (for development mode)
- .env.production (going live)
