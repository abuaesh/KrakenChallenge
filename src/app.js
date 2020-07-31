"use strict";

import MongoBackend from '../backend/mongo-backend.js';
import SqlBackend from '../backend/sql-backend.js';
import Dotenv from 'dotenv';
//import Transactions1 from './transactions-1.json';
//import Transactions2 from './transactions-2.json';

(async() => {

    const backendType = 0; //0 for mongoDB(default),
                            // 1 for SQL. 

    var dbConfig = null;

    if(!backendType) // mongoDB selected
    {
        dbConfig = process.env.MONGO_CONNECTION_STRING;
    }
    // Uncomment this block if your SQL backend is already configured, otherwise defaults will be used to create a new  sql DB
    else //sql selected
    {
        dbConfig = {
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASS,
            database: process.env.SQL_DB
        };
    } //end backend type selection
    
    

    let backend = (!backendType)? new MongoBackend(dbConfig): new SqlBackend(dbConfig);

})(); //end async