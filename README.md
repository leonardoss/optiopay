# OptioPay - Interview Technical test

Application created to the Frontend Technical test of OptioPay.

## Technologies used

    - Create-react-app
    - TypeScript
    - React
    - SASS
    - ESLint
    - Jest

## How to run

### Run local

### Install dependencies

    ```bash
    $ yarn install
    ```

### Run App

    ```bash
    $ yarn start
    ```

The application will be available on: **[http://localhost:3000](http://localhost:3000)**

### Run tests

    ```bash
    $ yarn test
    ```

You can measure the current test coverage in the app running:

    ```bash
    $ yarn test --coverage
    ```

### Considerations

#### About the app

- Due to the short time, I didn't care too much about using strings to button labels, error
  messages, etc. This is something that definitely I would handle different (in a different layer or
  using an intl library)
- I preferred to have the entire logic of my UI only one component, with more time probably I would
  think about a way of creating more dynamic fields for the two inputs.
- I've used TypeScript because is a language that I'm using a lot in the last weeks, and I want to
  improve my skills, every hour of coding in TS help me to achieve it.
- Regarding the tests, I focused in test the `helpers` functions
- Regarding the error handling, I also would like to work more there and leave more dynamic.

Thanks for the opportunity :)
