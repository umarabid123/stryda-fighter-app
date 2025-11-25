# Project Overview

This is a React Native mobile application for "Stryda Fighter". The purpose of the application is not entirely clear from the current codebase, but it seems to involve user profiles and authentication. The main technologies used are React Native, TypeScript, and React Navigation.

The current entry point of the application is `App.tsx`, which displays a "Complete your account" screen. There are also other screens and navigators that are not currently in use, such as a `Signup` screen and an `AuthNavigator`.

# Building and Running

To build and run the application, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn
    ```

2.  **Start the Metro bundler:**
    ```bash
    npm start
    # or
    yarn start
    ```

3.  **Run on Android:**
    ```bash
    npm run android
    # or
    yarn android
    ```

4.  **Run on iOS:**
    ```bash
    cd ios
    bundle install
    bundle exec pod install
    cd ..

    npm run ios
    # or
    yarn ios
    ```

# Development Conventions

*   **Code Style:** The project uses ESLint and Prettier for code formatting and style checking. You can run `npm run lint` to check for linting errors.
*   **Component Structure:** Components are organized into two main directories:
    *   `src/components/common`: for common, reusable components.
    *   `src/components/special`: for more specialized components.
*   **Navigation:** The project uses React Navigation for screen transitions. The navigation logic is intended to be defined in the `src/navigation` directory, but it is not fully implemented yet.
*   **Theming:** The project uses a `src/constant/themes.ts` file to define the color palette and other theme-related constants.
*   **Constants:** The `src/constant/constants.ts` file is used to define global constants.
