const Sequelize = require("sequelize");

if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    db = new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        logging: true //false
    });
} else {
    // the application is executed on the local machine
    db = new Sequelize("postgres://postgres:secret@localhost:5432/postgres");
}

// const databaseURL =
//     process.env.DATABASE_URL ||
//     "postgres://postgres:secret@localhost:5432/postgres";

// const db = new Sequelize(databaseURL);

db.sync({ force: false })
    .then(() => console.log("Database connected"))
    .catch(console.error);

module.exports = db;
