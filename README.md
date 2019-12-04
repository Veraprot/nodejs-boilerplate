
# Letters Game
API server/application built on Nodejs. 

# Requirements
    Node (10.15.0)
    NPM (6.4.1)
    MongoDB (3.6.3)

# Quick Start 
### Install dependencies for server

```
npm install
```

### Make sure MongoDB is running on your system

1. **Open mongo shell by running 'mongo' in command line and create a new database letters-game**

     Shows all mongo databases on the local machine: 
    
    ``` 
    show dbs 
    ```

    Switches to letters-game database: 
    ```
    use letters-game 
    ```
    

2. **Create .env file in the root directory and add:**
    ```
    MONGO_URI = 'mongodb://localhost:27017/noken'
    ```

# Testing 
To run tests run ``` jest ``` while running local server 

