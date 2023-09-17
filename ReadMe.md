# ABOUT THIS PROJECT

This is an example of how to create a frontend html page with scripts that calculate answers
and access a Node.js backend server to save results to a simple json file.

# REQUIRED

1. Always check that you're working in the correct folder/directory whenever you do anything. It's easy to be in the wrong folder and run a command that doesn't work, or installs dependencies in the wrong place.

## Install Necessary Dependencies

1. Install "Node.js"
   This has to be done before everything else. This effectively means you are creating a Node.js project, and locks you into this specific backend tech stack.

   Typically, you install Node.js globally on your machine, which will make the 'node' and 'npm' commands available system-wide in terminal/command line. This is the standard way of installing Node.js and is generally what you'd do whether you're a beginner or an experienced developer.
   https://nodejs.org/en

   Once Node.js is installed, you'll open a terminal window in VS Code by hitting _ctrl + `_ and then create your project by entering this command into the terminal window: _npm init -y_

2. Install "Nodemon" as development dependency.
   Do this AFTER initializing your Node.js project. Nodemon is a package that automatically restarts your Node.js application whenever files are changed in the directory. It saves you the hassle of manually stopping and starting your server each time you make a change, which is very convenient during development.

   We're using it in this project to keep the server running, otherwise when we submit to the forms, nothing will happen because it can't access the API routes. They have to be "on" with a "live" server in order to work.

   Start a terminal window in VS Code by hitting _ctrl + `_ and then enternig this command _npm install --save-dev nodemon_

   Optionally, you can choose to do _npm install -g nodemon_ if you want to save nodemon to your machine globablly so it can be used in the future.

   NOTE: you MUST install Node.js first. "npm" is the command that tells the machine to use Node.js to find the package and then carry out the installation.

3. Install "Express"
   Express is a web framework that simplifies many of the complexities of setting up a web server using just the native Node.js modules. Many "fullstack" web apps have nifty acronyms that refer to their frameworks, such as:

   > MERN (MongoDB, Express, React, Node.js)
   > MEAN (MongoDB, Express, Angular, Node.js)
   > MEVN (MongoDB, Express, Vue, Node.js)

   And each of these is the generalized set of frameworks used for Database, API/Routing/Middleware, Frontend, Backend. More on MongoDB and Frontend tech in later projects.

   Install Express in terminal/command line by running this command: _npm install express_

4. Install "CORS"
   This is a package that lets you access files and website while in development. There are rules about what sources are allowed to access other files/websites/etc and usually there's a problem when you don't have this. Don't worry about the details, but we need it. Install the same way as the other dependencies by running: _npm install cors_

## How To Use This Project

1. All relevant frontend files have to be in the 'public' folder. We specified this in the server.js file.

2. The db.json has to stay in the same folder/directory as the server.js file. We specified the exact location, and if db.json moves then there will be errors.

3. You must manually start the server by entering _nodemon server.js_ in the terminal window. Make sure you're in the correct project folder, otherwise this won't work.

4. After the server is started, you can go to http://localhost:3000/home.html to start using this app.

5. This app would never work for production, but it's good to test out the main functions.

## Things To Know

1. Adding More Functions
   You can totally add more functionaltiy by adding more javascript functions in the scripts.js file.

2. About "node-modules" Folder
   This has everything you need to run Node.js for this project. It's a lot of files, and you NEVER need to send this to anyone for them to use the app.

   BUT!

   They will need to also have Node.js installed on their machine. If they do, they just enter this command _npm install_ and node will find all of the dependencies in the package.json folder and install them.

3. API's Are Necessary Now
   In order to read/write/update data, we have to access the source through an API.

   Frontend files are not allowed to access machine drives for security reasons. So we need the frontend to make a "request" to the source of the information, and then we can make changes using the "backend" technology (in this case we're using Node.js and Express)

4. WTF Is A "Port"?
   A port is a communication endpoint for network services. When a program wants to communicate with another program over a network (including the internet), it does so by sending data to a specific port number. Each port number is associated with a specific process running on a computer. Port numbers range from 0 to 65535, and different ranges within this scope are reserved for specific types of services.

   In our app, we're using Node.js and Express, and when we run the server on a specific port (e.g., 3000), the server listens for incoming HTTP requests on that port. So if your server is running on http://localhost:3000, it's waiting for incoming HTTP connections on port 3000 of your machine. The server then uses the routes and logic you've defined in your Express app to respond to requests coming in on that port.

   Some ports are common, but they could really be almost any number within the port range and you'd be fine.

5. "CRUD"
   This acronym refers to "Create, Read, Update, Delete. It's basically the core of ost API's.

6. Comments Within Project Files
   Each file type has a different way of writing comments. Comments are notes or code that you can see, but the computer ignores. I have a lot of these throughout the project to explain new things.
