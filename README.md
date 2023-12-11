# NodeJS_MongoDB_HomePage

## Creating Homepage Using Node.js, Express, MongoDB

#### > Project SetUp

1. Install Node.js

2. npm 

    'npm install' will install what's in package.json later so you should exclude node_modules folder when pushing to git repository

   - npm init
   - npm install express
   - npm install ejs
   - npm install mongoose
   - npm install nodemon
   - npm install express-session
   - npm install method-override

3. Add .gitignore
   - node_modules

4. Create MVC

    create models, views>partials, controllers, routes, public folders

    - Models (Data) : Model represents the structure of data, the format and the constraints with which it is stored. It is the database part of the application.
    - Views (UI) : View presents data in a form (ejs).
      - Partials : Views that are designed to be used from within other views
   - Controllers (Request-Response Handler) : Controller controls the requests of the user and then generates appropriate response which is fed to the viewer
   - Routes : Routing refers to how an application's endpoints (URIs) respond to client requests.
   - Public : Stores static files such as images, CSS files, and JS files.