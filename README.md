# ModernApp Application

## Project Description

Sencha Ext JS 7.6 application generated using the ExtGen (Open Tooling) build tool. The Ext JS template `moderndesktop` was used to generate the project.

Purpose of the project is to familiarize with the Ext JS 7.6 toolkit and handling of MVC architecture.

The application has three views. The two default `HomeView` and `PersonnelView` views and a new view `JsonpproxyView`.

`JsonpproxyView` contains button `JsonP Test`. Button `JsonP Test` attempts to make a successful JsonP proxy data load. The request to the API is successful. A successful status 200 GET request is made. However, I cannot get the JsonP callback to occur in `JsonpproxyViewController`. The API does accept JsonP requests and provides a callback. Possibly the shape of the response data is the problem (json not in an array but is still seems it should work?).

Other additions made to the basic app template are SASS based. Custom fonts are added and slight changes made to global variables.

## Technologies Required for `ext-gen` CLI tool:
* NodeJS
* Java 8

## Run the App:
* Download
* Install dependencies (npm)
* Start Dev (npm start)
* Be prepard to `chmod 777 "/Users/anyuser/Documents/SENCHA-APP/modern-app/node_modules/@sencha/cmd/dist/sencha"`
* Also, a Port 80 request is made during the initial install in regards to the NPM/ExtGen 30-day trial
