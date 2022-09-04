# form-submit

A simple form with validations that collects user data and displays it.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Tech Stack

    Vue 2
    JavaScript
    Vee Validate
    SCSS
    Axios

## Description

For detailed documentation please visit - https://v2.vuejs.org/

The structure of the project is:

    Assets: Contains the scss files - app.scss
    Components: FormInput, UserDetails, UserForm
    Services: Services folder contains users.js which has stores endpoint for api calls.

POST API is handled through Axios. (API used - https://httpbin.org/post)

Vee-validate allow to validate every field of the forms and provide clear errors to the user. Every step is correctly validated before the Send button is enabled.
For detailed documentation, please visit - https://vee-validate.logaretm.com/v3 which works with Vue 2

All the details will be shown after the POST API call and there is a button to go back to the form and record another user details.

main.js file handle all the exports which allows us to use it throughout the application.