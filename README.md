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
2. Install Angular 2 CLI with `npm install -g @angular/cli` run this as sudo
2. clone this project somewhere on your device eg `git clone https://github.com/jacobrec/spear-website.git`
3. in the same directory(the parent directory of the project) where you cloned the project run the following commands
```bash
cd spear-website
npm install
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save ng2-fittext
```
This downloads the node packages we're using
### Windows
1. install [NodeJS](https://nodejs.org/en/) LTS
2. Open CMD Prompt and Install Angular 2 CLI with `npm install -g @angular/cli`
3. Sign up for [Github](https://github.com)
3. Install [git](https://git-scm.com/download/win)
4. Open git bash where you want the project on your computer
5. Run `git clone https://github.com/jacobrec/spear-website.git` in git bash
5. With git bash, naviagte inside the project folder you just made
5. Run these commands also in git bash
```bash
npm install
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save ng2-fittext

```
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
