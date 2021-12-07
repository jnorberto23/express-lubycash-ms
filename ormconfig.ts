export = {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "entities": [
       "src/app/models/*.ts"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
 }