# order-form

## What's inside

- [redux-toolkit](https://github.com/reduxjs/redux-toolkit) (state management)
- [styled-components](https://github.com/styled-components/styled-components) (JSX CSS framework)
- [Axios](https://github.com/mzabriskie/axios) (a library for XMLHttpRequests)
- [Redux Saga](https://github.com/redux-saga/redux-saga/) (a redux middleware to handle data fetching)
- [Formik](https://github.com/formium/formik) (Forms in react without hassle)
- [Yup](https://github.com/jquense/yup) (Schema validations)
- [React-Toastify](https://github.com/fkhadra/react-toastify) (Notifications)


For code quality:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

For testing:

- [Facebook/Jest](https://facebook.github.io/jest/)
- [Testing-library/React](https://testing-library.com/docs/react-testing-library/intro)
- [Jest-dom](https://github.com/testing-library/jest-dom) (Custom jest matchers to test the state of the DOM)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/hashaneranda/order-form
cd order-form
```

Install the dependencies:

```bash
yarn install
```
and create a new file .env and copy the content of .env.sample

### Commands

Running locally:

```bash
yarn start
```

Building the app for production:

```bash
yarn build
```

Testing:

```bash
# run all tests
yarn test

```

Note: this project is based on [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

```
src\
 |--app\            # Application main layout, redux store, root reducers, root saga
 |--assets\         # Assets
 |--common\         # common Compoenents and utilities
 |--config\         # Configrations of the app (Constants, Images links)
 |--feature\        # Redux Slices, Sagas , Watchers
 |--services\       # Services for API calls and functions
 |--index.js        # react app - app entry point
```
