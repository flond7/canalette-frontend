# canalette-frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## GITHUB
git init 
git add README.md 
git config --global http.proxy http[s]://username:password@proxyipaddress:portnumber 
git config --global user.name "NICK" 
git config --global user.mail mail@gmail.com 
git config --global user.password ********* 
git commit -m "first commit" 
git branch -M main 
git remote add origin https://github.com/flond7/angular-startingPoint.git 
git push -u origin main

git branch (check branch name)
git branch -mv origin master (change name from origin to master)

git remote -v (check origin)
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git (change repository)

## DEPLOY ON APACHE
# on the front end side
- if on the server the app is on a subfolder (ex: /var/www/html/NAME-OF-THE-APP) in index.html change the base parameter  
  <base href="/NAME-OF-THE-APP/">  

- ng build --prod 
  builds in dist folder everything you need

  in case of exeeded budget error in angular.json change the maximumError property in budget (and check if there is unused code you can delete)  

- add an .htaccess file to the dist folder (search on github, canalette-frontend for a template)

# on the server
- copy the dist folder in /var/www/html/ and check the permissions and eventually change permissions to amministratore  
  sudo chown -R root:root /var/www/html/NAME-OF-THE-APP

- in /etc/apache2/apache2.conf add
  <Directory "/var/www/html/name-of-the-app">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>

# test frontend
- PROBLEM: doesn't find runtime.js or other files, check if base is correct in index.html



## ANGULAR COMMANDS
ng g component components/component-name (component-name format to keep order)


## USER FLOW  
To associate a drain to a user for a specific year all the elements have to be present in the database, therefore user has to be sure to add
- Add year  
- Add user 
- Add drain info
All these informations can be added as single records or trough CSV in multilple records
Only then a relation between theese elements can be created

## STRUCTURE
Add relation (joined table with user, drain and year info)  
- url = add-joined  
- data structure      {"amount_computed":"0", "amount_paid":"0", "paid":1,  "id_user":"1", "id_drain":"2", "id_year":"2020"}  
  
- single upload       controlled in ANAG-RELATIONS  
- csv bulk upload     controlled in ADD-JOINED  
  


