# README

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# SelfCare Tech Test
A tech demo based on christinetran825's SelfCare application, with redux-orm and normalize integration.
Featuring a overhauled re-ducks structure and slightly revamped api fetching sequence.

## Installation
This app requires Ruby 2.5.1, Rails >= 5.1.4, and npm install. I've separated my Client and API into two repos. Please use these repos together.

* API = https://github.com/CarneyC/YourSelfCare-API
* Client = https://github.com/CarneyC/SelfCare-C 

Once you have Ruby 2.5.1 and Rails >= 5.1.4 installed,

* cd selfcare-api from your local directory
* gem install bundler -v '1.17.3' 
* bundle install
* rake db:create
* rails db:migrate
* rails db:seed
* rails server -p 30

A postgre server with user **selfcare** should be present, The password can be set in the .env file in the api directory.

* cd client from your local directory
* npm install
* npm run

npm run should automatically open a new tab in your browser to http://localhost:3000/

The api url can be changed in the client's .env file if necessary.

## Demo Account
**james@email.com**
peaches

**gina@email.com**
cookies

