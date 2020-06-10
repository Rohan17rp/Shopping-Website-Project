#Shopping Website Project
<br>
This is a sample practice project to imitate websites like Amazon, Flipkart etc.
<br>
<br>
Created by : <br>
Tarun Luthra
( github : tarunluthra )<br>
<br>
Note: This project has been developed on an Ubuntu 18.04 ( Linux ) Machine. Behaviour on Windows/Mac Environment is not yet tested
<br>
Software Used : Jetbrains Webstorm
<br>


<br><br>
##Pre-requisites
1. Make sure you have  MySQL installed on your system
2. NodeJS must be installed and running

##Getting Started
Clone this repository into your system.

##npm packages
Install the following packages using npm in the project directory.
1. express
2. mysql2
3. sequelize

```
npm install express mysql2 sequelize
```

##MySQL
We need to set up a MySQL database for the backend to interact with.
We will create a sample database and a sample user to access this database

Open mysql in your system and run the following commands
```mysql
create database shopproject;
create user shopadmin identified by 'shoppass';
use shopproject;
grant all privileges on shopproject to shopadmin;
grant all privileges on shopproject.* to shopadmin;
```

If you choose to have some other names for database, user and password for your database, make the according updates in /src/db/connection.js

##Starting up server
Start up src/server.js
```
cd src
node server.js
```

Your server gets started. By default, it will be started on port 4444. Change the port number in src/server.js to choose a different port.
Once started, go to 'localhost:4444' in your browser. (If you choose a different port, change the number accordingly).

The shopping website is now running.

##Feedback
Drop any suggestions/queries at tarunluthra987@gmail.com
