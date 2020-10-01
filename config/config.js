module.exports =
{
  "development": {
<<<<<<< HEAD:config/config.json
    "username": "root",
    "password": "a$heikh2020",
    "database": "passport_demo",
=======
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
>>>>>>> 9006afc7475d575b0f668c5678e11eb426200600:config/config.js
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
