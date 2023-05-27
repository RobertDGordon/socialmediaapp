# Social Media App
Example Social Media App with NodeJS Express

## How to use:
  1. Run ```npm i``` to install packages
  2. Run ```nodemon index``` to start server
  3. Nav to http://localhost:3000 to view ```index.html```
  4. Nav to http://localhost:3000/post.html to add a new post

## Notes:
This is a demo app example to help you get up to speed on connecting client(front end) to a server(back end).

Take a look at the fetch calls in ```cards.js``` and ```post.js```, pay attention to where they are pointing to and what method we are using (GET or POST).

See how the controller ```feedController.js``` connects to the demo database library ```databaseLib.js``` and controls the database functions.

Database is seeded with example data in ```/data/postsData.js```, update this to your preferences

### To Do:

For extra credit
- Create a route that can ```update``` a database post (you will need to use an id) 
- Create a route that can ```delete``` a database post (you will need to use an id)
