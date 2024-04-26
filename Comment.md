This is a note for me!!!
# NOTE
## Cookie
Cookie has user's session information and more. This string object comes with *HTTP header* and key-value pair when it sents from client to server. <br>
So, we need `cookie-parser` to **parse** this string and make it an accessible **object**.

## `res` and `req` Objects in Express
- Objects in HTTP connection that used in **Express**.
- These objects has own properties and methods to accesss its data for developement.

# Command
### `npm run server`
- I explicitly changed the 'package.json' script. Used ***nodemon*** to run this route - "backend/server.js". <br>
>
> ***Nodemon*** is a development tool that in Node.js which it automatically applies the changes if there is any chnages in the files.

# Directory

## Backend

#### server.js
- Server.js imports variables and methods functions for routers, connections for MongoDB and few variables for URI and PORT address.
- This file also imports .env file where it stores basic informations.

### utils
#### generateToken.js
- Create a token and cookie.
- This will help to get a information about users' status. (Login information, chat information(?), basic user information)
- Used JWT to create and decrpyt the cookies. 
    - For more details please look into 'generateToken.js'

### routes
#### auth.routes.js
- It contains *singup*, *login* and *logout* functionalities route.

#### message.routes.js
- Implement `sendMessage` here.

### models
#### user.model.js
- Created a Mongoose **model** for user.
    - fullname: **String**
    - username: **String**
    - password: **String**
    - gender: **String**
    - random generated profile picture: **String**

#### conversation.model.js
- Create converation model. 
    - Participants: **Mongoose ID Object**
    - messages: **String**

#### message.model.js
- Create message model.
    - senderId: **Mongoose ID Object**
    - receiverId: **Mongoose ID Object**
    - message: **String**

> This model is a `mongoose.model` object. So you can use `model` properties and methods such as `findOne`.

### db
#### connecToMongoDB.js
- `connectToMongoDB` implemented here.
    - Used `mongoose.connect` method to connect MongoDB URI.

### controllers
#### auth.controller.js
- Implemented `signup`, `login` and `logout` functionalities in this files
    - Created JWT(JASON Web Token) using `generateTokenAndCookie` function.
-     





## Frontend