# NeuroAdmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.


# Tooling

## Add Material

Type the command:
`ng add @angular/material`

Import Material modules in a module:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Import material styles in your app.css:

```css
/* Add application styles & imports to this file! */
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
  
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
  
.example-full-width {
  width: 100%;
}
```

Use in a component.html:
```html
<form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>Name:</mat-label>
    <input matInput placeholder="Ex. Hardik" value="Hardik">
  </mat-form-field>
  
  <mat-form-field class="example-full-width">
    <mat-label>Address:</mat-label>
    <textarea matInput placeholder="Ex. 204, Sarvo, India"></textarea>
  </mat-form-field>
  
  <button mat-raised-button color="primary">Submit!</button>
</form>
```

## Add Boostrap

Type the command:

1- First approach: only angular css (not used)
`$ npm install bootstrap`

```json
  "styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
  ]
  "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1>Angular 14 example</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
<div>
  <router-outlet></router-outlet>
</div>
```

2- Second approach: bootstrap widgets for angular (that's what we used)

`npm install @ng-bootstrap/ng-bootstrap`

npm install @ng-bootstrap/ng-bootstrap

Import in a module

Use in a component.html:


# Translation: ng-translate
[See how here](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate)

Install:
`$ npm install @ngx-translate/core @ngx-translate/http-loader`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
