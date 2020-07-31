# Shopping Website Project
This is a sample practice project to imitate websites like Amazon, Flipkart etc. <br>
You can view this project <a target="_blank" href="https://shopping-cart-project123.herokuapp.com/"> here</a>.
<br>
<br>
## About the project
Created by : <br>
Tarun Luthra <br>
( Github : tarunluthra123 )<br>
<br>
Note: This project has been developed on an Ubuntu 18.04 ( Linux ) Machine. <br>
Behaviour on Windows/Mac Environment is not yet tested.
<br>
Software Used : Jetbrains Webstorm
<br><br>
## Running the project
To run the project on your local machine, follow these instructions.
<br><br>
#### Pre-requisites
1. Make sure you have  MySQL installed on your system
2. NodeJS must be installed and running

#### Getting Started
Clone this repository into your system.

#### npm packages
Install the following packages using npm in the project directory.
1. express
2. mysql2
3. sequelize

```
npm init
npm install express mysql2 sequelize
```

#### MySQL
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

#### Starting up server
Start up src/server.js
```
cd src
node server.js
```

Your server gets started. By default, it will be started on port 4444. Change the port number in src/server.js to choose a different port.
Once started, go to 'localhost:4444' in your browser. (If you choose a different port, change the number accordingly).

The shopping website is now running.

#### Loading Data
Initially the cart will appear empty as there are no products added.<br>
You may add new products along with their description and dummy details by going to 
'localhost:4444/addproduct.html'

<br>
Alternatively, you can use the dummy data provided in seed.js .
To use it, go to <br>
src/db and run file seed.js

```
node src/db/seed.js
```

Note that this should be run only after the DB has been created or it will not work.
The above file will add some dummy data which can be used to view the project.

## Feedback
Drop any suggestions/queries at tarunluthra987@gmail.com .<br>


## Screenshots
<img src="/Screenshots/Screenshot 1.png">
<br>
<img src="/Screenshots/Screenshot 2.png">
<br>
<img src="/Screenshots/Screenshot 3.png">
<br>
<img src="/Screenshots/Screenshot 4.png">
<br>
<img src="/Screenshots/Screenshot 5.png">
<br>
<img src="/Screenshots/Screenshot 6.png">
<br>
<img src="/Screenshots/Screenshot 7.png">
<br>
<img src="/Screenshots/Screenshot 8.png">
