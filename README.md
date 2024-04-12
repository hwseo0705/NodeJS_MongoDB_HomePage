# NodeJS_MongoDB_HomePage

## Creating Homepage Using Node.js, Express, MongoDB

### Project SetUp

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

5. How to Access
   - http://localhost:8183
   - add according link routes to go to pages
   - it is also deployed on 'render.com', it takes time to load but you will eventually get in
   - You can change 'Mongo Atlas' on homepage.js (i.e. const dbURI = 'mongodb+srv://seo58:0924push@cluster0.sdirjwn.mongodb.net/NodeJS_MongoDB_HomePage?retryWrites=true&w=majority';) and add your IP address on Network Access page in order to connect db

6. Things to Improve
   - I think I can only load images on my computer. I did not make photos to be able to be uploaded from whatever computer the admin is using.
   - I definitely do not have much knowledge on computer security. That should also be fixed.
  
### FYI
   - This is just a small project that I took on without really knowing anything about creating a website. It probably has many flaws. I'm sure whoever taking over is trained enough to easily understand what I've done, but if you have any questions please contact me via email, julieseo0705@gmail.com

### Helpful Links
- Node.js

- Quill
  - https://www.youtube.com/watch?v=CeRiFjYlPIw
  - https://www.youtube.com/watch?v=FGeYOqF4vIg

