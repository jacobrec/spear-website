# Spear Website

The website for the Space Alberta Exploration Robotics Club.

## TODO
- Add content to About page
- Add content to Home page
- Add content to Main page
- Add content to Sponsors page
- Integrate Blog page with Blog server
- Add more tabs maybe?
- Make everything look pretty


## Setup
### Linux
1. install [NodeJS](https://nodejs.org/en/) LTS
2. clone this project somewhere on your device eg `git clone git@github.com:jacobrec/spear-website.git`
3. in the same directory(the parent directory of the project) where you cloned the project run the following commands
```bash
ng new spear
cd spear
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save ng2-fittext
cd ../
cp -a spear-website/src/. spear/src/
cp -a spear-website/.angular-cli.json spear
cp -a spear-website/README.md spear
cp -a spear/. spear-website/
rm -rf spear
```
This downloads the node packages we're using
### Windows
no instructions yet
### Mac
no instructions yet

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
